# Go-live guide: jscholtzdigital.com

GitHub Pages hosting · GoDaddy domain · Zoho Mail · working contact form.

**Do the steps in this order.** Email must work before the contact form can be
activated, and DNS changes need time to spread.

---

## Step 1: Put the code on GitHub

1. Create a GitHub account if you don't have one, then create a new **empty**
   repository. Name it anything (e.g. `jscholtz-digital`). Public is fine and
   keeps Pages free. Don't tick "Add a README": the repo must start empty.
2. In PowerShell, from the project folder (the one containing `package.json`):

```powershell
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/jscholtz-digital.git
git push -u origin main
```

Replace `YOUR-USERNAME`. If git asks you to sign in, a browser window opens.
log in there once and it remembers.

---

## Step 2: Turn on GitHub Pages

1. In the repo: **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
   (Not "Deploy from a branch": this project has to be built first.)
3. Go to the **Actions** tab. A workflow called "Deploy to GitHub Pages" should
   be running. Wait for the green tick, roughly two minutes.
4. Back on **Settings → Pages** you'll see a live URL like
   `https://YOUR-USERNAME.github.io/jscholtz-digital/`. Open it. The site will
   load but images and styling may look broken at this URL: that's expected,
   because the build is configured for the real domain. It fixes itself in
   Step 4.

Every future `git push` to `main` rebuilds and redeploys automatically.

---

## Step 3: Set up Zoho Mail (do this before the form)

1. Go to zoho.com/mail and sign up for the **Forever Free** plan.
   Choose "Sign up with a domain I already own" and enter `jscholtzdigital.com`.
2. Zoho asks you to prove you own the domain. Pick the **TXT record** method and
   copy the value it gives you (looks like `zoho-verification=zb...`).
3. Add the DNS records in Step 4, then come back and click **Verify**.
4. Once verified, create your first mailbox: **sales**. That gives you
   `sales@jscholtzdigital.com`.
5. Add a second mailbox for yourself if you want (e.g. `jason@`). The free plan
   allows up to 5 users.

**Free plan limits worth knowing:** 5 users, 5 GB each, one domain, 25 MB
attachments, and **no IMAP/POP**: meaning you read mail in Zoho's webmail or
their mobile app, not in Outlook or Apple Mail. If you need Outlook, Mail Lite
is about $1 per user per month.

---

## Step 4: DNS records at GoDaddy

GoDaddy → **My Products → Domains → jscholtzdigital.com → DNS → Manage Zones**.

### Website (GitHub Pages)

Delete GoDaddy's default parked A record for `@` first, and any existing CNAME
for `www`.

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |
| CNAME | www | YOUR-USERNAME.github.io | 600 |

Four separate A records, all named `@`. The CNAME points at
`YOUR-USERNAME.github.io`: **not** at the repository path.

### Email (Zoho)

Delete every existing MX record first. Leftover MX records from GoDaddy's
default email will silently swallow your mail.

| Type | Name | Value | Priority | TTL |
| --- | --- | --- | --- | --- |
| MX | @ | mx.zoho.com | 10 | 600 |
| MX | @ | mx2.zoho.com | 20 | 600 |
| MX | @ | mx3.zoho.com | 50 | 600 |
| TXT | @ | v=spf1 include:zoho.com ~all | n/a | 600 |
| TXT | @ | (the zoho-verification value from Step 3) | n/a | 600 |

Then add **DKIM**: in Zoho's Admin Console go to Email Configuration → DKIM,
generate a key with selector `zoho`, and copy the long value Zoho shows you into
a TXT record named `zoho._domainkey`.

> GoDaddy is on Zoho's one-click list: in Zoho, "Log in to my DNS" can add the
> verification and MX records for you automatically. The manual table above is
> the fallback if that fails, and is also what you'll check against afterwards.

### Optional but recommended: DMARC

| Type | Name | Value |
| --- | --- | --- |
| TXT | _dmarc | v=DMARC1; p=none; rua=mailto:sales@jscholtzdigital.com |

Start with `p=none` (monitor only). Tighten to `p=quarantine` once you've been
running clean for a few weeks.

---

## Step 5: Point GitHub at the domain

1. Repo **Settings → Pages → Custom domain**, enter `jscholtzdigital.com`, Save.
2. GitHub runs a DNS check. If it fails, DNS hasn't spread yet: wait and retry.
3. Once it passes, tick **Enforce HTTPS**. The certificate can take up to an
   hour to issue; the tickbox stays greyed out until it's ready.

The `public/CNAME` file in this project already contains the domain, so the
setting survives every redeploy.

---

## Step 6: Activate the contact form

Only do this after `sales@jscholtzdigital.com` can actually receive mail. Test
that first by emailing it from your phone.

1. Open the live site, fill in the contact form, submit once.
2. FormSubmit sends a confirmation email to `sales@jscholtzdigital.com`. Check
   the spam folder if it's not in the inbox.
3. Click the activation link in that email.
4. Submit the form a second time. That one should land in the inbox.

Until you click the link, the form shows an error rather than a false success.
that's deliberate, so a real enquiry is never silently lost.

To move off FormSubmit later, change `FORM_ENDPOINT` in `src/lib/contact.ts`.
That's the only place it's referenced.

---

## Step 7: Check it end to end

- `https://jscholtzdigital.com` loads over HTTPS with no certificate warning
- `https://www.jscholtzdigital.com` redirects to the apex domain
- An email sent from an outside address reaches `sales@jscholtzdigital.com`
- Mail sent **from** Zoho arrives at Gmail without a spam flag (checks SPF/DKIM)
- A contact form submission lands in the inbox
- The floating WhatsApp button opens a chat to +27 61 599 0085

---

## Timing and troubleshooting

DNS typically settles within an hour but is allowed up to 48. Two useful checks:

```powershell
nslookup -type=A jscholtzdigital.com
nslookup -type=MX jscholtzdigital.com
```

| Symptom | Cause |
| --- | --- |
| Site shows a GoDaddy parked page | Default A record wasn't deleted |
| GitHub says "domain does not resolve" | DNS still propagating, or A records aren't all named `@` |
| "Enforce HTTPS" greyed out | Certificate still issuing: wait, then reload |
| Email vanishes | An old MX record still exists alongside Zoho's |
| Your mail lands in spam | SPF or DKIM missing or mistyped |
| Form shows an error | FormSubmit not activated yet (Step 6) |
