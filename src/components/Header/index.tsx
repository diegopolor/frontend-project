import { useState } from "react"
import { ModalUsers } from "../Modal/ModalUsers"
import MenuNavBar from "./MenuOptions"
import BTNTheme from "../BTNTheme"

interface Props{
    title: string
}

const Header = ({ title }: Props) => {
    const username  = localStorage.username
    const [open, setOpen] = useState<boolean>(false)
    const handlerOpen = ()=> setOpen(!open)

    return(
        <div className="w-full py-2 bg-primaryColor dark:bg-darkPrimaryBg ">
            <div style={{ width: '97%'  }} className="m-auto flex flex-row justify-between">
                <h1 className="text-white font-semibold">{title}</h1>
                <div className="flex flex-row gap-x-2">
                    <h2 className="font-semibold text-white" >{username}</h2>
                    <MenuNavBar handlerOpenModal={handlerOpen} />
                    <BTNTheme />
                </div>     
            </div>
            <ModalUsers open={open} handlerOpen={handlerOpen}/>
        </div>
    )
}



export default Header