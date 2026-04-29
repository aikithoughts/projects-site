# projects-site

The source code for [projects.daveshevitz.com](https://projects.daveshevitz.com) — a curated coding projects page.

Built with React + Vite. Pulls live repo data from the GitHub API.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Adding or removing projects

Edit `src/projects.js`. Each project has:
- `repo` — the exact GitHub repo name
- `description` — your own description of the project
- `demo` — a live demo URL, or `null` if none
- `tags` — array of language/tech labels

## Deploying to GitHub Pages

```bash
npm run build
```

This creates a `dist/` folder. Push that to the `gh-pages` branch, or connect the repo to GitHub Pages via Settings → Pages → Deploy from branch.

## Connecting the subdomain

In Namecheap, add a CNAME record:
- Host: `projects`
- Value: `aikithoughts.github.io`

In the GitHub repo settings, under Pages → Custom domain, enter `projects.daveshevitz.com`.
