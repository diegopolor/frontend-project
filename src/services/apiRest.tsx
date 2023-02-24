import configApp from "../config/config"
const { uriApi } = configApp
const BaseURI = `${uriApi}/api/v1`


export const requestApi = async(url: string, method: string, body?: object) =>{
    const sessionID = localStorage.sessionID || ' '
    const username = localStorage.username || ' '
    const rol = localStorage.room || ' '
    let params = { }
    let fetchParams = {
        method,
        headers : { 
            rol,
            username,   
            'Content-Type': 'application/json',
            'Authorization' : `Token ${sessionID}`
        }
    }

    if(method !== 'GET'){
        params = {
            ...fetchParams, 
            body: JSON.stringify(body)
        }
    }
    const result = await fetch(BaseURI + url, params) 
    return result
}