"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      Error: {error.message}
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
