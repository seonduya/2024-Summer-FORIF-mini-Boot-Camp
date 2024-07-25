import React, {createContext, useState, useContext,useCallback} from "react";
import { lightTheme,darkTheme } from "../theme/theme";
import { ThemeProvider as StyledProvider } from "styled-components";

//context 기본형태
const ThemeContext = createContext({});

const ThemeProvider = ( {children} )=>{
    const localTheme = window.localStorage.getItem('theme')|| 'light';
    const [themeMode, setThemeMode] = useState(localTheme);
    const themeObject = themeMode === 'light' ? lightTheme : darkTheme;

    const toggleTheme = useCallback(()=> {
        const newTheme = themeMode === "light" ? "dark" : "light";
        setThemeMode(newTheme);
        window.localStorage.setItem('theme', newTheme);
    },[themeMode]);    

    return(
        <ThemeContext.Provider value={{ themeMode, toggleTheme}}>
            <StyledProvider theme= {themeObject}>
                { children }
            </StyledProvider>
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const context = useContext(ThemeContext);
    
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    // const {themeMode, setThemeMode} = context;

    // const toggleTheme = useCallback(()=> {
    //     if (themeMode === "light"){
    //         setThemeMode("dark");
    //         window.localStorage.setItem('theme','dark');
    //     }
    //     else{
    //         setThemeMode("light");
    //         window.localStorage.setItem('theme','light');
    //     }

    // // const asd = window.localStorage.getItem('theme');
    // // console.log(asd)
    // }, [themeMode, setThemeMode]);ㅋ

    // return [themeMode, toggleTheme];
    return context;
}

export {ThemeProvider, useTheme };

