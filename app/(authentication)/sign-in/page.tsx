"use client"
import { IUser } from "@/app/_types/IUser"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

// TODO - DRY - Implementation
export default function SignIn() {
  const [user, setUser] = useState<IUser>({ username: "", password: "" })
  const router = useRouter()

  function handleUserChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setUser((prevData) => ({ ...prevData, [name]: value }))
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()

    const createUrlEncodedBody = (user: IUser): URLSearchParams => {
      return new URLSearchParams({
        username: user.username,
        password: user.password,
      })
    }

    // Init
    const timeout: number = 10_000
    const controller = new AbortController()
    const signal = controller.signal

    // Set up the timeout
    const timeoutId = setTimeout(() => {
      controller.abort() // Abort the fetch request
    }, timeout)

    // TODO - Login process - Spinner
    // POST

    try {
      fetch("http://localhost:8080/api/v2/auth/login", {
        method: "POST",
        body: createUrlEncodedBody(user),
        //credentials: "include", // Ensures cookies are sent/received
        signal, // Attach the signal to the fetch request
      })
        .then((response) => {
          clearTimeout(timeoutId) // Clear the timeout if fetch is successful
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          return response.text()
        })
        .then((data) => {
          localStorage.setItem("authToken", data) // TOKEN
          console.log("Login successful:", data)
          router.push("/")
        })
        .catch((error) => {
          console.log(error)

          clearTimeout(timeoutId) // Clear the timeout if an error occurs
          if (error.name === "AbortError") {
            console.error("Error: Request timed out")
          } else {
            console.error("Error:", error)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="p-4">
        <p>DEBUGGING: {user.username}</p>
        <p>DEBUGGING: {user.password}</p>

        <header>Please Login</header>
        <section>
          <form onSubmit={onSubmit}>
            {/* Username */}
            <section>
              <label htmlFor="username"></label>
              <input
                className="border "
                placeholder="username.."
                type="text"
                name="username"
                onChange={(event) => handleUserChange(event)}
              />
            </section>

            {/* Password */}
            <section>
              <label htmlFor="password"></label>
              <input
                className="border"
                placeholder="password.."
                type="password"
                name="password"
                onChange={(event) => handleUserChange(event)}
              />
            </section>

            <button type="submit">Login</button>
          </form>
        </section>
      </div>
    </>
  )
}
