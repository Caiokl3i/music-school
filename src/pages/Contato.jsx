import { useState } from 'react'
import Footer from '../components/Footer/Footer'
import { site } from '../data/site'
import styles from './Contato.module.css'
import shared from './shared.module.css'

function Contato() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    nome: '',
    email: '',
    instrumento: 'Violão',
    mensagem: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Contato Caio Music — ${form.instrumento}`)
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nE-mail: ${form.email}\nInstrumento: ${form.instrumento}\n\n${form.mensagem}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <h2 className={shared.pageTitle}>Contato</h2>
      <p className={shared.pageSubtitle}>
        Envie uma mensagem para agendar sua primeira aula ou tirar dúvidas sobre os
        cursos.
      </p>

      <div className={styles.layout}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome"
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </label>
          <label>
            Instrumento de interesse
            <select name="instrumento" value={form.instrumento} onChange={handleChange}>
              <option>Violão</option>
              <option>Bateria</option>
              <option>Piano</option>
              <option>Outro</option>
            </select>
          </label>
          <label>
            Mensagem
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Conte seu nível e o que gostaria de aprender..."
            />
          </label>
          <button type="submit" className={styles.submit}>
            Enviar mensagem
          </button>
          {sent && (
            <p className={styles.success}>
              Se o seu cliente de e-mail não abriu, escreva direto para{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          )}
        </form>

        <aside className={styles.info}>
          <h3>Informações</h3>
          <dl>
            <dt>E-mail</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
            <dt>LinkedIn</dt>
            <dd>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                Perfil profissional
              </a>
            </dd>
            <dt>Modalidade</dt>
            <dd>{site.location}</dd>
            <dt>Horários</dt>
            <dd>{site.hours}</dd>
          </dl>
        </aside>
      </div>

      <Footer />
    </>
  )
}

export default Contato
