import { requestApi } from "./apiRest"

export const getNovPerPrioridad = async(prioridad: number)=>{
    const destinatario = String(localStorage.room)
    const result =  await requestApi('/novedades/prioridad', 'POST', { prioridad, destinatario })
    const resultJson = await result.json()
    if(result.status === 200){
        return {
            data : resultJson,
            success: true
        }
    }else return {
            succes: false,
            data: resultJson
    }
}

export const getNovHistorico = async()=> {
    const destinatario = String(localStorage.room)
    const result =  await requestApi('/novedades/historico', 'POST', { destinatario })
    const resultJson = await result.json()
    if(result.status === 200){
        return {
            data : resultJson,
            success: true
        }
    }else return {
            success: false,
            data: resultJson
    }
}


export const getNovFilterHistorico = async(body: object)=> {
    const result =  await requestApi('/novedades/historicoFilter', 'POST', body )
    const resultJson = await result.json()
    console.log(resultJson)
    console.log(result.status)
    if(result.status === 200){
        return {
            data : resultJson,
            success: true
        }
    }else return {
            succes: false,
            data: resultJson
    }
}

//realiza la consulta al end point para dar por culminada la novedad
//id: id de la novedad, observación: comentario agregado por quien gestiona la novedadd
export const doneNovedad = async (id: number, observacion: string)=>{
    const result =  await requestApi(`/novedades/done/${id}`, 'POST', { observacion })
    const resultJson = await result.json()
    if(result.status === 200){
        return {
            data : resultJson,
            success: true
        }
    }else return {
            succes: false,
            data: resultJson
        }
}