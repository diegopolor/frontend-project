import { Novedades } from "../../../types"

interface Props {
    item: Novedades
}

const NovItemHeader = ({ item }: Props)=> {
    const getFecha = (texto : string) => texto.split('T')[0]
    const getHora = (texto: string) => texto.split('T')[1].split('.')[0]
    return(
        <div>
            <h2 className="font-bold">{getFecha(item.fecha)} {getHora(item.hora)}</h2>
            <hr className="my-4"/>
        </div>
    )
}

export default NovItemHeader