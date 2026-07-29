# Blackwall Studio

**Extending the Lives of Games**

Blackwall Studio is a multiplayer game development studio dedicated to bringing rich, competitive, and cooperative multiplayer experiences to games that never had them — or had them planned.

## 🚀 Quick Start

### Website

The company website is a single HTML file with a Three.js interactive background. Open `index.html` in a browser or serve locally:

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve .

# Using npx live-server
npx live-server
```

Then visit `http://localhost:8080`.

---

## 🏢 GitHub Organization Setup Guide

Follow these steps to create the Blackwall Studio GitHub organization and initial repositories.

### Step 1: Create the GitHub Organization

1. Go to https://github.com/organizations/plan
2. Choose a plan (GitHub Free works for open-source; Team is recommended if you need private repos)
3. Enter:
   - **Organization name**: `BlackwallStudio`
   - **Contact email**: `hello@blackwall.studio`
   - **Description**: "A multiplayer game development studio dedicated to extending the lives of games — bringing multiplayer to titles that never had it."
4. Verify your email and invite initial members

### Step 2: Configure Organization Settings

- **Profile README**: Create `.github/profile/README.md` (template below)
- **Organization avatar**: Use the logo from the website (the "BW" icon serves as a starting point)
- **Default branch**: `main`
- **Repository visibility**: Set sensible defaults per repo

### Step 3: Create Initial Repositories

| Repository | Visibility | Description |
|---|---|---|
| `RedSync` | Public | Multiplayer mod for Cyberpunk 2077 — custom netcode, dedicated servers, co-op/competitive |
| `.github` | Public | Organization profile README, issue templates, and community health files |
| `blackwall-studio.github.io` | Public | Organization GitHub Pages site (optional — can redirect to your website) |
| `docs` | Public | Technical documentation, research, and architecture whitepapers |

### Step 4: `.github` Profile Template

Create `.github/profile/README.md` with:

```markdown
# Blackwall Studio 🖤

**Extending the Lives of Games.**

We're a multiplayer game development studio specializing in bringing online
experiences to games that shipped without them. From reverse-engineering netcode
to building full dedicated server infrastructures — we breathe new life into
beloved titles.

## Our Work

- **[RedSync](https://github.com/BlackwallStudio/RedSync)** — Multiplayer for Cyberpunk 2077
- More projects coming soon…

## Get Involved

- 🌐 [blackwall.studio](https://blackwall.studio)
- 💬 [Discord](https://discord.gg/redsync)
- 🐦 [@BlackwallStudio](https://twitter.com/BlackwallStudio)

---

*Games are better together.*
```

### Step 5: Repository Setup Checklist

For each new project repository:

- [ ] Add `README.md` with project description, build instructions, and contribution guide
- [ ] Add `LICENSE` (recommended: AGPL-3.0 for open-source, or custom for proprietary)
- [ ] Add `.gitignore` appropriate to the tech stack
- [ ] Set up branch protection on `main` (require PRs, require reviews)
- [ ] Add issue templates (bug report, feature request)
- [ ] Add `CONTRIBUTING.md`
- [ ] Enable Discussions (optional, for community engagement)
- [ ] Add topics/tags for discoverability

### Step 6: Brand Consistency

- **Primary Color**: `#00f0ff` (cyan/aqua)
- **Secondary Color**: `#0066ff` (blue)
- **Accent Color**: `#7c3aed` (purple)
- **Background**: `#0a0a0f` (near-black)
- **Typography**: Inter (headings & body), JetBrains Mono (code)
- **Tagline**: "Extending the Lives of Games"

## 🚀 Deploy to GitHub Pages

This repository is pre-configured for GitHub Pages deployment. Here's how to get your site live.

### Option A: Deploy under a GitHub Organization (Recommended)

This is the ideal setup — the site lives at `blackwallstudio.github.io` and your studio owns it.

#### Step 1: Create the BlackwallStudio GitHub Organization

