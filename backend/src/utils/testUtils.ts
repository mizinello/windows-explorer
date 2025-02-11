import { Bun } from "bun";
import { Elysia } from "elysia";

let server: any;

export async function startServer(app: Elysia) {
  server = app.listen(4000);  // ✅ Use a test port (4000)
  return `http://localhost:4000`; // ✅ Return a valid URL
}

export async function stopServer() {
  if (server) {
    server.stop();
    console.log("🛑 Test server stopped");
  }
}
