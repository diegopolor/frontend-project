import { Novedades } from "../../../types"
import { zeroNumber } from "../../../utils/utils"
import { Textarea } from "@material-tailwind/react"

interface Props{
    items: Novedades[] | undefined
}

const ItemsHistorico = ({ items }: Props)=> {

    const getFecha = (texto : string) => texto.split('T')[0]
    const getHora = (texto: string) => texto.split('T')[1].split('.')[0]

    return(
        <div className="mt-10 flex flex-col gap-y-1">
            {items && items.map && items.map(({ fecha, hora, unidad, clave, descripcion, observacion, fecha_gestion, hora_gestion }, index)=> (
                <div key={index * 2342} className="bg-white flex flex-col gap-y-3 dark:text-gray-300 dark:bg-darkSecondBg  my-3 p-2 md:m-3 p-3 md:p-5 sm:p-4 rounded">
                    <div className="flex flex-row justify-between">
                        <h1 className="font-semibold">Novedad: {getFecha(fecha)} {getHora(hora)}</h1> 
                        <h1 className="font-semibold">Gestión: {getFecha(String(fecha_gestion))} {getHora(String(hora_gestion))}</h1>            
                    </div> 
                    <hr />
                    <p>Unidad - {zeroNumber(Number(unidad))}:  Clave - { clave }</p>
                    {descripcion !== '' && <p> Descripción : {descripcion} </p>}
                    {observacion !== '' &&
                        <div>
                            <h2>Observaciones:</h2>
                            <Textarea 
                                disabled
                                className="w-1/2 dark:bg-darkBlackTrasbBg dark:text-white" 
                                value={observacion}
                             />
                        </div>
                    }
                </div>
                
            )) }
        </div>
    )
}

export default ItemsHistorico