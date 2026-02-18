import Theme from '../styles/theme';
import Head from 'next/head'
import { LanguageProvider, useTranslation } from '../i18n/LanguageContext'

function PageHead() {
  const { t } = useTranslation()
  return (
    <Head>
      <title>{t.pageTitle}</title>
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
