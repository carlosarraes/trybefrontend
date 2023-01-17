import { useEffect, useState } from 'react'
import { HiOutlineMailOpen, HiOutlineMail } from 'react-icons/hi'

const App = () => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      email: 'Primeiro email',
      status: 0,
    },
    {
      id: 2,
      email: 'Segundo email',
      status: 0,
    },
    {
      id: 3,
      email: 'Terceiro email',
      status: 0,
    },
  ])

  useEffect(() => {
    const verify = emails.every((email) => email.status === 1)

    if (verify) console.log('Todos os emails foram lidos')
  }, [emails])

  const handleStatus = (id, code) => {
    setEmails(emails.map((email) => (email.id === id ? { ...email, status: code } : email)))
  }

  const handleReadAll = () => {
    setEmails(emails.map((email) => ({ ...email, status: 1 })))
  }

  const handleUnreadAll = () => {
    setEmails(emails.map((email) => ({ ...email, status: 0 })))
  }

  return (
    <>
      <header>
        <h1>Tybe Mail</h1>
      </header>
      <main>
        <section className="grid">
          <button onClick={handleReadAll}>
            <HiOutlineMailOpen /> Marcar todas como lida
          </button>
          <button onClick={handleUnreadAll}>
            <HiOutlineMail /> Marcar todas como não lida
          </button>
        </section>
        <section>
          {emails.map(({ id, email, status }) => (
            <div key={id} className="email">
              <p className={status === 0 ? 'unread' : 'read'}>{email}</p>
              <div>
                <button onClick={() => handleStatus(id, 1)}>
                  <HiOutlineMailOpen />
                </button>
                <button>
                  <HiOutlineMail onClick={() => handleStatus(id, 0)} />
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
