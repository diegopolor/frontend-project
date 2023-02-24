import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    children: ReactNode
}

const RouteProtected = ({ children }: Props)=> { 
    const navigate = useNavigate()
    
    useEffect(()=> {
        const session = localStorage?.session !== undefined ? localStorage.session : 'false'
        console.log(session)
        const tokenSession = localStorage?.sessionID !== undefined
        console.log(tokenSession);
        console.log(session !== 'true' && tokenSession);
        
        if(session !== 'true' && !tokenSession) navigate('/login') 
    }, [])// eslint-disable-line
   
    return(
        <>
            {children}
        </>
    )
}

export default RouteProtected