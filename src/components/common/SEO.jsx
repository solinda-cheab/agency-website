import { Helmet } from "react-helmet-async";

export default function SEO({ config }) {
  const defaultTitle = "CSLD&CPSRY - Multi-Platform Advertising Experts";
  const defaultDesc = "Modern digital agency specializing in web design, branding, and growth development.";
  const siteUrl = "https://your-domain.com"; // Change to your production domain

  const title = config?.title ? `${config.title} | CSLD&CPSRY` : defaultTitle;
  const description = config?.description || defaultDesc;
  
  // Ensures image path is transformed into an absolute URL
  const image = config?.image 
    ? `${siteUrl}/${config.image.replace(/^\.?\/public\//, '')}` 
    : `${siteUrl}/og-thumbnail.png`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {config?.keywords && <meta name="keywords" content={config.keywords} />}

      {/* Open Graph / Social Link Previews */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}