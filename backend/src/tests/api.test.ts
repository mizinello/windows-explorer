import { describe, it, expect } from "vitest";
import { fetch } from "undici";
import { serverUrl } from "./setup";

describe("API Endpoints", () => {
  it("should return API is working", async () => {
    const res = await fetch(`${serverUrl}/`);
    const text = await res.text();
    expect(text).toBe("API is working!");
  });

  it("should create a folder", async () => {
    const res = await fetch(`${serverUrl}/folders`, {
      method: "POST",
      body: JSON.stringify({ name: "Test Folder", parentId: null }),
      headers: { "Content-Type": "application/json" },
    });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.name).toBe("Test Folder");
  });
});
