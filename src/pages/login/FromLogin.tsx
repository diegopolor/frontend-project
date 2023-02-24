import  { useState } from  'react'
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../../services/userAuth';
import Modal from '../../components/Modal/ModalAlert';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Button,
  } from "@material-tailwind/react";
   
  export default function FromLogin() {
    const [username, setUsername] = useState<string>(' ')
    const [password, setPassword] = useState<string>(' ')
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>(' ')
    const navigate = useNavigate()

    const handlerOpenModal = () => setOpenModal(!openModal)

    const handlerUsername = (e :React.ChangeEvent<HTMLInputElement>)=> {
        setUsername(e.target.value)
    }
    const handlerPassword = (e :React.ChangeEvent<HTMLInputElement>)=> {
        setPassword(e.target.value)
    }

    const handlerLogin = async () => {
         const {status, json} = await loginRequest(username, password)
         if(status === 200){
            localStorage.setItem('username', username)
            localStorage.setItem('sessionID', json.token)
            localStorage.setItem('room', json.rol)
            localStorage.setItem('session', 'true')
            navigate('/')  
         }else {
            handlerOpenModal()
            setErrorMessage(json.error)
         }
    }
    return (
      <Card className="w-96 dark:bg-darkSecondBg ">
        <CardHeader
          className="bg-transparent shadow-0 shadow-none mb-4 grid h-28 place-items-center"
        >
          <img src="https://www.masivodeoccidente.com/wp-content/uploads/2016/04/MDO-logo-1.png" alt="" />
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input           
            className='dark:text-white'
            variant="standard"
            label="Email"
            size="lg"
            color="green"
				    onChange={handlerUsername}
            onKeyDown={(e)=> e.key === "Enter"&& handlerLogin()}
          />
          <Input          
            className='dark:text-white'
            variant="standard"
            label="Password"
            size="lg"
            color="green"
            type="password"
				    onChange={handlerPassword}
            onKeyDown={(e)=> e.key === "Enter"&& handlerLogin()}
          />
        </CardBody>
        <CardFooter className="pt-10">
        	<Button
				    onClick={handlerLogin}
		  		  color="green"
		  		  variant="gradient"
		  		  fullWidth
		 	    >
        		Iniciar Sesión
        	</Button>
        </CardFooter>
        <Modal 
            open={openModal}
            handlerOpen={handlerOpenModal}
            title = 'Error'
            body={errorMessage}
            btnRightTxt='Cerrar'
            btnLeftTxt="Ok"
            ok={handlerOpenModal}
        />
      </Card>
    );
  }