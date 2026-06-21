import styles from './Github.module.css'
import githubMobile from '../../assets/img/png/github_mobile.png'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Github = () => {
    const titleGithub = useRef<HTMLHeadingElement | null>(null)
    const sectGithub = useRef<HTMLElement | null>(null)
    const h3Github = useRef<HTMLHeadingElement | null>(null)
    const pGithub = useRef<HTMLParagraphElement | null>(null)
    const mainInfoRef = useRef<HTMLElement | null>(null)
    const imgDivGithub = useRef<HTMLDivElement | null>(null)
    const profileH2Github = useRef<HTMLHeadingElement | null>(null)
    const calendarImgGithub = useRef<HTMLImageElement | null>(null)
    const streakImgGithub = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(titleGithub.current, {
                opacity: 0,
                scale: 0.8,
                y: -50,
                x: -15
            }, {
                y: 0,
                x: 0,
                duration: 0.6,
                opacity: 1,
                ease: 'power2.out',
                scale: 1,
                scrollTrigger: {
                    trigger: sectGithub.current,
                    start: 'top 70%',
                    end: 'center 40%',
                    scrub: true
                }
            })

            gsap.fromTo(h3Github.current, {
                opacity: 0,
                x: -33
            }, {
                x: 0,
                duration: 0.4,
                opacity: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectGithub.current,
                    start: 'top 60%',
                    end: 'center 10%',
                    scrub: true
                }
            })

            gsap.fromTo(profileH2Github.current, {
                opacity: 0,
                y: 50,
                scale: 0.85
            }, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: mainInfoRef.current,
                    start: 'top 70%',
                    end: 'center 20%',
                    scrub: true
                }            
            })

            gsap.fromTo(pGithub.current, {
                opacity: 0,
                y: 75,
                scale: 0.84
            }, {
                y: 0,
                duration: 0.55,
                opacity: 1,
                scale: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectGithub.current,
                    start: 'top 60%',
                    end: 'center 10%',
                    scrub: true
                }
            })

            gsap.fromTo(imgDivGithub.current, {
                opacity: 0,
                x: 115,
                scale: 0.9
            }, {
                x: 0,
                duration: 0.75,
                opacity: 1,
                scale: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectGithub.current,
                    start: 'top 60%',
                    end: 'center 10%',
                    scrub: true
                }
            })        

            gsap.fromTo(calendarImgGithub.current, {
                opacity: 0,
                scale: 0.88,
                y: -20
            }, {
                duration: 0.95,
                scale: 1,
                opacity: 1,
                y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectGithub.current,
                    start: 'center 50%',
                    end: 'bottom 60%',
                    scrub: true
                }
            })        

            gsap.fromTo(streakImgGithub.current, {
                opacity: 0,
                scale: 0.9,
                y: 30
            }, {
                duration: 0.38,
                scale: 1,
                opacity: 1,
                y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectGithub.current,
                    start: 'center 43%',
                    end: 'bottom 67%',
                    scrub: true
                }
            })
        }, sectGithub);

        return () => ctx.revert();
    }, [])

    return (
        <>
            <section ref={sectGithub} className={styles.github_sec}>
                <header className={styles.h_github}>
                    <div>
                        <h2 ref={titleGithub}>My GitHub data</h2>
                    </div>

                    <div className={styles.flex_github}>
                        <div className={styles.content_txt}>
                            <h3 ref={h3Github}>GitHub</h3>
                            <p ref={pGithub}>
                                Here is information from my <span className={styles.s_one}>GitHub</span>, such as streaks, <span className={styles.s_two}>activity frequency</span>, and <span className={styles.s_one}>commits</span>.
                            </p>
                        </div>

                        <div ref={imgDivGithub} className={styles.img_github}>
                            <img className={styles.github_mobile} src={githubMobile} alt="GitHub Icon" />
                        </div>
                    </div>
                </header>

                <main ref={mainInfoRef} className={styles.main_info_github}>
                    <header>
                        <h2 ref={profileH2Github} className={styles.font_tech}> 
                            My Profile: <a className={styles.github_link} href="https://github.com/santv7">SantV7</a>
                        </h2>
                    </header>

                    <section className={styles.commits}>
                        <div className={styles.github_cards_container}>
                            <img 
                                ref={calendarImgGithub}
                                src="https://ghchart.rshah.org/0f4c81/santv7" 
                                alt="GitHub contributions calendar" 
                                className={styles.calendar_img}
                            />
                            
                            <img 
                                ref={streakImgGithub}
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