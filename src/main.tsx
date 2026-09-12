import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'system-ui',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>
          ZEESHAN AI LABS
        </h1>

        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
          CEO Dashboard Loading...
        </p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
