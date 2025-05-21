import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta name="theme-color" content="#1B1722" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <title>Grippie | Best Dining & Event Booking</title>
        <meta name="description" content="Book your table or event with ease at Grippie, the best spot for dining and celebrations." />
        <meta name="keywords" content="restaurant booking, event space, food, dining, parties, Delhi, delhi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourdomain.com/" />
        <meta property="og:title" content="Grippie" />
        <meta property="og:description" content="Reserve tables or book events at the best restaurant in town." />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <script type="application/ld+json">
          {`
                {
                  "@context": "https://schema.org",
                  "@type": "Restaurant",
                  "name": "Play Qutub",
                  "image": "https://yourdomain.com/logo.png",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Shaheed Jeet Singh Marg, Block D, Qutab Institutional Area, New Delhi, Delhi 110016",
                    "addressLocality": "New Delhi",
                    "addressRegion": "Delhi",
                    "postalCode": "110016"
                  },
                  "telephone": "+918448382577",
                  "servesCuisine": ["Indian", "Continental" , "Cocktails],
                  "url": "https://yourdomain.com"
                }
`}
        </script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
