import { Textarea } from "@material-tailwind/react";
import { colors } from '@material-tailwind/react/types/generic'

interface multiTextArea  {
    id: number,
    obs: string,
    len: number
}

interface Props { 
    label: string, 
    itemID: number, 
    color?: colors | undefined, 
    textSate: multiTextArea[]
    changeTextState: React.Dispatch<React.SetStateAction<any>>,
    maxLen: number
    disabled: boolean
}

const MultiTextArea = ({label, itemID, color, textSate, changeTextState, maxLen, disabled}: Props)=> {
    //Actualiza el estado del componente de texto
    const handlerTextObs = (
        e: React.ChangeEvent<HTMLTextAreaElement>, 
        id: number
        ) => {
        const obs = e.target.value
        const len = e.target.value.length 
        const obj: multiTextArea = {
          id,
          obs,
          len
        }
        //busca el item del texto por el id y devuelve un booleano para comprobar si existe
        const existe = textSate.find((item) => item?.id === id ) !== undefined
        //si existe recorre el array de textos y le actualiza el valor del objeto si este coincide con el id
        if(existe)changeTextState(
         textSate.map(item => item.id === id ? {...item, ...obj } : item)
         )
         //si no existe agrega el nuevo objeto al array     
        else changeTextState([...textSate, obj ]) 
    }
    //Devulve el valor de los caractes 'Carácteres 0/1000'
    const getCantCharObs = (id: number)=>{
        const state = textSate.find(item => item.id === id)
        const len = !state?.len ? 0 : state?.len
        return len
      } 
    return(
        <>
            <Textarea 
                disabled={disabled}
                className="dark:text-white w-full"
                onChange={(e) =>  handlerTextObs(e, itemID)}
                label={label}
                color={getCantCharObs(itemID) > maxLen ? 'red' : color}
            />
            <p className="dark:text-darkTextSecond"> {`Carácteres: ${getCantCharObs(itemID)}/${maxLen}`}</p>
        </>
        
    )
}

export default MultiTextArea;