import Head from 'next/head'

import About from './about'
import Main from './main'
import Technologies from './technologies'

import Header from './components/Header'

import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Jarod Mateus</title>
				<link rel="icon" href="/favicon.ico" />
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta name="description" content="Site sobre Jarod Mateus" />
				<meta name="author" content="Jarod Mateus" />

				{/* local fonts */}
				<link
					rel="preload"
					href="/fonts/Glacial/GlacialIndifference-Regular.otf"
					as="font"
					crossOrigin=""
				/>
			</Head>

			<Header />
			<Main />
			<About />
			<Technologies />
		</div>
	)
}
