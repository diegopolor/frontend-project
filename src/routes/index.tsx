import { Routes, Route, HashRouter  } from 'react-router-dom'
import RouteProtected from './RouteProcteted'
import Login from '../pages/login'
import NovedadesOperacionales from '../pages/Novedades'

const APPRoutes = ()=> (
    <HashRouter >
        <Routes>
            <Route 
               path='/'
               element={
                <RouteProtected>
                    <NovedadesOperacionales />
                </RouteProtected>   
            }
            /> 
            <Route 
               path='login'
               element={<Login />}
            /> 
            <Route 
               path='*'
               element={<h1>Ruta no existente</h1>}
            /> 
        </Routes>
    </HashRouter >
)

export default APPRoutes