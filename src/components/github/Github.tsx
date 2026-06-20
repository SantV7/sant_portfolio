import styles from './Github.module.css'
import githubMobile from '../../assets/img/png/github_mobile.png'

const Github = () => {
  return (
    <>
        <section className={styles.github_sec}>
            <header className={styles.h_github}>
                <div>
                    <h2>My Github data</h2>
                </div>

                <div className={styles.flex_github}>
                    <div className={styles.content_txt}>
                        <h3>Github</h3>
                        <p>
                        Here is information from my <span className={styles.s_one }>GitHub</span>, such as streaks, <span className={styles.s_two}>activity frequency</span>, and <span className={styles.s_one}>commits</span>.
                        </p>
                    </div>

                    <div className={styles.img_github}>
                        <img className={styles.github_mobile} src={githubMobile} alt="Icon Github" />
                    </div>
                </div>
            </header>

            <main className={styles.main_info_github}>
                <header>
                    <h2 className={styles.font_tech}> My Profile: <a className={styles.github_link} href="https://github.com/santv7">SantV7</a></h2>
                </header>

                <section className={styles.commits}>
                    <div className={styles.github_cards_container}>
                        <img 
                            src="https://ghchart.rshah.org/0f4c81/santv7" 
                            alt="Calendário de contribuições do GitHub" 
                            className={styles.calendar_img}
                        />

                        <img 
                            src="https://github-readme-streak-stats.herokuapp.com/?user=santv7&theme=dark" 
                            alt="GitHub Streak" 
                            className={styles.streak_img}
                        />
                    </div>
                </section>
            </main>

        </section>
    </>
  )
}

export default Github;