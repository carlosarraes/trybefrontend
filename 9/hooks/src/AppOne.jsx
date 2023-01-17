import { useState } from 'react'

function App() {
  const [dados, setDados] = useState({
    nome: '',
    idade: 0,
    cidade: '',
    modulo: '',
  })

  const handleChange = (e) => {
    const { value, name } = e.target

    setDados((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const { nome, idade, cidade } = dados

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome completo"
          onChange={handleChange}
          value={nome}
          name="nome"
        />
        <section className="grid">
          <input
            type="number"
            placeholder="Idade"
            name="idade"
            onChange={handleChange}
            value={idade}
          />
          <input
            type="text"
            placeholder="Cidade"
            name="cidade"
            onChange={handleChange}
            value={cidade}
          />
        </section>
        <section className="grid">
          <label htmlFor="fundamentos">
            <input
              type="radio"
              id="fundamentos"
              name="modulo"
              value="fundamentos"
              onChange={handleChange}
            />
            <span>Fundamentos</span>
          </label>
          <label htmlFor="frontend">
            <input
              type="radio"
              id="frontend"
              name="modulo"
              value="frontend"
              onChange={handleChange}
            />
            <span>Frontend</span>
          </label>
          <label htmlFor="backend">
            <input
              type="radio"
              id="backend"
              name="modulo"
              value="backend"
              onChange={handleChange}
            />
            <span>Backend</span>
          </label>
          <label htmlFor="computacao">
            <input
              type="radio"
              id="computacao"
              name="modulo"
              value="computacao"
              onChange={handleChange}
            />
            <span>Computacao</span>
          </label>
        </section>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default App
