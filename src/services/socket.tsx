import io from 'socket.io-client'

import configApp from '../config/config'

const { uriApi } = configApp
const room = localStorage.room || 'default'


const socket = io(
    uriApi,
    { 
        transports : ['websocket'],
        query :{
             nameRoom : room
        }
    }
)

export default socket