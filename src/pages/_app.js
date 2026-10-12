import Theme from '../styles/theme';
import Head from 'next/head'
import { LanguageProvider, useTranslation } from '../i18n/LanguageContext'

function PageHead() {
  const { t } = useTranslation()
  return (
    <Head>
      <title>{t.pageTitle}</title>
      <meta name="description" content={t.pageDescription} />
      <meta property="og:title" content={t.pageTitle} />
      <meta property="og:description" content={t.pageDescription} />
      <meta name="twitter:title" content={t.pageTitle} />
      <meta name="twitter:description" content={t.pageDescription} />
    </Head>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <PageHead />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </LanguageProvider>
  );
}
