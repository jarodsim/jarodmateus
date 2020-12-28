import { useState } from 'react'

import styles from '../../../styles/Header.module.css'

import { motion } from 'framer-motion'

export default function Header() {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<motion.div
			className={styles.container}
			id="/header"
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
				<h1>Jarod Mateus</h1>
			</div>

			<nav className={styles.menu_descktop}>
				<a href="#about">About</a>
				<a href="#technologies">Technologies</a>
				<a href="#projects">Projects</a>
				<a href="#talktome">Talk to me</a>
			</nav>

			<button
				className={styles.btn_menu}
				onClick={() => setShowMenu(!showMenu)}
			>
				<img src="/icons/menu.png" alt="open menu icon" />
			</button>

			{showMenu ? (
				<nav className={styles.menu_mobile}>
					<button
						className={styles.btn_menu_close}
						onClick={() => setShowMenu(!showMenu)}
					>
						<img src="/icons/close.png" alt="close menu icon" />
					</button>
					<a href="#about" onClick={() => setShowMenu(!showMenu)}>
						About
					</a>
					<a href="#technologies" onClick={() => setShowMenu(!showMenu)}>
						Technologies
					</a>
					<a href="#projects" onClick={() => setShowMenu(!showMenu)}>
						Projects
					</a>
					<a href="#talktome" onClick={() => setShowMenu(!showMenu)}>
						Talk to me
					</a>
				</nav>
			) : (
				''
			)}
		</motion.div>
	)
}
