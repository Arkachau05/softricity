import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Products from './Products'
import ThemeToggle from './components/ThemeToggle'
import AdminFeedback from './AdminFeedback'

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-theme text-theme">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4">
          <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
          <nav className="flex flex-col gap-3">
            <Link to="/" className="hover:underline">Products</Link>
            <Link to="/admin" className="hover:underline">Feedback</Link>
          </nav>

          <div className="mt-auto pt-10">
            <ThemeToggle />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/admin" element={<AdminFeedback />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
