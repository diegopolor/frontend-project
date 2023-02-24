import { Novedades } from "../../../types"
import ItemsHistorico from "./ItemsHistorico"
import FilterItems from "./FilterItems"

interface Props {
    items: Novedades[] | undefined
    setItems: React.Dispatch<React.SetStateAction<Novedades[] | undefined>>
}

const NovHistorico = ({ items, setItems }: Props)=> {
    return(
        <div className="p-5">
            <FilterItems setItems={setItems} />
            <ItemsHistorico items={items} />
        </div>
    )
}             

export default NovHistorico