import { changeTheme } from "../../utils/theme"
import { SunIcon, MoonIcon } from "../Icons"
import { useState } from 'react'

const BTNTheme = ()=> {
    const isDark = localStorage.theme === 'dark'
    const [ isDarkTheme, setIsDarkTheme ] = useState<boolean>(isDark)

    const changeThemeIcon = ()=> {
        changeTheme()
        const darkTheme = localStorage.theme === 'dark'
        setIsDarkTheme(darkTheme)
    }

    return(
        <button onClick={changeThemeIcon} >
            {isDarkTheme ?
                <SunIcon color= 'white' className="h-6 w-6"/> :                
                <MoonIcon color= 'white' className="h-6 w-6"/>         
            }
        </button>
    )
}

export default BTNTheme