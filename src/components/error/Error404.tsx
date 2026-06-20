import styles from './error404.module.css'
import girl from '../../assets/img/png/girl.png'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Error404 = () => {
  const fourOne = useRef<HTMLSpanElement | null>(null)
  const fourTwo = useRef<HTMLSpanElement | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(fourOne.current, {
        y: 0,
        opacity: 0.5,
        scale: 0.87
      }, {
        y: 100,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      })

      gsap.fromTo(fourTwo.current, {
        y: 0,
        opacity: 0.5,
        scale: 0.87
      }, {
        y: 100,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      })  
    }, containerRef);

    return () => ctx.revert();
  }, [])

  return (
    <section ref={containerRef} className={styles.error_page}>
        <div className={styles.area_center}>
            <span ref={fourOne} className={styles.left_four}>4</span>
            <div className={styles.girl_area}>
                <img src={girl} alt="girl error" />
            </div>
            <span ref={fourTwo} className={styles.right_four}>4</span>
        </div>
    </section>
  )
}

export default Error404;