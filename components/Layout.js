import { Menu, Settings, User } from 'lucide-react'
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Menu size={24} className="text-blue-600" />
            <span className="font-semibold text-lg">Logitech Marketing AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Settings size={22} className="text-gray-500 hover:text-blue-600 transition" />
            <User size={22} className="text-gray-500 hover:text-blue-600 transition" />
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto p-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Logitech. All rights reserved.
        </div>
      </footer>
    </div>
  )
}