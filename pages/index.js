import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { motion } from 'framer-motion';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Jarod Mateus</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Site sobre Jarod Mateus" />
        <meta name="author" content="Jarod Mateus" />
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

        <ul className={styles.menu_desktop}>
          <li><a href="/">About</a></li>
          <li><a href="/">Technologies</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Talk to me</a></li>
        </ul>

        <div className={styles.menu_mobile}>
          <button className={styles.button_open_menu} onClick={() => setShowMenu(!showMenu)}><img src="/menu.png" alt="open menu icon" /></button>
        </div>
      </motion.header>

      {/* menu responsivo - mobile */}
      {showMenu ? (
        <motion.div className={styles.content_menu_mobile} initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .2
            }
          },
        }}>
          <button className={styles.button_close_menu} onClick={() => setShowMenu(!showMenu)}><img src="/close.png" alt="close menu icon" /></button>
          <ul className={styles.menu_mobile_list}>
            <li><a href="/">About</a></li>
            <li><a href="/">Technologies</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Talk to me</a></li>
          </ul>
        </motion.div>
      ) : ''}

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
        <div className={styles.title}>
          <h1>Hello, my name is <span>Jarod Mateus</span> and I'm a fullstack web developer</h1>
        </div>
        <div className={styles.div_scroll}>
          <div className={styles.vertical}></div>
          <p>SCROLL DOWN</p>
          <small>Site under development</small>
        </div>
      </motion.div>
    </div>
  )
}
