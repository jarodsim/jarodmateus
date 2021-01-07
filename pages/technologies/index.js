import styles from '../../styles/Technologies.module.css'

export default function Technologies() {
	return (
		<div className={styles.container} id="technologies">
			<h1>My development stack</h1>

			<div className={styles.technologies_cards}>
				<h3>Application and data</h3>
				<div className={styles.card}>
					<img src="/icons/html5.png" alt="html5 logo" />
					<p>HTML 5</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/css3.png" alt="css3 logo" />
					<p>CSS 3</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/js.png" alt="javascript logo" />
					<p>CSS 3</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/nodejs.png" alt="nodejs logo" />
					<p>NODE JS</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/react.png" alt="react logo" />
					<p>REACT JS</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/nextjs.png" alt="nextjs logo" />
					<p>NEXTJS</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/jwt.png" alt="jwt logo" />
					<p>JWT</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/express.png" alt="express logo" />
					<p>EXPRESS</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/mongodb.png" alt="mongodb logo" />
					<p>MONGO DB</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/mysql.png" alt="mysql logo" />
					<p>MySQL</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/styled.png" alt="styled componnets logo" />
					<p>STYLED COMPONENTS</p>
				</div>

				<h3>Workspace</h3>
				<div className={styles.card}>
					<img src="/icons/vscode.png" alt="vscode logo" />
					<p>VSCODE</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/insomnia.png" alt="insomnia logo" />
					<p>INSOMNIA</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/notion.png" alt="notion logo" />
					<p>NOTION</p>
				</div>

				<h3>Devops</h3>
				<div className={styles.card}>
					<img src="/icons/github.png" alt="github logo" />
					<p>GITHUB</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/firebase.png" alt="firebase logo" />
					<p>FIREBASE</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/heroku.png" alt="heroku logo" />
					<p>HEROKU</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/netlify.png" alt="netlify logo" />
					<p>NETLIFY</p>
				</div>

				<div className={styles.card}>
					<img src="/icons/versel.png" alt="versel logo" />
					<p>VERSEL</p>
				</div>
			</div>
		</div>
	)
}
