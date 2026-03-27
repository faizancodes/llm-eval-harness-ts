/**
 * Configuration options for LlmEvalHarnessTs.
 */
export interface LlmEvalHarnessTsOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: Unified adapter for llm-chain compatible providers
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: Dataset + prompt template versioning via manifest files
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: Deterministic runs with caching and seed control
   */
  feature3?: Record<string, unknown>;

  /**
   * Configuration for: Pluggable metrics (exact-match, rubric/judge, latency, cost)
   */
  feature4?: Record<string, unknown>;

  /**
   * Configuration for: Markdown/JSON report generation for PR review
   */
  feature5?: Record<string, unknown>;
}

/**
 * Result returned by LlmEvalHarnessTs operations.
 */
export interface LlmEvalHarnessTsResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}
