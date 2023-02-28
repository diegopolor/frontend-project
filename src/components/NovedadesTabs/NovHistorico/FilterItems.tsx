import { useState } from 'react'
import { Input, Select, Option, Button } from "@material-tailwind/react"
import configApp from "../../../config/config"
import { Novedades } from "../../../types"
import { getNovFilterHistorico, getNovHistorico} from '../../../services/novedades'
import { zeroNumber } from '../../../utils/utils'

interface Props {
    setItems: React.Dispatch<React.SetStateAction<Novedades[] | undefined>>
}


interface dataFilter {
    [key: string]: any
    fechaInicial: string | undefined
    fechaFinal: string | undefined
    unidad : string | undefined
    destinatario: string | undefined
}

const FilterItems = ({ setItems }: Props)=> {
    const { cantUnidades, roles } =  configApp

    const [ fechaInicial, setFechaInicial ] = useState<string | undefined>(undefined)
    const [ fechaFinal, setFechaFinal] = useState<string  | undefined>(undefined)
    const [ unidad , setUnidad] = useState<string | undefined | undefined>(undefined)
    const [ destinatario , setDestinatario] = useState<string | undefined>(undefined)

    
    const isAdmin = localStorage.getItem('room') === 'Admin'

    const dateValidate = (fInicial: string | undefined, fFinal: string | undefined)=>{
        if(fInicial && !fFinal) throw Error('No se ha seleccionado la fecha final')
        else if(!fInicial && fFinal) throw Error('No se ha seleccionado la fecha inicial')
    }

    const handlerButton = async()=> {
        let dataSend  = { }
        const dataFilter: dataFilter = {
            fechaInicial,
            fechaFinal,
            unidad,
            destinatario : !isAdmin ? localStorage.room : destinatario
        }

        try{
            dateValidate(fechaInicial, fechaFinal)
            const keys = Object.keys(dataFilter)
            keys.map(item => {
                keys.map(itemKeys => {
                    //compara si la key recorrida es igual a la key del array
                    if(item === itemKeys){
                        //crea un objeto con la key recorrida y el valor de la misma y lo asigna al object data
                        const object = JSON.parse(`{ "${item}": "${dataFilter[item]}" }`)
                        dataFilter[item] && Object.assign(dataSend, object )
                    }
                    return 0         
                })
                return 0
            }) 
            
            const validFilter = isAdmin ? Object.keys(dataSend).length > 0: Object.keys(dataSend).length > 1
            if(validFilter){
                const { success, data } = await getNovFilterHistorico(dataSend)
                if(success) setItems(data)
                else alert('No se pudo mostrar la inforamción')
            }else alert('No se han seleccionado elementos para filtrar')   
        }catch(e){alert(e)} 
    }

    const handlerLimpiar = ()=>{ 
        setFechaInicial('')
        setFechaFinal('')
        setUnidad(undefined)
        setDestinatario(undefined)

        getNovHistorico().then(({data})=> {
            setItems(data)
        })
    }

    //devuelve array con la cantidad de unidades [1, 2, 3, 4, 5...]
    const unidades = Array.from({length: cantUnidades}, (e, i)=> i+1)

    return(
        <div className="w-full md:w-1/2  flex flex-col gap-y-5  md:flex-row md:gap-x-5">
           
            <div className="flex flex-col gap-y-3">
                <Input 
                    value={fechaInicial}
                    className="cursor-pointer dark:text-white" 
                    color="green" 
                    label="Fecha Inicial" 
                    type='date'
                    onChange={(e)=>setFechaInicial(e.target.value)}
                />
                <Input 
                    value={fechaFinal}
                    className="cursor-pointer dark:text-white"
                    color="green"
                    label="Fecha Final" 
                    type='date'
                    onChange={(e)=> setFechaFinal(e.target.value)}
                />
            </div>  
            {isAdmin && 
                <Select 
                    value={destinatario}
                    className="dark:text-white" 
                    color='green' 
                    label="Destinatario"
                    onChange={(e)=> setDestinatario(e)}
                >
                    {roles.filter(rol => rol !== "Admin").map(
                        ( rol => ( 
                        <Option key={rol} value={rol}>{rol}</Option>))
                    )}
                </Select>
            }    
            <Select 
                value={unidad}
                className="dark:text-white" 
                color="green" 
                label="Unidades"
                onChange={(e)=> setUnidad(e)}
            > 
                {unidades.map((num, index) =>(
                    <Option key={index * 234} value={String(num)}>UNIDAD - {zeroNumber(num)}</Option>
                ))}    
            </Select>
            <Button onClick={handlerButton} className="min-w-fit h-1/2" color="green">Filtrar</Button> 
            <Button onClick={handlerLimpiar} className="min-w-fit h-1/2" color="green">Limpiar</Button>          
        </div>   
    )
}

export default FilterItems