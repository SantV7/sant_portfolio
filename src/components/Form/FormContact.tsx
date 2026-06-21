import { useState, useEffect, useRef, type FormEvent } from 'react'
import styles from './FormContact.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const FormContact = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState(false)

  const containerRef = useRef<HTMLElement | null>(null)
  const formBoxRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(formBoxRef.current, {
        opacity: 0,
        rotationX: -15, 
        transformPerspective: 1000, 
        y: 80,
        scale: 0.95
      }, {
        opacity: 1,
        rotationX: 0,
        y: 0,
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%', 
          end: 'top 35%',   
          scrub: 1 
        }
      })

      const formElements = formBoxRef.current?.querySelectorAll(`.${styles.inputGroup}, .${styles.submitBtn}`);
      
      if (formElements && formElements.length > 0) {
        gsap.fromTo(formElements, {
          opacity: 0,
          y: 30,
        }, {
          opacity: 1,
          y: 0,
          stagger: 0.15, 
          ease: 'power1.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1
          }
        })
      }

    }, containerRef);

    return () => ctx.revert();
  }, [])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setErro('')
    setSucesso(false)

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      setErro('Por favor, preencha todos os campos.')
      return;
    }

    if (!email.includes('@')) {
      setErro('Por favor, insira um e-mail válido.')
      return;
    }

    setSucesso(true)
    setNome('')
    setEmail('')
    setMensagem('')
  }

  return (
    <>
      <section ref={containerRef} className={styles.container}>
        <form ref={formBoxRef} onSubmit={handleSubmit} className={styles.formBox}>
          {erro && <p className={styles.errorMsg}>{erro}</p>}
          {sucesso && <p className={styles.successMsg}>Mensagem enviada com sucesso!</p>}

          <div className={styles.inputGroup}>
            <label htmlFor="nome">Nome:</label>
            <input 
              type="text" 
              id="nome"
              placeholder="Seu nome completo"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail:</label>
            <input 
              type="email" 
              id="email"
              placeholder="emailFake@exemplo.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea 
              id="mensagem"
              placeholder="Digite sua mensagem aqui..."
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
              className={styles.textareaField}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>Enviar</button>
        </form>
      </section>
    </>
  )
}

export default FormContact;