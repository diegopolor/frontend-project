const initializationTheme = () => {
  const theme = localStorage.theme
  const asigTheme = theme === undefined ? 'light' : theme
  document.documentElement.classList.add(asigTheme)
  localStorage.setItem('theme', asigTheme)
}

const changeTheme = ()=> {
    const theme = localStorage.theme
    const changeTheme = theme === 'light' ? 'dark': 'light'
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(changeTheme)
    localStorage.setItem('theme', changeTheme)     
}

export {
    initializationTheme,
    changeTheme
}