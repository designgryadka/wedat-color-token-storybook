import { layers, resolveToken } from "../src/tokens.js";

const expectedCounts = {
  primitive: 85,
  semantic: 37,
  interaction: 7,
  component: 116
};

const issues = [];

for (const layer of layers) {
  if (layer.tokens.length !== expectedCounts[layer.id]) {
    issues.push(`${layer.name}: expected ${expectedCounts[layer.id]}, got ${layer.tokens.length}`);
  }

  const names = new Set();
  for (const token of layer.tokens) {
    if (names.has(token.name)) issues.push(`${layer.name}: duplicate ${token.name}`);
    names.add(token.name);
    if (!token.description?.trim()) issues.push(`${layer.name}: missing description for ${token.name}`);
    if (!Array.isArray(token.scopes)) issues.push(`${layer.name}: missing scopes for ${token.name}`);
    const resolved = resolveToken(token);
    if (resolved.displayValue === "Unresolved") issues.push(`${layer.name}: unresolved ${token.name} → ${token.alias}`);
  }
}

if (issues.length) {
  console.error(issues.join("\n"));
  process.exit(1);
}

const total = layers.reduce((sum, layer) => sum + layer.tokens.length, 0);
console.log(`Validated ${total} color tokens across ${layers.length} layers.`);
