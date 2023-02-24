import { Novedades } from "../../../types"
import { obsType } from "../../../types"

import MultiTextArea from "../../MultiTextArea"
import { zeroNumber } from "../../../utils/utils"

interface Props {
    item: Novedades
    dataObs: obsType[]
    setDataObs: React.Dispatch<React.SetStateAction<obsType[]>>
}

const NovItemBody = ({ item, dataObs, setDataObs }: Props)=> {
  const { id, unidad, clave, descripcion } = item
  return(
      <div className="flex flex-col gap-y-5	justify-between">
          <p className="dark:text-darkTextSecond">
              Unidad - { zeroNumber(Number(unidad)) }: Clave { clave }{descripcion?.length !== 0 && ` - ${ descripcion }`}
          </p>
          <div className="w-2/4"> 
            <MultiTextArea
              disabled={false}
              itemID={ id } 
              textSate={dataObs}
              changeTextState={setDataObs}
              label="Observaciones"
              color="green"
              maxLen={500}
            />
          </div>
    </div> 
  )
}

export default NovItemBody