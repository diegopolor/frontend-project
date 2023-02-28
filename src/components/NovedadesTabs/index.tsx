import '../../index.css'
import { useEffect, useState } from 'react'
import socket from '../../services/socket'
import { getNovPerPrioridad, getNovHistorico } from '../../services/novedades'
import { Novedades } from '../../types'
import { Tabs } from "@material-tailwind/react"
import NovTabsHeader from './NovTabsHeader'
import NovTabsBody from './NovTabsBody'
import configApp from '../../config/config'

function NovedadesTabs() {
  const { novHeadersName } = configApp 
  const [prioridad1, setPrioridad1] = useState<Novedades[] | undefined>(undefined)
  const [prioridad2, setPrioridad2] = useState<Novedades[] | undefined>(undefined)
  const [historico, setHistorico] = useState<Novedades[] | undefined>(undefined)

  // realiza una peticion filtrandola por numero de prioridad y se asigna el valor dependiendo del numero de prioridad
  const handlerGetNovedad = (prioridad: number) => {
    const stateHandler = prioridad === 1 ? setPrioridad1 : setPrioridad2;
    
    getNovPerPrioridad(prioridad)
    .then(({ data }) => {
      stateHandler(data)
    }).catch(()=> console.error('error'))
  }

  useEffect(()=> {
    handlerGetNovedad(1)
    handlerGetNovedad(2)
    getNovHistorico().then(({ data, success })=> {  
      setHistorico(data)
      !success && 
        alert('Ha ocurrido un error en la petición, cierra sesión y vuelva ingresar para solucionarlo.') 
     })
    
    socket.on('novedades', ()=>{ 
        handlerGetNovedad(1)
        handlerGetNovedad(2)
    })
    socket.on('doneNovedad', ()=>{
      getNovHistorico().then(({ data })=> {
        setHistorico(data)
      })
    })
  }, 
  []) // eslint-disable-line

  return (
    <div className='w-full '>
      <Tabs value = {novHeadersName[0]}>
        <NovTabsHeader 
          prioridad1={prioridad1} 
          prioridad2={prioridad2} 
          historico={historico}
        />
        <NovTabsBody 
          prioridad1={prioridad1} 
          prioridad2={prioridad2} 
          setPrioridad1={setPrioridad1} 
          setPrioridad2={setPrioridad2} 
          historico={historico}
          setHistorico={setHistorico}
        />
      </Tabs>     
    </div> 
  ) 
}

export default NovedadesTabs;
