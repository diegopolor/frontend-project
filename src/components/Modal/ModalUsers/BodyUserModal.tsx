import FormUser from "./FormUser"
import { User } from "../../../types"
import { useState } from 'react'
import ItemsScroll from "./ItemsScroll"

interface Props {
    users: User[] | null,
    handlerGetUsers: ()=> void
}

const BodyUserModal = ({ users, handlerGetUsers }: Props)=> {
    const [userSelected, setUserSelected ] = useState<User | undefined>(undefined)
    const [rol, setRol] = useState<string | undefined>(undefined)
    const [ user, setUser ] = useState<string | undefined>(undefined)

    const handlerUserSelect = (item: User)=> {
        const { usuario} = item
        const selected = users?.filter(item => item.usuario === usuario)[0]
        setUserSelected(selected)
        setUser(selected?.usuario)
        setRol(selected?.rol)
    }
    return(
        <div className='flex flex-row text-black dark:text-white min-h-[70vh] max-h-[70vh]'>
            <div className='flex flex-col h-[80vh] gap-y-2 w-1/6 text-center pt-3'>
                <ItemsScroll 
                    className="w-full h-3/4"
                    title="Usuarios" 
                    items={users} 
                    itemPrint ='usuario' 
                    clickAction={handlerUserSelect} 
                />
            </div>          
            <div className='mx-10 w-full px-10 py-3'>
                <h2 className='font-semibold'>Datos de usuario</h2>
                <FormUser 
                    handlerGetUsers={handlerGetUsers} 
                    userSelected={userSelected} 
                    setUserSelected={setUserSelected} 
                    id={userSelected?.id || 0}
                    user = { user }
                    setUser= { setUser}
                    rol={rol}
                    setRol={setRol}
                />
            </div>
        </div>
    )
}

export default BodyUserModal