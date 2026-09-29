import { useState } from "react"
import api from "../services/api"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post(
  "/login/",
        {
          username: username,
          password: password,
        }
      )

      localStorage.setItem("access_token", response.data.access)
      localStorage.setItem("refresh_token", response.data.refresh)

      console.log("Login successful")
    } catch (error) {
      console.log("Login failed")
      console.log(error.response?.data)
    }
  }

  return (
    <div>
      <h1>Student Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login