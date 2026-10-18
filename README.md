# Markus Brigl — personal site

Static site for GitHub Pages, built with [Hugo](https://gohugo.io). No theme, no CSS or JavaScript framework:
plain HTML templates, one stylesheet and a 30-line script for the theme switch.

## Structure

```
hugo.toml                  site config, social links, optional e-mail
data/home.yaml             hero, vision, principles, stats, contact text
data/career.yaml           career timeline, newest first (featured: true renders an entry as a card;
                           company + roles groups several roles at one company; a role with
                           event instead of a title marks a change such as a merger)
content/projects/*.md      one page per project (front matter = card and facts, body = overview)
layouts/                   templates (index, projects/list, projects/single, partials)
assets/css/main.css        all styles, design tokens at the top
assets/css/chroma.css      code highlighting colours (generated, see below)
assets/js/theme.js         System / Light / Dark switch
scripts/chroma-css.sh      generates assets/css/chroma.css
static/fonts/              IBM Plex Sans and Mono (self-hosted, SIL OFL 1.1)
.github/workflows/hugo.yml build and deploy to GitHub Pages
```

## Theme: System, Light, Dark

The switch in the header has three states. **System** follows the operating system
(`prefers-color-scheme`), **Light** and **Dark** force a theme. The choice is stored in `localStorage`
and applied by a tiny inline script before first paint, so there is no flash.

The colours are CSS tokens using `light-dark()` (supported by all current browsers), so every colour
exists once, with its light and dark value side by side. Change the palette in the first block of
`assets/css/main.css`.

## Code blocks

Fenced code blocks in Markdown are highlighted by Hugo's built-in Chroma at build time, no JavaScript.
Chroma emits CSS classes (`noClasses = false` in `hugo.toml`); their colours are in
`assets/css/chroma.css`, where each colour is `light-dark()` of a light and a dark Chroma style, so code
follows the theme switch. To use other styles ([gallery](https://xyproto.github.io/splash/docs/)):

```sh
scripts/chroma-css.sh github github-dark    # light style, dark style
```

Block background, border and font come from `main.css`. Options per block, for example
```` ```go {linenos=table,hl_lines=[3,"5-7"]} ````.

## Run locally

```sh
hugo server
```

## Deploy

1. Create the repository (for `mbrigl.github.io`, or any name) and push this folder to `main`.
2. Repository settings, Pages, Source: **GitHub Actions**.
3. Every push to `main` builds and deploys the site (`.github/workflows/hugo.yml`).
4. Own domain: enter it under repository settings, Pages, Custom domain, point the DNS at GitHub
   Pages and set `baseURL` in `hugo.toml`. A `CNAME` file has no effect with Actions-based deployment.

## Add or change a project

Copy one file in `content/projects/`. Front matter:

| Key | Purpose |
| --- | --- |
| `repo` | `owner/name`, used for the heading and all GitHub links |
| `weight` | order on the home page |
| `summary`, `tags` | card text and chips |
| `language`, `license`, `commits`, `updated` | facts shown on card and page (edit by hand) |
| `flow` | three boxes with an arrow for the architecture picture (optional) |
| `parts` | rows under the picture (optional) |
| `docs` | links to files or folders in the repository; a trailing `/` links to a folder |
| `start`, `start_note` | getting-started commands (highlighted as a shell session) and a note |
| `code`, `code_title`, `code_lang` | optional code sample, its file name and its Chroma language (default `text`) |

The Markdown body is the overview text.

## Content to check before publishing

- `data/home.yaml`: the line `current` names the current employer. Delete it if it should not be public.
- `hugo.toml`: `email` is empty, so the "Email me" button is hidden. Fill it to show the button.
- Project facts (commits, update month, language) are copied from GitHub as of October 2026.
