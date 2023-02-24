import { Novedades } from "../../types";
import configApp from "../../config/config";
import NovItems from "./NovItems";
import NovHistorico from "./NovHistorico";
import {
    TabsBody,
    TabPanel
  } from "@material-tailwind/react";

interface Props {
    prioridad1: Novedades[] | undefined
    prioridad2: Novedades[] | undefined
    historico: Novedades[] | undefined
    setPrioridad1: React.Dispatch<React.SetStateAction<Novedades[] | undefined>>
    setPrioridad2: React.Dispatch<React.SetStateAction<Novedades[] | undefined>>
    setHistorico: React.Dispatch<React.SetStateAction<Novedades[] | undefined>>
}

const NovTabsBody = ({prioridad1, prioridad2, setPrioridad1, setPrioridad2, historico, setHistorico}: Props)=> {
    const { novHeadersName} = configApp
    const novStates = [
        {
            headerName : novHeadersName[0],
            prioridad: prioridad1,
            handlerPrioridad: setPrioridad1
        },
        {
            headerName : novHeadersName[1],
            prioridad: prioridad2,
            handlerPrioridad: setPrioridad2
        }
    ]

    return(
        <div className=' bg-gray-200 dark:bg-darkPrimaryBg h-screen overflow-y-scroll overscroll-y-auto'>
            <TabsBody 
              animate={{
                  mount: { y: 0 },
                  unmount: { y: 250 },
        }}>
            {novStates.map(({ headerName, prioridad, handlerPrioridad }, index) => (
                <TabPanel key={index} value={headerName}>
                    <NovItems  
                        dataObject={prioridad} 
                        updateDataObject={handlerPrioridad}
                    />
                </TabPanel>
            ))}
                <TabPanel key={3} value={novHeadersName[2]}>
                    <NovHistorico items = {historico} setItems = {setHistorico} />
                </TabPanel>
            </TabsBody>
        </div>
    )
}

export default NovTabsBody