import Header from "../../components/Header"
import NovedadesTabs from "../../components/NovedadesTabs"

const NovedadesOperacionales = ()=>{
    document.title = 'Novedades Operacionales'
    return(
        <>
            <Header title="Gestión de novedades operacionales"/>
            <NovedadesTabs />
        </>
    )
}
export default NovedadesOperacionales