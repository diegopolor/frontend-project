import FromLogin from "./FromLogin"
const Login = ( )=> {
    document.title = 'Login'
    return(
        <div className='        
            dark:bg-gradient-to-r
            dark:from-darkPrimaryBg 
            dark:to-darkSecondBg 
            bg-gray-300
            h-screen
            content
            flex
            flex-row
            justify-center
            items-center 
        '> {/* Contenedor general */}
            <FromLogin />
        </div>

    )
}


export default Login