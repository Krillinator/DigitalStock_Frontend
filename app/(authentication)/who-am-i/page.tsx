"use client"
import { IErrorResponse } from "@/app/_types/IErrorResponse"
import { useEffect } from "react"

export default function WhoAmI() {
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/who-am-i", {
          method: "GET",
          headers: {
            // localStorage must appear in client components
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Add the Bearer prefix here
          },
        })

        if (!response.ok) {
          console.error("Response status not OK:", response.status)
          const errorData: IErrorResponse = await response.json() // If the error has a JSON body
          console.error(`Error: ${errorData.message}`)
          console.error(
            `Description: ${
              errorData.description || "No additional description"
            }`
          )
          return
        }

        // You decide how to parse the body: JSON, text, etc.
        const data = await response.text() // Or .json() if the response body is JSON
        console.log("Loading Spring User:", data)
      } catch (error) {
        console.error("Error occurred:", error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <div className="p-4">
      <header>Current Logged in user</header>
    </div>
  )
}
