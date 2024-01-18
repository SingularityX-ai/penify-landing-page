import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" aria-label="Google font"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <Link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" aria-label="Google font" /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
