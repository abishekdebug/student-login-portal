import { useEffect, useState } from "react"
import api from "../services/api"

function Dashboard() {
  const [profile, setProfile] = useState(null)

  const handleLogout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")

    window.location.href = "/login"
  }

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get("/students/profile/")

        setProfile(response.data)
      } catch (error) {
        console.log("Profile failed")
        console.log(error.response?.data)
      }
    }

    getProfile()
  }, [])

  return (
    <div>
      <h1>Student ----- Profile -----Dashboard</h1>

      <button onClick={handleLogout}>
        Logout
      </button>

      {profile && (
        <div>
          <h2>Welcome, {profile.username}</h2>
          <p>{profile.message}</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard