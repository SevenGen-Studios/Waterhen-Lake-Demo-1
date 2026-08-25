# Waterhen Lake First Nation — Demo 1

A community website demonstration prepared by SevenGen Studios for Waterhen Lake First Nation.

> This is an independent design concept. It is not the official Waterhen Lake First Nation website, and representative content must be reviewed and approved by authorized community administrators before public use.

## Local development

Requirements:

- Node.js 22.13 or newer
- npm

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

The build creates a Cloudflare Worker bundle in `dist/server`.

For Cloudflare Git deployments, use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy --config dist/server/wrangler.json`

## Collaboration

Work on a separate branch, run the production build, and open a pull request before merging into `main`. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Ownership

Website concept and implementation by SevenGen Studios. Community names, marks, imagery, facts and contact information remain subject to verification and approval by their respective owners and authorized representatives.

© 2026 SevenGen Studios.
