import configApp from "../config/config"
const { uriApi } = configApp
const BaseURI = `${uriApi}/api/v1`


export const requestApi = async(url: string, method: string, body?: object) =>{
    const sessionID =  localStorage.getItem ('sessionID') || ' '
    const username =  localStorage.getItem('username') || ' '
    const rol =  localStorage.getItem('room') || ' '
    let fetchParams = { 
        method,
        headers : { 
            rol,
            username,   
            'Content-Type': 'application/json',
            'Authorization' : `Token ${sessionID}`
        }, 
        body: method !== 'GET' ? JSON.stringify(body): undefined
    }

    const result = await fetch (`${BaseURI}${url}`, fetchParams) 
    return result
}