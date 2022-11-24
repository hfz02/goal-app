import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(email, password)
  }


  return (
    <div className='container mt-5'>
        <div className="login">
          <div className="container flex">
            {/* <h1>Login Page</h1> */}
            <form onSubmit={handleSubmit}>
              <label>Email address:</label>
              <input 
                type="email" 
                onChange={e => setEmail(e.target.value)} 
                value={email} 
              />
              <label>Password:</label>
              <input 
                type="password" 
                onChange={e => setPassword(e.target.value)} 
                value={password} 
              />

              <button disabled={isLoading}>Sign up</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login