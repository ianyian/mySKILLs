# @ianyian/myskills

Three portable VS Code Agent Skills that turn an AI coding agent into a small project assistant:

- **`repo-explorer`** understands a local repository and creates an architecture and onboarding guide.
- **`research-brief`** researches a topic and creates a cited Markdown brief.
- **`idea-to-execution`** converts an idea into an implementation plan with tasks and acceptance criteria.

Repository: <https://github.com/ianyian/mySKILLs>

## Requirements

- Node.js 18 or newer
- VS Code with GitHub Copilot Agent mode, or another agent that supports `.github/skills/*/SKILL.md`

The default workflow does not require an API key. VS Code Copilot supplies the model and executes the skills.

## Install and configure

Run without installing:

```bash
npx @ianyian/myskills --help
```

Or install globally:

```bash
npm install --global @ianyian/myskills
```

Install the skills into the project you have open in VS Code:

```bash
npx @ianyian/myskills@latest init
```

This creates:

```text
.github/skills/
├── repo-explorer/SKILL.md
├── research-brief/SKILL.md
└── idea-to-execution/SKILL.md
```

Restart or reload the VS Code window if the agent does not discover the skills immediately. Use `--force` only when you want to replace existing skill files:

```bash
npx @ianyian/myskills@latest init --force
```

## Use the skills with VS Code Agent mode

Open the project in VS Code, start GitHub Copilot Chat in Agent mode, and ask naturally:

Analyze the current repository:

```bash
Create a repository onboarding guide using the repo-explorer skill.
```

This creates `PROJECT_OVERVIEW.md`. Other examples:

```bash
Use the research-brief skill to compare PostgreSQL and MongoDB, with citations.
```

```bash
Use the idea-to-execution skill to plan dark mode for this web application.
```

The agent reads each `SKILL.md`, inspects the project or web sources as needed, and creates the requested artifact.

## Optional standalone CLI mode

The original commands remain available for users who want this package to call an OpenAI-compatible model directly. This mode requires `OPENAI_API_KEY`:

```bash
export OPENAI_API_KEY="your-api-key"
npx @ianyian/myskills repo-explorer .
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
