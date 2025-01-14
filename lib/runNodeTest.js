const execNode = require("./helpers/execNode");
const runTest = require("./helpers/runTest");

runTest({
  name: process.version.startsWith("v16.") ? "node-lts" : "node",
  execute: async (filename) => {
    return await execNode(`src/${filename}`);
  },
  onlyMjs: true,
});
