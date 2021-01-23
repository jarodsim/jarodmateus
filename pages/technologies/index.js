import styles from '../../styles/Technologies.module.css'

export default function Technologies() {
  return (
    <div className={styles.container} id="technologies">
      <h1>My development stack</h1>

      <div className={styles.technologies_cards}>
        <h3>Application and data</h3>
        <div className={styles.card}>
          <p>JAVASCRIPT</p>
        </div>

        <div className={styles.card}>
          <p>TYPESCRIPT</p>
        </div>

        <div className={styles.card}>
          <p>REACT</p>
        </div>

        <div className={styles.card}>
          <p>NODEJS</p>
        </div>

        <div className={styles.card}>
          <p>MONGODB</p>
        </div>

        <div className={styles.card}>
          <p>MYSQL</p>
        </div>

        <div className={styles.card}>
          <p>NEXTJS</p>
        </div>

        <div className={styles.card}>
          <p>JWT</p>
        </div>

        <div className={styles.card}>
          <p>EXPRESS</p>
        </div>

        <div className={styles.card}>
          <p>DOCKER</p>
        </div>

        <div className={styles.card}>
          <p>HEROKU</p>
        </div>

        <div className={styles.card}>
          <p>VERSEL</p>
        </div>

        <div className={styles.card}>
          <p>NETLIFY</p>
        </div>

        <div className={styles.card}>
          <p>FIREBASE</p>
        </div>
      </div>
    </div>
  )
}
