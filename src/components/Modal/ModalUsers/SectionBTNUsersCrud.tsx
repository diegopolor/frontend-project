import { User } from "../../../types"
import { Button } from "@material-tailwind/react"
import { saveUser, updateUser, deleteUser } from "../../../services/userAuth"

interface Props {
    user: string | undefined
    setUser:React.Dispatch<React.SetStateAction<string | undefined>>
    pass: string | undefined
    setPass:React.Dispatch<React.SetStateAction<string | undefined>>
    userSelected: User | undefined
    setUserSelected:React.Dispatch<React.SetStateAction<User | undefined>>
    rol: string | undefined
    setRol: React.Dispatch<React.SetStateAction<string | undefined>>
    id: number | undefined,
    handlerGetUsers: ()=> void
}

const SectionBTNUsersCrud = ({ user, setUser, userSelected, setUserSelected, pass, setPass, rol, setRol, id, handlerGetUsers}: Props) => {

    const UserRestore = ()=> {
        handlerGetUsers()
        handlerClear()
    }

    const handlerSaveUser= async ()=> {
        const saveData = {
            id: 0,
            token: ' ',
            usuario: user,
            clave: pass,
            rol
        }
        if(id === 0){
            const response = await saveUser(saveData)
            if(response.status === 200){
                UserRestore()
                alert('Usuario añadido satisfactoriamente!')
            }else {
                alert('No se ha podido añadir el usuario, verifique la información')
            }
        }else alert('El usuario que desea añadir ya existe')
    }

    const handlerUpdateUser = async()=> {
        const updateData = {
            id,
            token: ' ',
            usuario: user,
            clave: pass,
            rol
        }

        if(id !== 0){
            const response = await updateUser(updateData)
            if(response.status === 200){
                UserRestore()
                alert('Usuario actualizado satisfactoriamente!')
            }else alert('No se ha podido actualizar el usuario, verifique la información')
        }else alert('No hay usuario para actualizar')
    }

    const handlerDeleteUser =async ()=> {  
        const confimString = '¿Está seguro/a que desea eliminar este usuario?'   
        const isDelete = id !== 0 ? window.confirm(confimString) : false 

        if(isDelete){
            const response = await deleteUser(id)
            if(response.status === 200){
                handlerGetUsers()
                handlerClear()
                alert('Se ha Eliminado el usuario de forma satisfactoria')
            }else alert('No se ha podido eliminar el usuario')
        }          
    }

    const handlerClear = () => {
        setUserSelected(undefined)
        setUser(undefined)
        setPass(undefined)
        setRol(undefined)
    }
    return(
        <div>
            <div className='w-full mt-10 flex flex-row gap-x-5'>
                <Button onClick={handlerSaveUser} size='sm' className='h-10' color='green'>Guardar</Button>
                <Button onClick={handlerUpdateUser} size='sm' className='h-10' color='green'>Actualizar</Button>
                <Button onClick={handlerDeleteUser} size='sm' className='h-10' color='green'>Eliminar</Button>
            </div>
            <div className='w-full mt-10 flex flex-row gap-x-5'>
                <Button onClick={handlerClear} size='sm' className='h-10' color='green'>Limpiar</Button>
            </div>
    </div>
    )
}

export default SectionBTNUsersCrud