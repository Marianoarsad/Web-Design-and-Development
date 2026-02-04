import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './pages/Login';

import { AuthContextProvider } from './context/AuthContext';

function App() {

    const [ formData, setFormData ] = useState();

    async function handleLogin(e) {
        
        console.log(e.target)

        e.preventDefault();

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        await fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

    }

  return (
    <AuthContextProvider>
      <h1>Login page</h1>
      <div>
            <Login/>
      </div>
    </AuthContextProvider>
  )
}

export default App
