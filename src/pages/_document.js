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
      <Html lang='pt-br'>
        <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9385210236159025"
            crossOrigin="anonymous"></script>
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <meta name='title' content='Jarod Mateus' />
          <meta
            name='description'
            content="Hello how are you? I am Jarod Mateus. I'm a software developer and also a flutter newbie."
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Jarod Mateus - Desenvolvedor de software'
          />
          <meta
            property='og:description'
            content="Hello how are you? I am Jarod Mateus. I'm a software developer and also a flutter newbie."
          />
          <meta
            property='og:image'
            content='https://www.jarodmateus.com/images/banner.png'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:title'
            content="Hello how are you? I am Jarod Mateus. I'm a software developer and also a flutter newbie."
          />
          <meta
            property='twitter:description'
            content="Hello how are you? I am Jarod Mateus. I'm a software developer and also a flutter newbie."
          />
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
