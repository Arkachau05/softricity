import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="border px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 dark:text-white transition"
    >
      {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  )
}
