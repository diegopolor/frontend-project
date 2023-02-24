import { requestApi } from "./apiRest";
import { User } from "../types";

export const loginRequest = async (username: string, password: string)=> {
    const credentials = {
            usuario: username,
            clave: password
    }
    const response = await requestApi('/auth/login', 'POST', credentials)
    const responseJson = await response.json()
    return { status: response.status,  json : responseJson}
}

export const getAllUsers = async () => {
    const response = await requestApi('/auth/list', 'POST')
    const responseJSON = await response.json()
    return { status: response.status,  json : responseJSON}
}

export const saveUser = async({ usuario, rol, clave }: User)=> {
    const dataSave = {
        usuario,
        rol, 
        clave
    }
    const response = await requestApi('/auth/create', 'POST', dataSave)
    const responseJSON = await response.json()
    return { status: response.status,  json : responseJSON}
}

export const updateUser = async({id, usuario, rol, clave }: User)=> {
    const dataSave = {
        id,
        usuario,
        rol, 
        clave
    }
    const response = await requestApi('/auth/update', 'POST', dataSave)
    const responseJSON = await response.json()
    return { status: response.status,  json : responseJSON}
}

export const deleteUser = async(id: number | undefined)=> {
    const response = await requestApi('/auth/delete', 'POST', { id })
    const responseJSON = await response.json()
    return { status: response.status,  json : responseJSON}
}

