import { Button } from "@material-tailwind/react"
import { useEffect, useState } from "react";
import { Novedades } from "../../../types";
import socket from "../../../services/socket";
import { doneNovedad } from "../../../services/novedades";
import Modal from "../../Modal/ModalAlert";
import NovItemHeader from "./NovItemHeader";
import NovItemBody from "./NovItemBody";

interface props {
    dataObject: Novedades[] | undefined,
    updateDataObject : React.Dispatch<React.SetStateAction<Novedades[] | undefined>>
}

interface obsType  {
  id: number,
  obs: string,
  len: number
}

const NovItems = ({ dataObject, updateDataObject }: props) =>{

  const [idNovedad, setIdNovedad] = useState<number>(0)
  const [openModal, setOpenModal ] = useState<boolean>(false)
  const [textObs , setTextObs] = useState<string>('')
  const [dataObs , setDataObs] = useState<obsType[]>([])
  const handlerOpenModal = () => setOpenModal(!openModal)

  //abre la ventana modal y le pasa el ID
  const openModalWithID = (id: number)=>{
    //filtra el texto de la observación en los datos de la obs
      const obsObject = dataObs?.filter((item)=> item.id === id )[0]
      const obs = obsObject?.obs !== undefined ? obsObject.obs : ''
      setTextObs(obs)
      handlerOpenModal()
      setIdNovedad(id)
  }

  // Envia una petición para acutalizar el id del la novedad
  const deleteItem = async(id: number )=> { 
    const { success } =  await doneNovedad(id, textObs)
    if(success){
      socket.emit('doneNovedad', { id })
      handlerOpenModal()
    } 
    else alert('No se ha podido dar proceso')
  }

  // Escucha el evento de doneNovedad del socket y elimina el id recibido del estado del componente
  useEffect(()=> {
    socket.on('doneNovedad', (id_del: Novedades) => {
      updateDataObject((prevent: Novedades[]| undefined)=> 
      prevent?.filter((item) => item.id !== id_del.id )
    ) 
    })
  }, []) // eslint-disable-line

  return (
  <div className="">
    {dataObject && dataObject.map && dataObject?.map(( item ) => (
        <div className="bg-white dark:text-gray-300 dark:bg-darkSecondBg m-3 p-5 rounded" key={item.id}>
          <NovItemHeader  item={item}/>
          <NovItemBody 
            item={item} 
            dataObs={dataObs} 
            setDataObs={setDataObs} 
          />   
          <Button 
            key = {item.id} 
            size="md" 
            color="green"
            variant="gradient"
            onClick={()=> openModalWithID(item.id)}
            >
              Ok
          </Button>
        </div>
    )) }
     <Modal 
          open={openModal}
          handlerOpen={handlerOpenModal}
          title = 'Terminar gestión'
          body='¿Está seguro que dar por terminada la gestión de esta novedad?'
          btnRightTxt='Cancel'
          btnLeftTxt="Ok"
          ok={()=> deleteItem(idNovedad)}
        />
  </div> 
)}          

export default NovItems;