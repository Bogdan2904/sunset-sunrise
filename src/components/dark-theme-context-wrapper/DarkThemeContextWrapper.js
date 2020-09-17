import React, {useState} from "react";
import {DarkThemeContext, isDarkTheme} from "../../context/DarkThemeContext";

export function DarkThemeContextWrapper(props){
    const [isDarkThemeOn, setDarkThemeOn] = useState(isDarkTheme);

    const toggleTheme = () =>{
        setDarkThemeOn(!isDarkThemeOn)
    }

    const {children} = props;

    return (
        <DarkThemeContext.Provider value={{isDarkTheme: isDarkThemeOn, toggleTheme}}>
            {children}
        </DarkThemeContext.Provider>
    )
}
