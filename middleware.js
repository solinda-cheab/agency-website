// Vercel Routing Middleware
//
// WHY THIS FILE EXISTS
// ---------------------
// This project is a client-side-only React SPA (Vite, no SSR/prerendering).
// Per-page <title>/description/OG/Twitter tags are injected by
// react-helmet-async AFTER React mounts in a real browser.
//
// Link-preview crawlers (Discord, Telegram, Facebook, X/Twitter, Slack,
// iMessage, LinkedIn, WhatsApp, etc.) do NOT execute JavaScript — they fetch
// the URL once and read whatever is in the raw HTML <head>. Since the raw
// HTML only ever contains the generic homepage tags from index.html, every
// shared link previews as the same generic card (or breaks), regardless of
// which page was actually shared.
//
// This middleware runs on Vercel's edge before the static file is served.
// If (and only if) the request is coming from a known bot/crawler user
// agent, it returns a small, fully-formed HTML document with the correct
// title/description/OG/Twitter tags for that specific route. Everyone else
// (real visitors) is passed straight through to the normal SPA untouched.
//
// This is the standard "dynamic rendering" pattern for OG tags on a CSR app,
// used because a full SSR/Next.js migration isn't necessary just to fix
// social previews.

import { next } from '@vercel/functions';

const SITE_URL = 'https://agency-website-pearl-nine.vercel.app';
const SITE_NAME = 'CSLD&CPSRY';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

// Keep this in sync with src/config/seoData.js and the inline <SEO config={...}>
// props used on the pages that don't pull from seoData.js.
const ROUTES = {
  '/': {
    title: 'Multi-Platform Advertising Experts',
    description:
      'Empowering brands with high-performance dynamic multi-platform advertising and strategy execution.',
  },
  '/about': {
    title: 'About Us',
    description:
      'Modern digital agency specializing in web design, branding, and development.',
  },
  '/services': {
    title: 'Our Services',
    description:
      'Modern digital agency specializing in web design, branding, and development.',
  },
  '/portfolio': {
    title: 'Our Work & Case Studies',
    description:
      'Explore our successful advertising campaigns and multi-platform custom web interfaces.',
  },
  '/contact': {
    title: 'Start a Campaign',
    description:
      'Connect with our technical team today to launch your next multi-platform dynamic application.',
  },
  '/privacy': {
    title: 'Privacy Policy',
    description: 'How CSLD&CPSRY collects, uses, and protects your information.',
  },
};

// Known link-preview / social crawler user agents.
const BOT_UA_REGEX =
  /facebookexternalhit|Facebot|Twitterbot|Discordbot|TelegramBot|LinkedInBot|Slackbot|WhatsApp|SkypeUriPreview|Pinterest|redditbot|vkShare|Applebot|Google-InspectionTool|W3C_Validator|Iframely|Embedly|OutlookIcon|MicrosoftPreview/i;

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderHtml(pathname) {
  const page = ROUTES[pathname] || ROUTES['/'];
  const title = `${page.title} | ${SITE_NAME}`;
  const description = page.description;
  const url = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
  const image = DEFAULT_IMAGE;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${url}" />

<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:site_name" content="${SITE_NAME}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:image" content="${image}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<meta name="twitter:image" content="${image}" />
</head>
<body>
<h1>${escapeHtml(page.title)}</h1>
<p>${escapeHtml(description)}</p>
</body>
</html>`;
}

export default function middleware(request) {
  const ua = request.headers.get('user-agent') || '';

  // Not a known crawler -> pass straight through to the real SPA, untouched.
  if (!BOT_UA_REGEX.test(ua)) {
    return next();
  }

  const { pathname } = new URL(request.url);

  return new Response(renderHtml(pathname), {
    status: 200,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}

// Only run for actual page routes — skip static assets entirely so we never
// intercept images, the favicon, sitemap, robots.txt, or built JS/CSS.
export const config = {
  matcher: [
    '/((?!assets/|favicon.ico|og-image.png|robots.txt|sitemap.xml|p1.jpg|p2.jpg|p3.jpg|p4.jpg).*)',
  ],
};
