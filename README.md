# ECE 542 Team Project Website

## Adding content

Every tab in the header corresponds to a folder in `src/content/`:

| Tab       | Folder                   |
| --------- | ------------------------ |
| Proposal  | `src/content/proposal/`  |
| Notebooks | `src/content/notebooks/` |
| PRD       | `src/content/prd/`       |

To add an entry, create a `.md` file in the right folder. The filename becomes the URL,
so `src/content/notebooks/week-02.md` is served at `/notebooks/week-02/`.

### Frontmatter

```yaml
---
title: Week 2 # required
date: 2026-10-12 # optional; notebooks are sorted newest first by date
authors: [Alice, Bob] # optional
description: One-liner # optional; shown in the list view
order: 2 # optional; proposal/PRD entries are sorted by this
draft: true # optional; hides the entry
---
```

### Site settings and tabs

`src/config.ts` holds the site title, header description, team member names, the list of
tabs (`CATEGORIES`), and which tab the home page shows (`DEFAULT_CATEGORY`).
To add a tab, add it to `CATEGORIES` and create the matching folder under `src/content/`.

## Commands

| Command        | Action                                         |
| :------------- | :--------------------------------------------- |
| `pnpm install` | Install dependencies                           |
| `pnpm dev`     | Start the local dev server at `localhost:4321` |
| `pnpm build`   | Build the production site to `./dist/`         |
| `pnpm preview` | Preview the build locally                      |
