import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { motion } from 'framer-motion'

import About from './about'

export default function Home() {
	const [showMenu, setShowMenu] = useState(false)

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
			{/* header */}
			<motion.header
				className={styles.header}
				initial="hidden"
				animate="visible"
				variants={{
					hidden: {
						scale: 0.8,
						opacity: 0,
					},
					visible: {
						scale: 1,
						opacity: 1,
						transition: {
							delay: 0.5,
						},
					},
				}}
			>
				<div className={styles.logo}>
					<h1>JAROD MATEUS</h1>
				</div>

				<ul className={styles.menu_desktop}>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="/">Technologies</a>
					</li>
					<li>
						<a href="/">Projects</a>
					</li>
					<li>
						<a href="/">Talk to me</a>
					</li>
				</ul>

				<div className={styles.menu_mobile}>
					<button
						className={styles.button_open_menu}
						onClick={() => setShowMenu(!showMenu)}
					>
						<img src="/icons/menu.png" alt="open menu icon" />
					</button>
				</div>
			</motion.header>

			{/* menu responsivo - mobile */}
			{showMenu ? (
				<motion.div
					className={styles.content_menu_mobile}
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
						},
						visible: {
							scale: 1,
							opacity: 1,
							transition: {
								delay: 0.2,
							},
						},
					}}
				>
					<button
						className={styles.button_close_menu}
						onClick={() => setShowMenu(!showMenu)}
					>
						<img src="/icons/close.png" alt="close menu icon" />
					</button>
					<ul className={styles.menu_mobile_list}>
						<li>
							<a href="#about" onClick={() => setShowMenu(false)}>
								About
							</a>
						</li>
						<li>
							<a href="/" onClick={() => setShowMenu(false)}>
								Technologies
							</a>
						</li>
						<li>
							<a href="/" onClick={() => setShowMenu(false)}>
								Projects
							</a>
						</li>
						<li>
							<a href="/" onClick={() => setShowMenu(false)}>
								Talk to me
							</a>
						</li>
					</ul>
				</motion.div>
			) : (
				''
			)}

			{/* content - main */}
			<motion.div
				className={styles.content}
				initial="hidden"
				animate="visible"
				variants={{
					hidden: {
						scale: 0.8,
						opacity: 0,
					},
					visible: {
						scale: 1,
						opacity: 1,
						transition: {
							delay: 0.5,
						},
					},
				}}
			>
				<div className={styles.title}>
					<h1>
						Hello, my name is <span>Jarod Mateus</span> and I'm a fullstack web
						developer
					</h1>
				</div>

				<div className={styles.div_scroll}>
					<div className={styles.vertical}></div>
					<p>SCROLL DOWN</p>
					<small>Site under development</small>
				</div>
			</motion.div>

			<About />
		</div>
	)
}
