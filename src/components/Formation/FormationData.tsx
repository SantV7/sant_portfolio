import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Formation.module.css'

export const FormationData = () => {
  const componentRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(`.${styles.title_formation} h1`, 
        { opacity: 0, y: -30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      
      .fromTo(`.${styles.about_my_course} h2`, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )

      .fromTo([`.${styles.about_my_course} h3`, `.${styles.about_my_course} p`], 
        { opacity: 0, x: -20 }, 
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
        '-=0.4'
      )
    }, componentRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={componentRef} className={styles.sect_formation}>
      <header className={styles.title_formation}>
        <h1>My Formation</h1>
      </header>

      <main className={styles.area_txt}>
        <article className={styles.about_my_course}>
          <h2>Systems Analysis and Development</h2>
          <h3>About my course</h3>
          <p>It is a higher education degree focused on training practical and agile professionals for the technology market.
             The core purpose of the program is to teach how to design, develop, analyze, test, and implement information systems
              and applications for various industries. Unlike more theoretical majors, ADS is highly tailored to actual corporate
               needs, covering everything from programming logic and databases to software engineering and information security, 
               allowing for a fast-paced entry into the tech workforce.</p>
        </article>
      </main>
    </section>
  )
}