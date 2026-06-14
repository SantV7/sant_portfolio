import { useState } from 'react';
import styles from './Card.module.css';

interface CardPros {
  id: number;
  imgP: string;
  nameP: string;
  descP: string;
  urlP: string;
}

const Card = ({ id, imgP, nameP, descP, urlP }: CardPros) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
        <img src={imgP} alt={nameP} />
      </div>

      <div className={`${styles.info_project} ${isOpen ? styles.open : ''}`}>
        <p className={styles.description_project}>{descP}</p>
        
        <div className={styles.actions_project}>
          <button 
            className={styles.btn_toggle} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Fechar' : 'Ler mais'}
          </button>
          <a className={styles.btn_project} target="_blank" rel="noreferrer" href={urlP}>
            Ver projeto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;