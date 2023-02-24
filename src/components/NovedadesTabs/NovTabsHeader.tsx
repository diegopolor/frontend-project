import { headersCount, Novedades } from "../../types"
import configApp from "../../config/config"
import { 
    Chip,
    TabsHeader,
    Tab
} from '@material-tailwind/react'

import '../../index.css'

interface Props {
    prioridad1: Novedades[] | undefined
    prioridad2: Novedades[] | undefined,
    historico: Novedades[] | undefined
}

const NovTabsHeader = ({prioridad1, prioridad2, historico }: Props)=> {
  const { novHeadersName } = configApp
  const headersCount : headersCount= {
    Importante: prioridad1?.length,
    Rutinario: prioridad2?.length,
    Historial: historico?.length,
  }
 
  return(
      <TabsHeader className='dark:bg-darkSecondBg' >
          {novHeadersName.map((headerName: string) =>(
            <Tab className='dark:text-white' value={headerName} key={headerName} >
              {headerName}   
              <Chip 
                className='ml-2 px-2 fonts-roboto h-1/2'
                variant='gradient' 
                value={
                  headersCount[headerName] !== undefined ? 
                    headersCount[headerName]: 0          
                } 
                color = "green" 
              />
            </Tab>
          ))}
    </TabsHeader>
  )
}

export default NovTabsHeader