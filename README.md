# @ianyian/myskills

Three practical AI skills that turn a Node.js CLI into a small project assistant:

- **`repo-explorer`** understands a local repository and writes an architecture and onboarding guide.
- **`research-brief`** turns a topic and optional URLs into a cited Markdown research brief.
- **`idea-to-execution`** converts an idea into an implementation plan with tasks and acceptance criteria.

Repository: <https://github.com/ianyian/mySKILLs>

## Requirements

- Node.js 18 or newer
- An OpenAI-compatible API key

The CLI uses the OpenAI-compatible Chat Completions API. It works with OpenAI by default and can be pointed at another compatible provider with `OPENAI_BASE_URL`.

## Install and configure

Run without installing:

```bash
npx @ianyian/myskills --help
```

Or install globally:

```bash
npm install --global @ianyian/myskills
```

Configure the model client:

```bash
export OPENAI_API_KEY="your-api-key"
# Optional:
export OPENAI_MODEL="gpt-4o-mini"
export OPENAI_BASE_URL="https://api.openai.com/v1"
```

## Examples

Analyze the current repository:

```bash
npx @ianyian/myskills repo-explorer .
```

This creates `PROJECT_OVERVIEW.md`. Choose another output path with `--output`:

```bash
npx @ianyian/myskills repo-explorer ./my-project --output docs/onboarding.md
```

Create a research brief:

```bash
npx @ianyian/myskills research-brief "Compare PostgreSQL and MongoDB"
```

Add source URLs. The skill fetches their text and asks the model to cite them:

```bash
npx @ianyian/myskills research-brief \
  "Best practices for Node.js error handling" \
  --url https://nodejs.org/en/learn/getting-started/introduction-to-nodejs \
  --output docs/node-research.md
```

Turn a product idea into an execution plan:

```bash
npx @ianyian/myskills idea-to-execution \
  "Add dark mode to my web application" \
  --output implementation-plan.md
```

## Development

```bash
npm install
npm test
npm pack --dry-run
```

The package contains no runtime dependencies; it uses Node.js built-ins and `fetch`.

## Publish

After logging in to npm, publish a new version:

```bash
npm login
npm publish --access public
```

Every later publish needs a new version, for example `npm version patch && npm publish`.

## Security and privacy

The CLI sends the repository excerpts or fetched source text to the configured model provider. Review your provider's data policy before using it with private code. API keys are read from environment variables and are never written to generated files.
