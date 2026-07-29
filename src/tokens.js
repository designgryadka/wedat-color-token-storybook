const palettes = {
  neutral: ["#EDF0FC", "#D3DCEB", "#BAC4D8", "#A0ACC4", "#8B98B3", "#7786A4", "#687792", "#56637A", "#465064", "#323B4C"],
  gray: ["#FAFAFA", "#F6F6F6", "#F0F0F0", "#E2E2E2", "#C0C0C0", "#A1A1A1", "#787878", "#636363", "#444444", "#232323"],
  "brand/primary": ["#E3F2FF", "#BCDEFF", "#90C9FF", "#63B4FF", "#42A4FF", "#2594FE", "#2786EF", "#2574DB", "#2462C9", "#2243A8"],
  green: ["#E8F5EA", "#C8E7CA", "#A6D8A9", "#82CA87", "#66BE6D", "#4CB253", "#43A34A", "#38913F", "#2E8035", "#1B6122"],
  yellow: ["#FFF9E0", "#FFEEB1", "#FFE47D", "#FFDB44", "#FFD100", "#FFC800", "#FFB900", "#FFA500", "#FF9300", "#FF7200"],
  red: ["#FBE9E7", "#FFCBBC", "#FFAA90", "#FF8964", "#FF6E42", "#FF5421", "#F44E1D", "#E64718", "#D84014", "#BF330A"],
  "brand/secondary": ["#E5E9EF", "#BDC7D9", "#93A3C0", "#6A7FA6", "#4B6595", "#274C86", "#21457E", "#173C72", "#103366", "#07224F"],
  orange: ["#FFF3DF", "#FFDFAF", "#FFCA7B", "#FFB444", "#FFA413", "#FF9400", "#FB8800", "#F57700", "#EF6700", "#E74A00"]
};

const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const primitive = [];

for (const [family, values] of Object.entries(palettes)) {
  values.forEach((value, index) => primitive.push({
    name: `${family}/${steps[index]}`,
    value,
    scopes: [],
    description: `${family.replace("/", " ")} foundation color at step ${steps[index]}. Use through semantic, interaction, or component aliases.`
  }));
}

primitive.push(
  {
    name: "base/white",
    value: "#FFFFFF",
    scopes: [],
    description: "Base white foundation color for surfaces and inverse foreground content."
  },
  {
    name: "alpha/white/40",
    value: "rgba(255, 255, 255, 0.4)",
    displayValue: "#FFFFFF / 40%",
    scopes: [],
    description: "White with 40% alpha for glass surfaces and translucent overlays."
  },
  {
    name: "alpha/blue/08",
    value: "rgba(37, 116, 219, 0.08)",
    displayValue: "#2574DB / 8%",
    scopes: [],
    description: "Primary blue with 8% alpha for subtle interactive glass backgrounds."
  },
  {
    name: "alpha/blue/12",
    value: "rgba(37, 116, 219, 0.12)",
    displayValue: "#2574DB / 12%",
    scopes: [],
    description: "Primary blue with 12% alpha for selected backgrounds."
  },
  {
    name: "alpha/blue/20",
    value: "rgba(37, 116, 219, 0.2)",
    displayValue: "#2574DB / 20%",
    scopes: [],
    description: "Primary blue with 20% alpha for strong selected backgrounds."
  }
);

