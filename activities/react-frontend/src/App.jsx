import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [ formData, setFormData ] = useState();

    async function handleLogin(e) {
        
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

        console.log(message);
    }

  return (
    <>
      <h1>Login page</h1>
      <div>
            <form onSubmit={handleLogin}>
                <label for="username">Username</label>
                <input type='text' name="username"/>

                <label for="password">Password</label>
                <input name="password" type='password'/>

                <button type='submit'>Login</button>
            </form>
      </div>
    </>
  )
}

export default App
