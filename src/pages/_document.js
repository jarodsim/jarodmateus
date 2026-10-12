import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en'>
        <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9385210236159025"
            crossOrigin="anonymous"></script>
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content='https://www.jarodmateus.com/images/banner.png'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:image'
            content='https://www.jarodmateus.com/images/banner.png'
          />
          <meta name="google-adsense-account" content="ca-pub-9385210236159025" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
