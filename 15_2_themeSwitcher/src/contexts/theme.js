import { createContext, useContext } from "react";

/* 
This is the short hand way to create and export context in one file. 
This approach is usally taken in the industry
*/

export const themeContext = createContext({
    themeMode: 'light',
    darkTheme: () => { },
    lightTheme: () => { }
})

/*
This variable saved us the work of importing themeContext and adding 
provider property to it decreasing the readablility
*/
export const ThemeProvider = themeContext.Provider


/*
This custom hook saved us the work of importing and storing useContext hook
in the file where we want to use these properties
*/
export default function useTheme() {
    return useContext(themeContext)
}