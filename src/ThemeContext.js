import React, { useState, useContext, useEffect } from "react"

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
  const DARKTHEME = "darkTheme"
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem(DARKTHEME) === "true"
  )

  useEffect(() => {
    localStorage.setItem(DARKTHEME, darkTheme)
    darkTheme
      ? document
          .querySelectorAll(".black")
          .forEach(element => element.classList.add("white"))
      : document
          .querySelectorAll(".white")
          .forEach(element => element.classList.remove("white"))
  }, [darkTheme])

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
