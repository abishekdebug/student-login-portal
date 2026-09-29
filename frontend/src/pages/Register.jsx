import { useState } from "react"
import api from "../services/api"

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post(
  "/students/register/",
        {
          name: name,
          email: email,
          phone: phone,
          age: Number(age),
        }
      )

      console.log("Registration successful")
      console.log("Student:", response.data)

    } catch (error) {
      console.log("Registration failed")
      console.log(error.response?.data)
    }
  }

  return (
    <div>
      <h1>Student Registration</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register