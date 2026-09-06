import { useState, useEffect, useRef } from 'react';
import { FaReact, FaCode } from 'react-icons/fa';
import { SiTypescript, SiGreensock, SiFigma } from 'react-icons/si';
import { Ellipsis, Share2 } from 'lucide-react';
import styles from './Card.module.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CardPros {
  id: number;
  imgP: string;
  nameP: string;
  descP: string;
  urlP: string;
}

const Card = ({ id, imgP, nameP, descP, urlP }: CardPros) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;

    if (element) {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element, 
            start: 'top 85%', 
            toggleActions: 'play none none reverse', 
            scrub: true
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  

  const renderTechBadges = (projectName: string) => {
    const name = projectName.toLowerCase();

    const techs = [
      { name: 'React', icon: <FaReact />, show: true },
      { name: 'TypeScript', icon: <SiTypescript />, show: !name.includes('coins') },
      { name: 'GSAP', icon: <SiGreensock />, show: !name.includes('pizzaria') },
      { name: 'UI/UX', icon: <SiFigma />, show: true },
      { name: 'API', icon: <FaCode />, show: name.includes('coins') }
    ];

    return (
      <div className={styles.tech_container}>
        {techs.map((tech, index) => tech.show && (
          <span key={index} className={styles.tech_badge} title={tech.name}>
            {tech.icon}
            <small>{tech.name}</small>
          </span>
        ))}
      </div>
    );
  };

  return (
    // Adicionada a ref={cardRef} aqui
    <div ref={cardRef} className={styles.card_interface} key={id}>
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
        
        {isOpen && renderTechBadges(nameP)}
        
        <div className={styles.actions_project}>
          <button 
            className={styles.btn_toggle} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Close' : 'Read more'} <Ellipsis color='white' style={{marginBottom: '-6px'}}/>
          </button>
          <a className={styles.btn_project} target="_blank" rel="noreferrer" href={urlP}>
            View <Share2 color='white' style={{marginBottom: '-6px'}} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;