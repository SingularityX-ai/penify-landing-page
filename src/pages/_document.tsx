import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <title>{AppConfig.title}</title>
        <meta name="description" content={AppConfig.description} />
        <meta name="keywords" content={AppConfig.keywords} />
        <meta name="author" content={AppConfig.author} />
        <link rel="icon" href="/assets/snorkell.ico" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
