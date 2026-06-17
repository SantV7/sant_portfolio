import { useState, type FormEvent } from 'react'
import styles from './FormContact.module.css'

const FormContact = () => {
  const [nome, setNome] = useState('Seu nome completo')
  const [email, setEmail] = useState('emailFake@exemplo.com')
  const [mensagem, setMensagem] = useState('Digite sua mensagem aqui...')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setErro('')
    setSucesso(false)

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      setErro('Por favor, preencha todos os campos.')
      return
    }

    if (!email.includes('@')) {
      setErro('Por favor, insira um e-mail válido.')
      return
    }

    setSucesso(true)

    setNome('')
    setEmail('')
    setMensagem('')
  }

  return (
    <>
      <section className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.formBox}>
          {erro && <p className={styles.errorMsg}>{erro}</p>}
          {sucesso && <p className={styles.successMsg}>Mensagem enviada com sucesso!</p>}

          <div className={styles.inputGroup}>
            <label htmlFor="nome">Nome:</label>
            <input 
              type="text" 
              id="nome"
              value={nome}
              onFocus={() => setNome("")}
              onChange={(event) => setNome(event.target.value)}
              className={styles.inputField}
              
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail:</label>
            <input 
              type="text" 
              id="email"
              value={email}
              onFocus={() => setEmail("")}
              onChange={(event) => setEmail(event.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea 
              id="mensagem"
              value={mensagem}
              onFocus={() => setMensagem("")}
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

export default FormContact