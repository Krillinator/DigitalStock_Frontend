export default async function productId({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const myParam = (await params).productId
  // What does an async page actually do?

  return (
    <main>
      <p>The RequestParam is {myParam} </p>
    </main>
  )
}
