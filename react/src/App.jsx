import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [authMe, setAuthMe] = useState({})
  const [showLogin, setShowLogin] = useState(false)
  const [showLogout, setShowLogout] = useState(false)

  useEffect(() => {
    fetch('/.auth/me').then(async (res) => {
      const data = await res.json()
      setAuthMe(data)
      if(res.status === 404){
        setShowLogin(false)
        setShowLogout(false)
      }else if ("clientPrincipal" in data && data.clientPrincipal == null) {
        setShowLogin(true)
        setShowLogout(false)
      }else{
        setShowLogin(false)
        setShowLogout(true)
      }
    })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Static Web Apps vs Storage Account</h1>
      <div className="card">
        <h2>Auth Data</h2>
        { showLogin && <a href="/.auth/login/aad">Login</a> }
        { showLogout && <a href="/.auth/logout">Logout</a> }
        <pre style={{textAlign: "left", width: "50%", margin: "auto"}}>
          { JSON.stringify(authMe, null, 2) }
        </pre>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
