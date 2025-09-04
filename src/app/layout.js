import "./globals.css";

export const metadata = {
  title: {
    default: "GrowX - Professional Lead Generation Services | B2B Marketing Solutions",
    template: "%s | GrowX Lead Generation"
  },
  description: "Transform your business with GrowX's professional lead generation services. We specialize in B2B marketing, cold calling, and sales training to boost your revenue. Get qualified leads that convert.",
  keywords: [
    "lead generation",
    "B2B marketing",
    "cold calling services",
    "sales training",
    "business growth",
    "qualified leads",
    "marketing agency",
    "lead generation services",
    "B2B lead generation",
    "sales leads"
  ],
  authors: [{ name: "GrowX Marketing Services" }],
  creator: "GrowX Marketing Services",
  publisher: "GrowX Marketing Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://growx-marketing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GrowX - Professional Lead Generation Services",
    description: "Transform your business with GrowX's professional lead generation services. We specialize in B2B marketing, cold calling, and sales training to boost your revenue.",
    url: 'https://growx-marketing.com',
    siteName: 'GrowX Marketing Services',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GrowX Lead Generation Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "GrowX - Professional Lead Generation Services",
    description: "Transform your business with GrowX's professional lead generation services. We specialize in B2B marketing, cold calling, and sales training to boost your revenue.",
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GrowX Marketing Services",
              "url": "https://growx-marketing.com",
              "logo": "https://growx-marketing.com/images/logo.jpg",
              "description": "Professional B2B lead generation agency helping businesses grow through qualified leads and sales training.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://linkedin.com/company/growxmarketingservices",
                "https://www.instagram.com/growxmarketingservices",
                "https://www.facebook.com/share/1QMBzmyycn/"
              ]
            })
          }}
        />

        {/* Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Lead Generation Services",
              "description": "Professional B2B lead generation services including cold calling, sales training, and targeted marketing campaigns.",
              "provider": {
                "@type": "Organization",
                "name": "GrowX Marketing Services"
              },
              "serviceType": "Lead Generation",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Lead Generation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cold Calling Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sales Training"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Targeted Marketing Campaigns"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <div className="overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
