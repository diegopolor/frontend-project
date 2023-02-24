import { Button } from "@material-tailwind/react"
import { CancelIcon } from "../../Icons"

interface Props {
    handlerOpen: ()=> void
}

const HeaderUserModal = ({ handlerOpen }: Props)=> {
    return (
        <div className='w-full flex flex-row justify-between'>
            <h1 className='dark:text-white'>Gestión de usuarios</h1>
            <Button className='p-2' color='green'onClick={handlerOpen}>
                <CancelIcon className='w-4 h-4' color='white' />
            </Button>
    </div> 
    )
}

export default HeaderUserModal