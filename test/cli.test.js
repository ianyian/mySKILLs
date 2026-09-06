import test from "node:test";
import assert from "node:assert/strict";
import { run } from "../src/cli.js";

test("prints help without requiring an API key", async () => {
  const originalLog = console.log;
  const output = [];
  console.log = (message) => output.push(message);
  try {
    await run(["--help"]);
  } finally {
    console.log = originalLog;
  }
  assert.match(output.join("\n"), /repo-explorer/);
  assert.match(output.join("\n"), /research-brief/);
  assert.match(output.join("\n"), /idea-to-execution/);
});

test("rejects unknown commands", async () => {
  await assert.rejects(() => run(["not-a-command"]), /Unknown command/);
});
