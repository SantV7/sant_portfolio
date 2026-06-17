import { useState, type FormEvent } from 'react'
import styles from './FormContact.module.css'

const FormContact = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
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
              onChange={(event) => setNome(event.target.value)}
              className={styles.inputField}
              placeholder="Seu nome completo"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail:</label>
            <input 
              type="text" 
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={styles.inputField}
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea 
              id="mensagem"
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
              className={styles.textareaField}
              placeholder="Digite sua mensagem aqui..."
            />
          </div>

          <button type="submit" className={styles.submitBtn}>Enviar</button>
        </form>
      </section>
    </>
  )
}

export default FormContact