"use client"

interface CustomError extends Error {
  digest?: string // Add the 'digest' property to the error object
}

export default function Error({
  error,
  reset,
}: {
  error: CustomError // Use the custom error type
  reset: () => void
}) {
  return (
    <div>
      <p>Error: {error.message}</p>
      {error.digest && <p>Digest: {error.digest}</p>}
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
