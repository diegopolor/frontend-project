import {
    Input,
    Select,
    Option,
} from '@material-tailwind/react'
import { useState } from 'react'
import { User } from '../../../types'
import SectionBTNUsersCrud from './SectionBTNUsersCrud'

interface Props {
    userSelected: User | undefined
    setUserSelected: React.Dispatch<React.SetStateAction<User | undefined>>
    id: number | undefined,
    handlerGetUsers: ()=> void
    user: string | undefined
    setUser: React.Dispatch<React.SetStateAction<string | undefined>>
    rol: string | undefined
    setRol: React.Dispatch<React.SetStateAction<string | undefined>>
}

const FormUser = ({ userSelected, setUserSelected, id, handlerGetUsers, rol, setRol, user, setUser  }: Props)=> {

    const [ pass, setPass ] = useState<string | undefined>(undefined)

    const handlerUser = (e: React.ChangeEvent<HTMLInputElement>)=> setUser(e.target.value)
    const handlerPass = (e: React.ChangeEvent<HTMLInputElement>)=> setPass(e.target.value)
    const handlerRol = (valor: string | undefined)=> setRol(valor || userSelected?.rol)

    return(
        <form className='mt-5 w-full flex flex-row gap-x-20'>
            <div className='mt-5 w-1/3 flex flex-col gap-y-10'>
                <Input 
                    onChange={(e)=> handlerUser(e)}
                    variant='static'
                    color='green' 
                    label='Usuario' 
                    className='bg-transparent border-white border-1 dark:text-white' 
                    type="text"  
                    value={user || userSelected?.usuario || '' } 
                />    
                <Select 
                    color='green' 
                    className='dark:text-white' 
                    value={userSelected?.rol || rol } 
                    variant="static" 
                    label="Rol"
                    onChange={(valor)=> handlerRol(valor)}
                >
                    <Option value='CMO'>CMO</Option>
                    <Option value='Mantenimiento'>Mantenimiento</Option>
                    <Option value='Admin'>Admin</Option>
                </Select>
            </div>
            <div className='mt-5 w-1/3'>
           
                <Input
                    type='password'
                    onChange={handlerPass}
                    variant='static'
                    minLength={8}
                    color='green' 
                    label='Contraseña' 
                    className='bg-transparent border-white border-1 dark:text-white'  
                    value={pass || ''}
                /> 
                <SectionBTNUsersCrud
                    user={user}
                    setUser={setUser}
                    userSelected={userSelected}
                    setUserSelected={setUserSelected}
                    pass={pass}
                    setPass={setPass}
                    rol={rol}
                    setRol={setRol}
                    id={id}
                    handlerGetUsers={handlerGetUsers}
                />
            </div>
        </form>  
    )
}

export default FormUser