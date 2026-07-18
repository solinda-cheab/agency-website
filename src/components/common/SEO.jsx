import { Helmet } from "react-helmet-async";

interface SEOProps {
  config?: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
  };
}

export default function SEO({ config }: SEOProps) {
  const defaultTitle = "CSLD&CPSRY ";
  const defaultDesc = "Modern digital agency specializing in web design, branding, and growth development.";
  const siteUrl = "https://agency-website-pearl-nine.vercel.app"; 

  const title = config?.title ? `${config.title} | CSLD&CPSRY` : defaultTitle;
  const description = config?.description || defaultDesc;
  
  // Set fallback explicitly to your og-image.png asset
  const image = config?.image 
    ? `${siteUrl}/${config.image.replace(/^\.?\/public\//, '')}` 
    : `${siteUrl}/og-image.png`;

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
      <meta property="og:url" content={siteUrl} />
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