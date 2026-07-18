import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({ config }) {
  const location = useLocation();
  const defaultTitle = "CSLD&CPSRY | Multi-Platform Advertising Experts";
  const defaultDesc = "Modern digital agency specializing in web design, branding, and growth development.";
  const siteUrl = "https://agency-website-pearl-nine.vercel.app";
  // og:url must point at the page actually being shared, not always the homepage,
  // otherwise every shared link (e.g. /portfolio) previews as the home page.
  const pageUrl = `${siteUrl}${location.pathname === "/" ? "" : location.pathname}`;

  const title = config?.title ? `${config.title} | CSLD&CPSRY` : defaultTitle;
  const description = config?.description || defaultDesc;
  
  // Normalize whatever path is passed (e.g. "./og-image.png", "/og-image.png",
  // "og-image.png") down to a clean absolute URL. Previously this used a regex
  // that only stripped a "./public/" prefix, so a value like "./og-image.png"
  // was left untouched and produced a broken URL such as
  // "https://site.com/./og-image.png" which crawlers fail to resolve.
  const cleanPath = (config?.image || "og-image.png")
    .replace(/^\.?\/?(public\/)?/, "") // strip leading "./", "/", or "public/"
    .replace(/\.jpg$/i, ".png"); // guard against stale .jpg references — the real file is .png

  const image = `${siteUrl}/${cleanPath}`;

  return (
    <Helmet>
      {/* --- Standard HTML Tags --- */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {config?.keywords && <meta name="keywords" content={config.keywords} />}

      {/* --- Updated Favicon Paths --- */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

      {/* --- Open Graph / Facebook Previews --- */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* --- Twitter Cards --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}