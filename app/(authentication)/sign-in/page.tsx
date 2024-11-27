"use client"
import { IUser } from "@/app/_types/IUser"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

export default function SignIn() {
  const [user, setUser] = useState<IUser>({ username: "", password: "" })
  const [errorResponse, setErrorResponse] = useState<string>("")
  const router = useRouter()

  // Handle changes in input fields (username, password)
  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser((prevData) => ({ ...prevData, [name]: value }))
  }

  // Handle form submission
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    // Credential Validation
    if (!user.username || !user.password) {
      setErrorResponse("Username and password are required")
      return
    }

    try {
      // Create the body to send in the POST request
      const createUrlEncodedBody = new URLSearchParams({
        username: user.username,
        password: user.password,
      })

      // Timeout Setup
      const controller = new AbortController()
      const signal = controller.signal

      // Post
      const response = await fetch("http://localhost:8080/api/v2/auth/login", {
        method: "POST",
        body: createUrlEncodedBody,
        signal,
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      console.log(response)

      // Bad Credentials
      if ((await response.status) == 401) {
        setErrorResponse(await response.text())
        return
      }

      // SUCCESS
      const data = await response.text() // Get the token from the response
      console.log("Login successful:", data)

      // Redirect
      router.push("/")
    } catch (error) {
      console.error("Error occurred during login:", error)
    }
  }

  return (
    <div className="p-4">
      <header>Please Login</header>
      <section>
        <form onSubmit={onSubmit}>
          {/* Username */}
          <section>
            <label htmlFor="username">Username</label>
            <input
              className="border"
              placeholder="Enter username..."
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
            />
          </section>

          {/* Password */}
          <section>
            <label htmlFor="password">Password</label>
            <input
              className="border"
              placeholder="Enter password..."
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
            />
          </section>

          <section>
            <p className="text-red-500">{errorResponse}</p>
          </section>

          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  )
}