const semanticDefinitions = [
  ["background/canvas", "neutral/50", ["FRAME_FILL", "SHAPE_FILL"], "Primary application canvas background."],
  ["background/surface", "base/white", ["FRAME_FILL", "SHAPE_FILL"], "Default surface background for cards, panels, and containers."],
  ["background/subtle", "brand/primary/50", ["FRAME_FILL", "SHAPE_FILL"], "Subtle accent background for low-emphasis highlighted content."],
  ["background/muted", "gray/100", ["FRAME_FILL", "SHAPE_FILL"], "Muted neutral background for secondary regions."],
  ["background/brand-subtle", "neutral/50", ["FRAME_FILL", "SHAPE_FILL"], "Subtle branded background for broad interface regions."],
  ["background/selected", "alpha/blue/12", ["FRAME_FILL", "SHAPE_FILL"], "Background for selected elements with standard emphasis."],
  ["background/selected-strong", "alpha/blue/20", ["FRAME_FILL", "SHAPE_FILL"], "Background for selected elements requiring stronger emphasis."],
  ["background/glass", "alpha/white/40", ["FRAME_FILL", "SHAPE_FILL"], "Translucent white background for glass surfaces."],

  ["Text & Icons/primary", "neutral/900", ["SHAPE_FILL", "TEXT_FILL"], "Primary text and icon color for high-emphasis content."],
  ["Text & Icons/secondary", "neutral/600", ["SHAPE_FILL", "TEXT_FILL"], "Secondary text and icon color for supporting content."],
  ["Text & Icons/inverse", "base/white", ["SHAPE_FILL", "TEXT_FILL"], "Text and icon color displayed on dark or saturated backgrounds."],
  ["Text & Icons/disabled", "neutral/600", ["SHAPE_FILL", "TEXT_FILL"], "Text and icon color for disabled interface elements."],
  ["Text & Icons/link/default", "brand/primary/800", ["SHAPE_FILL", "TEXT_FILL"], "Default foreground color for text links."],
  ["Text & Icons/link/hover", "brand/primary/500", ["SHAPE_FILL", "TEXT_FILL"], "Foreground color for text links on hover."],
  ["Text & Icons/link/pressed", "brand/secondary/800", ["SHAPE_FILL", "TEXT_FILL"], "Foreground color for pressed text links."],
  ["Text & Icons/info", "brand/primary/800", ["SHAPE_FILL", "TEXT_FILL"], "Foreground color for informational content."],
  ["Text & Icons/success", "green/800", ["SHAPE_FILL", "TEXT_FILL"], "Foreground color for successful content."],
  ["Text & Icons/warning", "yellow/900", ["SHAPE_FILL", "TEXT_FILL"], "Foreground color for warning content."],
  ["Text & Icons/danger", "red/800", ["SHAPE_FILL", "TEXT_FILL"], "Foreground color for dangerous or error content."],

  ["border/default", "neutral/400", ["STROKE_COLOR"], "Default border for controls and containers."],
  ["border/hover", "brand/primary/500", ["STROKE_COLOR"], "Border color for interactive elements on hover."],
  ["border/focus", "brand/primary/500", ["STROKE_COLOR"], "Border and focus indicator color for keyboard focus."],
  ["border/selected", "brand/primary/700", ["STROKE_COLOR"], "Border color for selected elements."],
  ["border/disabled", "neutral/200", ["STROKE_COLOR"], "Border color for disabled elements."],
  ["border/danger", "red/800", ["STROKE_COLOR"], "Border color for dangerous or invalid elements."],

  ["status/info/background", "brand/primary/700", ["FRAME_FILL", "SHAPE_FILL"], "Filled background color for informational statuses and badges."],
  ["status/info/foreground", "base/white", ["SHAPE_FILL", "TEXT_FILL"], "Text and icon color displayed on filled informational status backgrounds."],
  ["status/info/border", "brand/primary/700", ["STROKE_COLOR"], "Border color for informational status elements when a border is used."],
  ["status/success/background", "green/800", ["FRAME_FILL", "SHAPE_FILL"], "Filled background color for successful statuses and badges."],
  ["status/success/foreground", "base/white", ["SHAPE_FILL", "TEXT_FILL"], "Text and icon color displayed on filled success status backgrounds."],
  ["status/success/border", "green/800", ["STROKE_COLOR"], "Border color for success status elements when a border is used."],
  ["status/warning/background", "yellow/400", ["FRAME_FILL", "SHAPE_FILL"], "Filled background color for warning statuses and badges."],
  ["status/warning/foreground", "neutral/900", ["SHAPE_FILL", "TEXT_FILL"], "Text and icon color displayed on filled warning status backgrounds."],
  ["status/warning/border", "yellow/400", ["STROKE_COLOR"], "Border color for warning status elements when a border is used."],
  ["status/danger/background", "red/800", ["FRAME_FILL", "SHAPE_FILL"], "Filled background color for dangerous, critical, or error statuses and badges."],
  ["status/danger/foreground", "base/white", ["SHAPE_FILL", "TEXT_FILL"], "Text and icon color displayed on filled danger status backgrounds."],
  ["status/danger/border", "red/800", ["STROKE_COLOR"], "Border color for danger status elements when a border is used."]
];

const interactionDefinitions = [
  ["primary/background/default", "brand/primary/700", ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"], "Default background color for primary interactive elements."],
  ["primary/background/hover", "brand/primary/500", ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"], "Background color for primary interactive elements on hover."],
  ["primary/background/pressed", "brand/secondary/800", ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"], "Background color for primary interactive elements while pressed or activated."],
  ["primary/background/focus", "brand/primary/500", ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"], "Background color for primary interactive elements in the focused state."],
  ["primary/background/disabled", "neutral/200", ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"], "Background color for disabled primary interactive elements."],
  ["primary/foreground/default", "base/white", ["SHAPE_FILL", "TEXT_FILL"], "Text, icon, and selection indicator color on primary interactive backgrounds."],
  ["primary/foreground/disabled", "neutral/600", ["SHAPE_FILL", "TEXT_FILL"], "Text, icon, and selection indicator color for disabled primary interactive elements."]
];

const definitionsToTokens = (definitions) => definitions.map(([name, alias, scopes, description]) => ({
  name,
  alias,
  scopes,
  description
}));

const semantic = definitionsToTokens(semanticDefinitions);
const interaction = definitionsToTokens(interactionDefinitions);

const component = [];
const addComponent = (name, alias, scopes) => component.push({
  name,
  alias,
  scopes,
  description: `Color for the ${name.replaceAll("/", " ")} role.`
});

const fillScopes = ["FRAME_FILL", "SHAPE_FILL"];
const foregroundScopes = ["SHAPE_FILL", "TEXT_FILL"];
const strokeScopes = ["STROKE_COLOR"];
const states = ["default", "hover", "pressed", "focus", "disabled", "loading"];

const primaryBackground = {
  default: "primary/background/default",
  hover: "primary/background/hover",
  pressed: "primary/background/pressed",
  focus: "primary/background/focus",
  disabled: "primary/background/disabled",
  loading: "primary/background/default"
};
states.forEach((state) => addComponent(`button/primary/background/${state}`, primaryBackground[state], fillScopes));
["default", "hover", "pressed", "focus"].forEach((state) => addComponent(`button/primary/foreground/${state}`, "primary/foreground/default", foregroundScopes));
addComponent("button/primary/foreground/disabled", "primary/foreground/disabled", foregroundScopes);
addComponent("button/primary/loader/track", "primary/foreground/default", strokeScopes);
addComponent("button/primary/loader/indicator", "primary/foreground/default", strokeScopes);

const secondaryBackground = {
  default: "background/surface",
  hover: "background/surface",
  pressed: "background/surface",
  focus: "background/surface",
  disabled: "gray/50",
  loading: "background/surface"
};
states.forEach((state) => addComponent(`button/secondary/background/${state}`, secondaryBackground[state], fillScopes));
const secondaryForeground = {
  default: "Text & Icons/primary",
  hover: "brand/primary/700",
  pressed: "brand/secondary/800",
  focus: "brand/primary/700",
  disabled: "Text & Icons/disabled"
};
Object.entries(secondaryForeground).forEach(([state, alias]) => addComponent(`button/secondary/foreground/${state}`, alias, foregroundScopes));
const secondaryBorder = {
  default: "border/default",
  hover: "border/hover",
  pressed: "brand/secondary/800",
  focus: "border/focus",
  disabled: "gray/300",
  loading: "border/default"
};
states.forEach((state) => addComponent(`button/secondary/border/${state}`, secondaryBorder[state], strokeScopes));
addComponent("button/secondary/loader/track", "Text & Icons/secondary", strokeScopes);
addComponent("button/secondary/loader/indicator", "neutral/400", strokeScopes);

const dangerBackground = {
  default: "red/800",
  hover: "red/500",
  pressed: "red/900",
  focus: "red/500",
  disabled: "brand/secondary/50",
  loading: "red/800"
};
states.forEach((state) => addComponent(`button/danger/background/${state}`, dangerBackground[state], fillScopes));
["default", "hover", "pressed", "focus"].forEach((state) => addComponent(`button/danger/foreground/${state}`, "Text & Icons/inverse", foregroundScopes));
addComponent("button/danger/foreground/disabled", "Text & Icons/disabled", foregroundScopes);
addComponent("button/danger/loader/track", "Text & Icons/inverse", strokeScopes);
addComponent("button/danger/loader/indicator", "Text & Icons/inverse", strokeScopes);

const warningBackground = {
  default: "yellow/300",
  hover: "yellow/200",
  pressed: "yellow/500",
  focus: "yellow/200",
  disabled: "brand/secondary/50",
  loading: "yellow/300"
};
states.forEach((state) => addComponent(`button/warning/background/${state}`, warningBackground[state], fillScopes));
["default", "hover", "pressed", "focus"].forEach((state) => addComponent(`button/warning/foreground/${state}`, "Text & Icons/primary", foregroundScopes));
addComponent("button/warning/foreground/disabled", "Text & Icons/disabled", foregroundScopes);
addComponent("button/warning/loader/track", "yellow/600", strokeScopes);
addComponent("button/warning/loader/indicator", "yellow/800", strokeScopes);
addComponent("button/focus-ring", "border/focus", strokeScopes);

const glassBackground = {
  default: "background/glass",
  hover: "alpha/blue/08",
  pressed: "background/glass",
  focus: "alpha/blue/08",
  disabled: "background/glass",
  loading: "background/glass"
};
Object.entries(glassBackground).forEach(([state, alias]) => addComponent(`button-glass/secondary/background/${state}`, alias, fillScopes));
const glassForeground = {
  default: "Text & Icons/primary",
  hover: "brand/primary/700",
  pressed: "brand/secondary/800",
  focus: "brand/primary/700",
  disabled: "Text & Icons/secondary"
};
Object.entries(glassForeground).forEach(([state, alias]) => addComponent(`button-glass/secondary/foreground/${state}`, alias, foregroundScopes));
addComponent("button-glass/secondary/loader/track", "Text & Icons/secondary", strokeScopes);
addComponent("button-glass/secondary/loader/indicator", "neutral/500", strokeScopes);
addComponent("button-glass/focus-ring", "border/focus", strokeScopes);

const selectionStates = {
  default: "primary/background/default",
  hover: "primary/background/hover",
  focus: "primary/background/focus",
  disabled: "primary/background/disabled"
};
Object.entries(selectionStates).forEach(([state, alias]) => addComponent(`checkbox/background/selected/${state}`, alias, fillScopes));
["default", "hover", "focus"].forEach((state) => addComponent(`checkbox/indicator/${state}`, "primary/foreground/default", fillScopes));
addComponent("checkbox/indicator/disabled", "primary/foreground/disabled", fillScopes);
const controlBorders = {
  default: "border/default",
  hover: "border/hover",
  focus: "border/focus",
  disabled: "border/disabled"
};
Object.entries(controlBorders).forEach(([state, alias]) => addComponent(`checkbox/border/unselected/${state}`, alias, strokeScopes));
addComponent("checkbox/focus-ring", "border/focus", strokeScopes);

Object.entries(selectionStates).forEach(([state, alias]) => {
  addComponent(`radio/indicator/selected/${state}`, alias, fillScopes);
  addComponent(`radio/border/selected/${state}`, alias, strokeScopes);
});
Object.entries(controlBorders).forEach(([state, alias]) => addComponent(`radio/border/unselected/${state}`, alias, strokeScopes));
addComponent("radio/focus-ring", "border/focus", strokeScopes);

Object.entries(selectionStates).forEach(([state, alias]) => addComponent(`switch/track/on/${state}`, alias, fillScopes));
const switchOffTrack = {
  default: "neutral/500",
  hover: "brand/secondary/800",
  focus: "neutral/500",
  disabled: "border/default"
};
Object.entries(switchOffTrack).forEach(([state, alias]) => addComponent(`switch/track/off/${state}`, alias, strokeScopes));
["default", "hover", "focus"].forEach((state) => addComponent(`switch/thumb/on/${state}`, "primary/foreground/default", fillScopes));
addComponent("switch/thumb/on/disabled", "primary/foreground/disabled", fillScopes);
["default", "hover", "focus", "disabled"].forEach((state) => addComponent(`switch/thumb/off/${state}`, "neutral/500", fillScopes));
addComponent("switch/focus-ring", "border/focus", strokeScopes);

export const layers = [
  {
    id: "primitive",
    name: "Primitive Colors",
    eyebrow: "Layer 01 · Foundations",
    description: "Raw color values. Hidden from property pickers and consumed through higher-level aliases.",
    tokens: primitive
  },
  {
    id: "semantic",
    name: "Semantic Colors",
    eyebrow: "Layer 02 · Meaning",
    description: "Interface-wide roles for surfaces, content, borders, and statuses.",
    tokens: semantic
  },
  {
    id: "interaction",
    name: "Interaction Colors",
    eyebrow: "Layer 03 · Behavior",
    description: "Shared visual behavior for primary interactive states across controls.",
    tokens: interaction
  },
  {
    id: "component",
    name: "Component Colors",
    eyebrow: "Layer 04 · Implementation",
    description: "Component-specific contracts for Button, Button Glass, Checkbox, Radio, and Switch.",
    tokens: component
  }
];

const layerMaps = Object.fromEntries(layers.map((layer) => [
  layer.id,
  Object.fromEntries(layer.tokens.map((token) => [token.name, token]))
]));

const lookupOrder = ["component", "interaction", "semantic", "primitive"];

export function resolveToken(token) {
  if (token.value) return {
    cssValue: token.value,
    displayValue: token.displayValue || token.value,
    path: [token.name]
  };

  const seen = new Set();
  const path = [token.name];
  let alias = token.alias;

  while (alias && !seen.has(alias)) {
    seen.add(alias);
    path.push(alias);
    const next = lookupOrder.map((layer) => layerMaps[layer][alias]).find(Boolean);
    if (!next) break;
    if (next.value) return {
      cssValue: next.value,
      displayValue: next.displayValue || next.value,
      path
    };
    alias = next.alias;
  }

  return { cssValue: "transparent", displayValue: "Unresolved", path };
}

export function groupTokens(layer) {
  return layer.tokens.reduce((groups, token) => {
    const parts = token.name.split("/");
    const depth = layer.id === "component" ? 2 : 1;
    const group = parts.slice(0, depth).join(" / ");
    (groups[group] ||= []).push(token);
    return groups;
  }, {});
}
