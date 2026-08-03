import { groupTokens, layers, resolveToken } from "./tokens.js";
import { componentUsage } from "./componentUsage.js";

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

function renderScopes(scopes) {
  if (!scopes.length) {
    return '<span class="scope scope--hidden">Hidden · no direct scope</span>';
  }
  return scopes.map((scope) => `<span class="scope">${escapeHtml(scope)}</span>`).join("");
}

function renderComponents(components) {
  if (!components.length) {
    return '<span class="component component--empty">Not currently bound</span>';
  }
  return components.map((component) => `<span class="component">${escapeHtml(component)}</span>`).join("");
}

function renderToken(token, layerId) {
  const resolved = resolveToken(token);
  const components = layerId === "component" ? (componentUsage[token.name] || []) : null;
  const alias = token.alias
    ? `<div class="alias"><span>Aliases</span><code>${escapeHtml(token.alias)}</code></div>`
    : '<div class="alias alias--raw"><span>Source</span><code>Raw value</code></div>';

  return `
    <article
      class="token-row"
      data-search="${escapeHtml(`${token.name} ${token.description} ${token.scopes.join(" ")} ${token.alias || ""} ${(components || []).join(" ")}`.toLowerCase())}"
      data-scopes="${escapeHtml(token.scopes.join(" "))}"
    >
      <div class="token-identity">
        <div class="swatch" style="--swatch:${resolved.cssValue}">
          <span></span>
        </div>
        <div>
          <code class="token-name">${escapeHtml(token.name)}</code>
          <p>${escapeHtml(token.description)}</p>
        </div>
      </div>
      ${alias}
      ${components ? `
        <div class="used-by">
          <span>Used by</span>
          <div>${renderComponents(components)}</div>
        </div>
      ` : ""}
      <div class="value">
        <span>Resolved value</span>
        <code>${escapeHtml(resolved.displayValue)}</code>
      </div>
      <div class="scopes">
        <span>Scope</span>
        <div>${renderScopes(token.scopes)}</div>
      </div>
    </article>
  `;
}

function renderLayer(layer) {
  const groups = groupTokens(layer);
  return `
    <section class="layer" id="${layer.id}">
      <header class="layer-header">
        <div>
          <p class="eyebrow">${layer.eyebrow}</p>
          <h2>${layer.name}</h2>
          <p class="layer-description">${layer.description}</p>
        </div>
        <div class="token-count">${layer.tokens.length}<span>tokens</span></div>
      </header>
      <div class="layer-groups">
        ${Object.entries(groups).map(([name, tokens], index) => `
          <details class="token-group" ${index < 4 ? "open" : ""}>
            <summary>
              <span>${escapeHtml(name)}</span>
              <span>${tokens.length}</span>
            </summary>
            <div class="token-list">
              ${tokens.map((token) => renderToken(token, layer.id)).join("")}
            </div>
          </details>
        `).join("")}
      </div>
    </section>
  `;
}

function renderArchitecture(activeLayers) {
  return layers.map((layer, index) => `
    <a class="architecture-card ${activeLayers.includes(layer.id) ? "" : "is-muted"}" href="#${layer.id}">
      <span>0${index + 1}</span>
      <strong>${layer.name.replace(" Colors", "")}</strong>
      <small>${layer.tokens.length} tokens</small>
    </a>
    ${index < layers.length - 1 ? '<span class="architecture-arrow">→</span>' : ""}
  `).join("");
}

function createColorLibrary(selectedLayer = "all") {
  const activeLayers = selectedLayer === "all"
    ? layers.map((layer) => layer.id)
    : [selectedLayer];
  const visibleLayers = layers.filter((layer) => activeLayers.includes(layer.id));
  const total = visibleLayers.reduce((sum, layer) => sum + layer.tokens.length, 0);

  const root = document.createElement("main");
  root.className = "color-library";
  root.innerHTML = `
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">weDAT Design System 2.0 Glass</p>
        <h1>Color token architecture</h1>
        <p>Trace every color from raw foundation values to semantic meaning, shared interaction behavior, and component implementation.</p>
      </div>
      <div class="hero-stat">
        <strong>${total}</strong>
        <span>documented colors</span>
      </div>
    </header>

    <nav class="architecture" aria-label="Color token layers">
      ${renderArchitecture(activeLayers)}
    </nav>

    <section class="toolbar">
      <label class="search">
        <span>Search tokens, aliases, descriptions, or scopes</span>
        <input type="search" placeholder="Try “disabled”, “STROKE_COLOR”, or “button/primary”…" />
      </label>
      <label class="scope-filter">
        <span>Scope</span>
        <select>
          <option value="">All scopes</option>
          <option value="FRAME_FILL">Frame fill</option>
          <option value="SHAPE_FILL">Shape fill</option>
          <option value="TEXT_FILL">Text fill</option>
          <option value="STROKE_COLOR">Stroke color</option>
          <option value="hidden">Hidden primitives</option>
        </select>
      </label>
    </section>

    <div class="results-summary" aria-live="polite">${total} tokens shown</div>
    ${visibleLayers.map(renderLayer).join("")}
  `;

  const input = root.querySelector("input");
  const select = root.querySelector("select");
  const summary = root.querySelector(".results-summary");

  const applyFilters = () => {
    const query = input.value.trim().toLowerCase();
    const scope = select.value;
    let visible = 0;

    root.querySelectorAll(".token-row").forEach((row) => {
      const matchesQuery = !query || row.dataset.search.includes(query);
      const matchesScope = !scope
        || (scope === "hidden" ? row.dataset.scopes === "" : row.dataset.scopes.includes(scope));
      row.hidden = !(matchesQuery && matchesScope);
      if (!row.hidden) visible += 1;
    });

    root.querySelectorAll(".token-group").forEach((group) => {
      const hasVisibleRows = [...group.querySelectorAll(".token-row")].some((row) => !row.hidden);
      group.hidden = !hasVisibleRows;
      if ((query || scope) && hasVisibleRows) group.open = true;
    });

    root.querySelectorAll(".layer").forEach((layer) => {
      layer.hidden = ![...layer.querySelectorAll(".token-row")].some((row) => !row.hidden);
    });

    summary.textContent = `${visible} ${visible === 1 ? "token" : "tokens"} shown`;
  };

  input.addEventListener("input", applyFilters);
  select.addEventListener("change", applyFilters);
  return root;
}

export default {
  title: "Foundations/Colors"
};

export const AllLayers = {
  name: "All layers",
  render: () => createColorLibrary("all")
};

export const PrimitiveColors = {
  name: "01 · Primitive Colors",
  render: () => createColorLibrary("primitive")
};

export const SemanticColors = {
  name: "02 · Semantic Colors",
  render: () => createColorLibrary("semantic")
};

export const InteractionColors = {
  name: "03 · Interaction Colors",
  render: () => createColorLibrary("interaction")
};

export const ComponentColors = {
  name: "04 · Component Colors",
  render: () => createColorLibrary("component")
};
