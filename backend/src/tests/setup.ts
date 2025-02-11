import { beforeAll, afterAll } from "vitest";
import { app } from "../index";
import { startServer, stopServer } from "../utils/testUtils";

export let serverUrl = "";

beforeAll(async () => {
  console.log("🔄 Starting test server...");
  serverUrl = await startServer(app);
  console.log(`✅ Test server running at: ${serverUrl}`);
});

afterAll(async () => {
  console.log("🛑 Stopping test server...");
  await stopServer();
});
