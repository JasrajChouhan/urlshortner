import { UserButton } from "@clerk/nextjs"

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-blue-300 text-white p-4">
      <h1 className="text-2xl font-semibold">My App</h1>
      <div className="user-profile">
        <UserButton />
      </div>
    </header>
  )
}