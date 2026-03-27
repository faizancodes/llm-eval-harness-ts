import { describe, it, expect } from "vitest";
import { LlmEvalHarnessTs } from "../src";

describe("LlmEvalHarnessTs", () => {
  it("should create an instance with default options", () => {
    const instance = new LlmEvalHarnessTs();
    expect(instance).toBeDefined();
  });

  it("should accept custom options", () => {
    const instance = new LlmEvalHarnessTs({ verbose: true });
    expect(instance).toBeDefined();
  });

  it("should run successfully", async () => {
    const instance = new LlmEvalHarnessTs();
    const result = await instance.run();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
