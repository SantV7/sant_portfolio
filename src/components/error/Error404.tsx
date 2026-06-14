import styles from './error404.module.css'
import girl from '../../assets/img/png/girl.png'

const Error404 = () => {
  return (
    <section className={styles.error_page}>
        <div className={styles.area_center}>
            <span className={styles.left_four}>4</span>
            <div className={styles.girl_area}>
                <img src={girl} alt="girl error" />
            </div>
            <span className={styles.right_four}>4</span>
        </div>
    </section>
  )
}

export default Error404