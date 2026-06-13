import styles from './Card.module.css'


interface CardPros {
    id: number;
    imgP: string;
    nameP: string;
    descP: string;
    urlP: string
}


const Card = ({id, imgP, nameP, descP, urlP}: CardPros) => {
  return (
    <>
    <div className={styles.card_interface} key={id}>
      <header>
        <div className={styles.main_stylying}>
          <div className={styles.flex_circle}>
            <div id={styles.orange_circle} className={styles.circle_project}></div>
            <div id={styles.orange_yellow} className={styles.circle_project}></div>
            <div id={styles.orange_green} className={styles.circle_project}></div>
          </div>
          <div>
            <h3>{nameP}</h3>
          </div>
        </div>
      </header>
      
        <div className={styles.area_img_project}>
            <img src={imgP} alt="Imagem de projeto" />
        </div>
        <p className={styles.description_project}>{descP}</p>
        <a className={styles.btn_project} target="_blank" href={urlP}>Ver projeto</a>
    </div>
    </>
  )
}

export default Card