1. Go to **[github.com/organizations/plan](https://github.com/organizations/plan)**
2. Choose **GitHub Free** (or Team if you need private repos)
3. Enter:
   - **Organization name**: `BlackwallStudio`
   - **Contact email**: `hello@blackwall.studio`
   - **Description**: "A multiplayer game development studio dedicated to extending the lives of games — bringing multiplayer to titles that never had it."
4. Complete the setup and verify your email

#### Step 2: Create the `blackwallstudio.github.io` Repository

Once the org exists, create the Pages repo. You can do this via the web UI or the CLI:

```bash
# Via GitHub CLI (run from the blackwall-studio-site directory)
gh repo create BlackwallStudio/blackwallstudio.github.io --public --source=. --remote=origin --push
```

**Or via the web UI:**
1. Go to https://github.com/new
2. Set **Owner** to `BlackwallStudio`
3. Set **Repository name** to `blackwallstudio.github.io`
4. Set **Description**: "Blackwall Studio company website"
5. Choose **Public**
6. Click **Create repository**
7. Then push the local repo:

```bash
git remote add origin https://github.com/BlackwallStudio/blackwallstudio.github.io.git
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to `https://github.com/BlackwallStudio/blackwallstudio.github.io`
2. Navigate to **Settings > Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set **Branch** to `main` and folder to `/ (root)`
5. Click **Save**
6. Wait ~1–2 minutes, then visit `https://blackwallstudio.github.io`

> **Note**: The `.nojekyll` file in this repo tells GitHub Pages to serve the files as-is (no Jekyll processing). The `CNAME` file is pre-configured for the custom domain `blackwall.studio`.

---

### Option B: Deploy Under Your Personal Account (Quick Start)

If you want to get it live right now under your current GitHub account:

```bash
# Create the repo under your personal account
gh repo create blackwallstudio.github.io --public --source=. --remote=origin --push
```

Then enable Pages in Settings (same as Step 3 above).

> You can transfer the repo to the `BlackwallStudio` org later via **Settings > Danger Zone > Transfer ownership**.

---

### Option C: Custom Domain (blackwall.studio)

Once you own the `blackwall.studio` domain:

1. **Update `CNAME`** file (it already has `blackwall.studio` — verify it matches your domain)
2. **Configure DNS** at your domain registrar:

| Record Type | Name | Value |
|-------------|------|------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

3. In your repo **Settings > Pages**, enter `blackwall.studio` under **Custom domain**
4. Enable **Enforce HTTPS**
5. DNS propagation may take a few minutes to a few hours

---

### Verify Your Deployment

After deploying, check that everything works:

```bash
# Does the site respond?
curl -sI https://blackwallstudio.github.io | head -5

# Check for broken links (requires linkchecker)
# Or just browse through every section manually
```

### Troubleshooting

| Symptom | Fix |
|---------|-----|
| 404 on deploy | Make sure `index.html` is in the **root** of the repo, not a subdirectory |
| Custom domain not resolving | DNS can take up to 48 hours. Check with `dig blackwall.studio +short` |
| HTTPS not working | After adding the custom domain in Pages settings, wait a few minutes and toggle **Enforce HTTPS** |
| Styles broken | The site uses CDN-loaded fonts and Three.js — verify your internet connection |

---

## 🏗️ Website Architecture

The site (`index.html`) is a single-page, fully self-contained HTML file with:

- **Three.js 3D particle network** — interactive background with wave animation and mouse tracking
- **Responsive design** — desktop-first with mobile menu, adaptive grids
- **Scroll-triggered reveals** — IntersectionObserver-based fade-up animations
- **Contact form** — with client-side validation and feedback
- **No build step** — open `index.html` directly or serve with any HTTP server

### Customization Points

- **Contact email**: Update `mailto:hello@blackwall.studio` in the contact section
- **Social links**: Update GitHub and Discord URLs in contact section
- **Projects**: Add/remove project cards in the projects section
- **Team members**: Update team cards with actual members
- **Stats**: Update stat numbers in the about section as the studio grows

---

## 📄 License

The website (`index.html`) is provided as a starting point for Blackwall Studio's brand presence. All rights reserved.

The RedSync project and other game mods have their own licensing.
