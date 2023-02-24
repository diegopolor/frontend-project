import { 
    Dialog, 
    DialogBody, 
    DialogHeader
} from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../../../services/userAuth'

import HeaderUserModal from './HeaderUserModal'
import BodyUserModal from './BodyUserModal'

interface Props {
    open?: boolean,
    handlerOpen: ()=> void
}

interface User {
    id: number
    usuario: string
    rol: string
    token: string
    clave: string
}

export const ModalUsers = ({ open=false,  handlerOpen }: Props)=> {
    const [users, setUsers] = useState<User[] | null>(null)

    const handlerGetUsers = async()=> {
        getAllUsers()
        .then(({ json })=> {
            setUsers(json)
        })
    }

    useEffect(()=> {
        setTimeout(()=> handlerGetUsers(), 3000)
    }, [])

    return(
        <Dialog className='text-blue-gray-500 dark:bg-darkSecondBg' size='xxl' open={open} handler={handlerOpen}>
            <DialogHeader>
                <HeaderUserModal handlerOpen={handlerOpen}/>
            </DialogHeader>
            <hr/> 
            <DialogBody>
                <BodyUserModal users={users} handlerGetUsers={handlerGetUsers}   />  
            </DialogBody>
        </Dialog>
    )
}