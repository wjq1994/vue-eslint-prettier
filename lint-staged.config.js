// lint-staged.config.js
module.exports = {
  "*.{js,vue}": () => "npm run lint",
  "**/*.ts?(x)": () => ["npm run lint", "tsc -p tsconfig.json --noEmit"],
};
