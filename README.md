# Winthrop Sunrise

Guest guide for our home on Grovers Ave, Winthrop, Massachusetts. Recreated as
plain static files from the original Google Sites version.

**Live site:** https://winthropsunrise.github.io

## What's here

```
index.html            Home - hero, guide index, guest reviews
restaurants.html      ~30 local restaurants, grouped by walking distance
commute.html          Three routes into downtown Boston
attractions.html      Beaches, Deer Island, day trips, Open Newbury Street
funfacts.html         Town history and micro-neighborhoods
assets/css/style.css  All styling (single stylesheet, no framework)
assets/js/nav.js      Mobile nav toggle - the only JavaScript on the site
images/               All photographs and maps
  _source-urls.tsv    Where each image was originally pulled from
.github/workflows/    GitHub Actions workflow that publishes to Pages
```

No build step, no dependencies, no framework. Open `index.html` in a browser and
it works.

## Editing

Edit the HTML directly. The five pages each repeat the same header and footer
markup — if you change the nav or footer, change it in all five.

To add a restaurant, copy an existing `<article class="card">` block and edit it.
The optional pieces are:

- `<span class="tag">…</span>` — a small peach badge (e.g. "New")
- `<span class="tag tag-view">…</span>` — the blue variant, used for "With a view"
- `<span class="addr">…</span>` — the street address line
- `<a class="link" …>` — the arrow link at the bottom of the card

## Preview locally

```bash
python -m http.server 8765
```

Then open http://localhost:8765

You can also just double-click `index.html`, but the local server is closer to
how GitHub Pages actually serves the site.

## Deploying

Any push to `main` triggers `.github/workflows/deploy.yml`, which publishes the
repo root to GitHub Pages. Nothing is built — the files are uploaded as-is.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

## Git identity

This repo is configured with a **repo-local** identity so commits are attributed
to the project account rather than whatever global git identity is on this
machine:

```bash
git config user.name   # Winthrop Sunrise
git config user.email  # 306654832+winthropsunrise@users.noreply.github.com
```

That is the account's GitHub no-reply address, so `winthropsunrise@gmail.com`
never appears in the public commit history — but commits still link to the
profile. Nothing global on this machine was changed.

To confirm what a commit was actually authored with:

```bash
git log -1 --format='%an <%ae>'
```

## A note on Dropbox

This folder lives inside Dropbox, which syncs the `.git` directory too. That's
usually fine for a single-machine setup, but if you ever start editing this
repo from two computers at once, Dropbox can corrupt git's internal files. If
that happens, the fix is to re-clone from GitHub — which is the real backup.

## Content notes

- The footer contact is a live `mailto:` link to `winthropsunrise@gmail.com` on
  all five pages. The original Google Site obfuscated this as
  `winthropsunrise.AT.gmail` to deter scrapers; that tradeoff was made
  deliberately in favor of one-tap contact. If spam becomes a problem, reverting
  is a five-file find-and-replace.
- Attractions lists the **2026** Open Newbury Street dates, confirmed against
  boston.gov. These need updating every year, and the December date was still
  "to be announced" as of July 2026 — worth a check later in the season.
  Source: https://www.boston.gov/departments/transportation/open-newbury-street
- Historic photographs are credited to winthropmemorials.org on the Fun Facts
  page.
