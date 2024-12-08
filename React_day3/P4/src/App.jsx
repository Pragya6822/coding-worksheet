// Problem 4: Context API for Theme Switching
// The Context API provides a way to manage global state across the component tree without prop drilling. It's especially useful for themes, authentication, or localization.


// task1 & task2 = Debugging  & output based question
// const { theme, toggleTheme } = useContext(ThemeContext);

import React , {useContext} from 'react';
import {ThemeProvider, ThemeContext} from './components/ThemeContext'

const ThemeComponent =() => {

    const { theme , toggleTheme} = useContext(ThemeContext);

    return (
        <div style={{ background :theme === "light" ? "aqua" : "black", 
            color : theme === "light" ? "black" : "aqua" }}>
            <p>Current Theme : {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

const App = () => {
    return (
        <ThemeProvider>
            <ThemeComponent />
        </ThemeProvider>
    );
}

export default App;


