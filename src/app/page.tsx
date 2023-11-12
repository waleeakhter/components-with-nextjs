"use server"
import Select from "./components/AdvanceSelect"

export default async function Home() {
  const clients = await fetch('https://jk-trading.vercel.app/api/client')
  const options = await clients.json().then(res => res.data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <Select options={options} className="w-96" label="Select..." />
      </div>
    </main>
  )
}
