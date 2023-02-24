import { 
    Dialog, 
    DialogBody, 
    DialogHeader, 
    DialogFooter, 
    Button
} from "@material-tailwind/react";

interface props {
    open: boolean,
    handlerOpen: ()=> void,
    title: string,
    body: string,
    btnRightTxt: string,
    btnLeftTxt: string,
    ok: ()=> void
}

const Modal = ({open, handlerOpen, title, body, btnRightTxt, btnLeftTxt, ok}: props)=> (
    <Dialog className="dark:bg-darkSecondBg" open={open} handler={handlerOpen}>
        <DialogHeader className="dark:text-white w-full"> <h2 className="text-center w-full">{title}</h2> </DialogHeader><hr className="w-4/5 bg-black m-auto"/>
        <DialogBody className="dark:text-white my-3 text-center">{body}</DialogBody><hr className="w-4/5 bg-black m-auto"/>
        <DialogFooter>
            <Button className="bg-green-400 shadow-green-400 m-1" onClick={handlerOpen}>
                <span>{btnRightTxt}</span>
            </Button>
            <Button  className="bg-green-400 shadow-green-400 m-1" onClick={ok}>
                <span>{btnLeftTxt}</span>
            </Button>
        </DialogFooter>
    </Dialog>
)

export default Modal