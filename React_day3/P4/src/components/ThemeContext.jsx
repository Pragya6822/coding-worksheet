import React, {useState, createContext} from "react";

// create the context first 
export const ThemeContext = createContext();

// create the provider component
export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState("light");


    const toggleTheme =() => {
        setTheme((prev) => (prev === "light"? "dark" : "light"));  // switching light to dark and vice-versa
    };


    return (
        <ThemeContext.Provider value={{theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
 }