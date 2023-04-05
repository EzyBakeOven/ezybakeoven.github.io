import React from "react"
import { useSiteMetadata } from "../hooks/site-metadata"

// The pathname prop will be the relative path of the page so you need to
// construct an absolute URL with siteUrl.
export const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
      Copycopy code to clipboard
      <script type="application/ld+json">
        {`
    {
      "@context": "https://schema.org",
      "@type": "    {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Senior Software Engineer Adelaide",
        "datePublished": "2023-03-22T08:00:00+09:00",
        "dateModified": "2023-03-22T09:20:00+09:00",
        "author": [{
            "@type": "Person",
            "name": "Matthew Hoy",
            "url": "https://www.linkedin.com/in/stringmatthewhoy/"
          }]
      }",
      "url": "https://ezybakeoven.github.io/",
      "name": "Senior Software Engineer",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5-601-785-8543",
        "contactType": "Customer Support"
      }
    }
  `}
      </script>
    </>
  )
}
