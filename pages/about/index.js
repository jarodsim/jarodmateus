import styles from '../../styles/About.module.css'

export default function Home() {

  return (
    <div className={styles.container} id='about'>
      <div className={styles.content}>
        <h1>About me</h1>
        <p>I started at an early age at the age of 13. Since then, I have been studying and learning about new technologies, improving my skills with fullstack development.</p>

        <div className={styles.social}>
          <a href="https://github.com/jarodsim"><img src="/icons/github.svg" alt="github icon and link" /></a>
          <a href="https://www.linkedin.com/in/jarod-cavalcante-0ab742167/"><img src="/icons/linkedin.svg" alt="linkedin icon and link" /></a>
          <a href="https://twitter.com/DevJarodMateus"><img src="/icons/twitter.svg" alt="twitter icon and link" /></a>
        </div>
      </div>
    </div>
  )
}
