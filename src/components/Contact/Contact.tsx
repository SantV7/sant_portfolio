import { useState, useEffect, useRef } from 'react'
import styles from './Contact.module.css'
import { MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { 
  SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiJavascript, SiCss, SiPostgresql, SiGit, SiGithub, SiFigma, SiVercel, SiSass 
} from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';

gsap.registerPlugin(ScrollTrigger);

interface GitHubProps {
  id: number ;
  avatar_url: string ;
  login: string;
  public_repos: number ;
  followers: number ;
  following: number ;
  created_at: string ;
  name: string ;
}

const Contact = () => {
  const [gitData, setGitData] = useState<GitHubProps | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const share_portfolio = useRef< HTMLParagraphElement | null>(null)

  useEffect(() => {
    let isMounted = true;

    const requestMyDataGithub = async () => {
      try {
        const response: Response = await fetch('https://api.github.com/users/santv7');

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data: GitHubProps = await response.json();
        
        if (isMounted) {
          setGitData(data);
        }
      } catch (err: unknown) {
        if (isMounted) {
          console.error('Erro ao buscar dados do GitHub:', err instanceof Error ? err.message : err);
        }
      }
    };

    requestMyDataGithub();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const links = containerRef.current.querySelectorAll(`.${styles.my_links}`);
      
      gsap.fromTo(links, 
        { 
          opacity: 0, 
          y: -50 
        }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 80%',
            scrub: true
          }
        }
      );
    }
  }, []);


  useEffect(() => {
    gsap.fromTo(share_portfolio.current, {
      x: -100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.76,
      ease: "power2",
      scrollTrigger : {
        trigger: share_portfolio.current,
        start: 'top 98%' ,
        end: 'top 76%',
        scrub: 1.5
      }
    })
  }, [])

  return (
    <>
    <section id='contact_sect_href' className={styles.contact_sect}>
        <header className={styles.header_contact}>
                <span className={`${styles.link_orange} ${styles.link_span_d}`}>Links</span>
                <h1>Find Me On <br /> Professional Networks</h1>
                <span className={`${styles.link_orange} ${styles.link_span_m}`}>Links</span>
                <div className={styles.links_wrapper}>
                    <div className={styles.two_links}>
                        <a 
                          target='_blank'
                          rel="noreferrer" 
                          href="https://github.com/santv7">
                           Github
                        </a>

                        <a 
                          target='_blank' 
                          rel="noreferrer" 
                          href="https://linkedin.com/in/viniciussant07">
                           LinkedIn
                        </a>
                    </div>

                    <div className={styles.one_links}>
                        <a 
                          target='_blank' 
                          rel="noreferrer"
                          href="mailto:3izuna@gmail.com">
                           E-mail 
                        </a>
                    </div>
                </div>
        </header>

        <main >
            <div className={styles.container_grid}>
              <div ref={containerRef} className={styles.all_links}>
                 <a
                    id='l_link'
                    className={styles.my_links}
                    target='_blank' 
                    rel="noreferrer"
                    href="https://linkedin.com/in/viniciussant07">
                      <header className={styles.h_click}> LinkedIn<div className={styles.show_links}>Click</div></header>
                      <div className={styles.show_links}>  https://linkedin.com/in/viniciussant07</div> 
                </a>
     
                 <a 
                    id='g_link'
                    className={styles.my_links}
                    href="https://github.com/santv7"
                    target='_blank'
                    rel="noreferrer">
                      <header className={styles.h_click}>Github <div className={styles.show_links}>Click</div></header>
                      <div className={styles.show_links}>  https://github.com/santv7</div>
                 </a>

                 <a 
                    id='e_link'
                    className={styles.my_links}
                    href="mailto:3izuna@gmail.com"
                    target='_blank'
                    rel="noreferrer">
                      <header className={styles.h_click}> Email<div className={styles.show_links}>Click</div></header>
                 </a>

                 <a 
                    id='y_link'
                    className={styles.my_links}
                    href="https://www.youtube.com/@vy.S17"
                    target='_blank'
                    rel="noreferrer">
                      <header className={styles.h_click}> Youtube <div className={styles.show_links}>Click</div></header>
                      <div className={styles.show_links}>  https://www.youtube.com/@vy.S17</div>
                 </a>                  

              <div className={styles.share_this_portfolio}>
                <p>
                   Share this portfolio via this link.
                </p>
                <p ref={share_portfolio}>
                   https://sant-portfolio.vercel.app/
                </p>            
               </div>
             </div>

              {gitData ? (
                  <div className={styles.card_data}>
                    <header className={styles.h_github_data}>
                      <img className={styles.img_logo_g} src={gitData.avatar_url} alt="Logo Github"  />
                      <div>
                        <MapPin color='black' size={20} /> Brasília - DF, Brazil
                      </div>
                    </header>
                    
                    <main className={styles.main_github_data}>
                      <p><strong>{gitData.public_repos}</strong> Repositórios</p>
                      <p><strong>{gitData.followers}</strong> Followers</p>
                      <p><strong>{gitData.following}</strong> Following</p>
                      <br />
                      <p>Full Name: {gitData.name}</p>

                      <div className={styles.icons_tech}>
                        <div className={styles.tech_icons}>
                           <SiJavascript title="JavaScript" color="#F7DF1E" size={43} className={styles.js_bg} />
                           <SiTypescript title="TypeScript" color="#3178C6" size={43} />
                           <SiReact title="React" color="#61DAFB" size={43} />
                           <SiTailwindcss title="Tailwind CSS" color="#06B6D4" size={43} />
                           <SiSass title="Sass" color="#CC6699" size={43} />
                           <DiSqllite title="SQL" color="#003B57" size={43} />
                           <SiPostgresql title="PostgreSQL" color="#4169E1" size={43} />
                           <SiHtml5 title="HTML5" color="#E34F26" size={43} />
                           <SiCss title="CSS3" color="#1572B6" size={43} />
                           <SiGit title="Git" color="#F05032" size={43} />
                           <SiGithub title="GitHub" color="#fcfdff" size={43} />
                           <SiFigma title="Figma (UI/UX)" color="#f17908" size={43} />
                           <SiVercel title="Vercel" color="#000000" size={43} />
                          </div>
                      </div>
                    </main>

                    <footer className={`${styles.footer_g} ${styles.footer_g_border}`}>
                      <p>Since {gitData.created_at.substring(0, 10)}</p>
                    </footer>
                  </div>
                   ) : (
                  <div className={styles.card_data}>
                    <header className={styles.h_github_data}>
                      <div>
                        <MapPin color='black' size={18} /> Santa Maria - DF
                      </div>
                    </header>
                    <p><strong>33</strong> Repositories</p>
                    <p><strong>7</strong> Followers</p>
                    <p><strong>5</strong> Following</p>
                  </div>
                )}
            </div>
        </main>
    </section>
    </>
  )
}

export default Contact