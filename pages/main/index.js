import styles from '../../styles/Main.module.css'

import { motion } from 'framer-motion'

export default function Main() {
	return (
		<motion.div
			className={styles.container}
			id="/home"
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
	)
}
