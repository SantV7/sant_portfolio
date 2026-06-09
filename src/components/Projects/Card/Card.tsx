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
        <div className={styles.area_img_project}>
            <img src={imgP} alt="Imagem de projeto" />
        </div>

        <h3 className={styles.title_project}>{nameP}</h3>
        <p className={styles.description_project}>{descP}</p>
        <a className={styles.btn_project} target="_blank" href={urlP}>Ver projeto</a>
    </div>
    </>
  )
}

export default Card