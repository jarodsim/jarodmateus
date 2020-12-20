import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jarod Mateus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.header className={styles.header} initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .5
          }
        },
      }}>
        <h1>JAROD MATEUS</h1>

        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Technologies</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Talk to me</a></li>
        </ul>
      </motion.header>

      <motion.div className={styles.content} initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .5
          }
        },
      }}>
        <h1>Hello, my name is <span>Jarod Mateus</span> and I'm a fullstack web developer</h1>
        <div className={styles.divScroll}>
        <div className={styles.vertical}></div>
        <p>SCROLL DOWN</p>
        <small>Site under development</small>
        </div>
      </motion.div>
    </div>
  )
}
