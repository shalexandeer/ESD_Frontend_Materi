/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";

// Theme context
const ThemeContext = React.createContext();

// Custom hook to consume the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Theme provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Example usage outside of a component
export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Toggle Theme ({theme})</button>;
};

export default ThemeProvider;
