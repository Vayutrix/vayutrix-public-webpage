# public-webpage
vayutrix website


Here are the exact steps to deploy using **Wrangler CLI** to Cloudflare Pages:

---

**Step 1 — Install Wrangler**

```bash
npm install -g wrangler
```

---

**Step 2 — Login to Cloudflare**

```bash
wrangler login
```
This opens your browser — log in and authorize.

---

**Step 3 — Deploy directly from your folder**

```bash

wrangler pages deploy . --project-name=pages-vayutrix
```

- First time it will **create the project** automatically on Cloudflare
- After that every run just redeploys

---

**Step 5 — Future deployments**

Every time you update `index.html` just run:

```bash
wrangler pages deploy . --project-name=pages-vayutrix
```

---

**Verify Wrangler is installed:**

```bash
wrangler --version
```

Should show `3.x.x` or higher.

---

That's it — no GitHub needed, no build step, just one command from your local folder and it's live at `vayutrix.com`. Want help with anything else?
```
npm install -g wrangler
```

```
wrangler pages deploy . --project-name=pages-vayutrix
```

## Production deployment (Cloudflare Pages)

The production deploy script is intentionally **protected** to prevent accidental runs.

From the `react/` folder, run:

```powershell
$env:VAYUTRIX_ALLOW_PROD_DEPLOY="I_UNDERSTAND_THIS_WILL_DEPLOY_TO_PRODUCTION"
$env:VAYUTRIX_DEPLOY_TARGET="pages-vayutrix"
npm run deploy:pages:production
```

If those environment variables are not set exactly, the deploy will stop immediately.
