# llm-eval-harness-ts

Provider-agnostic LLM evaluation runner with dataset versioning and reproducible scoring reports.

## Installation

```bash
npm install llm-eval-harness-ts
```

## Quick Start

```typescript
import { LlmEvalHarnessTs } from "llm-eval-harness-ts";

const instance = new LlmEvalHarnessTs();
const result = await instance.run();
console.log(result);
```

## Features

- Unified adapter for llm-chain compatible providers
- Dataset + prompt template versioning via manifest files
- Deterministic runs with caching and seed control
- Pluggable metrics (exact-match, rubric/judge, latency, cost)
- Markdown/JSON report generation for PR review

## API Reference

### `LlmEvalHarnessTs`

#### Constructor

```typescript
new LlmEvalHarnessTs(options?: LlmEvalHarnessTsOptions)
```

#### Methods

- `run()` - Execute the main operation. Returns `Promise<LlmEvalHarnessTsResult>`.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run lint
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub release with tag `v0.x.0`
3. The GitHub Action will automatically publish to npm

## License

MIT
