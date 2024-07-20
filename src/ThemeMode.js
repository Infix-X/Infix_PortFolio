import React, { createContext, useContext } from "react";
export const ThemeMode =createContext({
    ThemeMode:"Light",
    LightTheme :()=>{} ,
    DarkTheme :()=>{},

});

export const ThemeContextProvider = ThemeMode.Provider;

export default function UseThemeContext (){
    return useContext(ThemeMode);
}

