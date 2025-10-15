import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Llamar a la API de FastAPI
    fetch('/api/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al conectar con la API')
        }
        return response.json()
      })
      .then(data => {
        setMessage(data.message)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 FastAPI + React en Vercel</h1>
        
        <div className="card">
          {loading && <p>Cargando...</p>}
          {error && <p className="error">Error: {error}</p>}
          {!loading && !error && (
            <div className="message-container">
              <h2>{message}</h2>
              <p className="subtitle">Mensaje recibido desde FastAPI Backend</p>
            </div>
          )}
        </div>

        <div className="info">
          <p>✅ Backend: FastAPI (Python)</p>
          <p>✅ Frontend: React + Vite</p>
          <p>✅ Deploy: Vercel</p>
        </div>
      </header>
    </div>
  )
}

export default App
