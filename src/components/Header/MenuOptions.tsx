import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem
} from "@material-tailwind/react"
import { useNavigate } from "react-router-dom"
import { ArrowDownIcon } from "../Icons"

interface Props {
    handlerOpenModal: ()=> void
}

const MenuNavBar = ({ handlerOpenModal }: Props)=> {
    const navigate = useNavigate()
    const rol = localStorage.room

    const handlerLogout = ()=> {
       localStorage.removeItem('sessionID')
       localStorage.removeItem('room')
       localStorage.removeItem('session')
       localStorage.removeItem('username')
       navigate('/login') 
    }
        return(
            <Menu > 
                <MenuHandler>
                    <button>
                        <ArrowDownIcon className="h-5 w-5" color='white' />
                    </button>     
                </MenuHandler>
                <MenuList className="dark:bg-darkPrimaryBg dark:border-white dark:border-none dark:text-white rounded-md">
                    { rol === 'Admin' && <MenuItem onClick={handlerOpenModal} className="p-2 rounded-sm" >Usuarios</MenuItem>}
                    <MenuItem onClick={handlerLogout} className="p-2">Cerrar sesión</MenuItem>
                </MenuList>
            </Menu>
    )
}

export default MenuNavBar