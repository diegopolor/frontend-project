import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    children: ReactNode
}

const RouteProtected = ({ children }: Props)=> { 
    const navigate = useNavigate()
    
    useEffect(()=> {
        const session = localStorage?.session !== undefined ? localStorage.session : 'false'
        const tokenSession = localStorage?.sessionID !== undefined       
        if(session !== 'true' && !tokenSession) navigate('/login') 
    }, [])// eslint-disable-line
   
    const isAuthenticated = localStorage.session === 'true' || localStorage.sessionID !== undefined

    return isAuthenticated ? <>{children}</> : null
}

export default RouteProtected