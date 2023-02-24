import { User } from "../../../types"
interface UserArray extends User {
    [key: string]: any
}

interface Props {
    title: string
    items: UserArray[] | null,
    itemPrint: string
    clickAction: (item: User)=> void
    className?: string
}

const ItemsScroll = ({ items, itemPrint, clickAction, title, className='w-full h-1/2 bg-black'}: Props)=> {
    return(
    <div className={className}>
        <h2 className='font-semibold'>{title}</h2>
        <hr className="mt-3" />
        <div className='overflow-y-scroll mt-5 h-1/2'>
            {items && items.map && items?.map((item , index)=> (
                <h3  
                    onClick={()=> clickAction(item)} 
                    key={index} 
                    className='
                        block w-full 
                        rounded-md 
                        text-start
                        leading-tight
                        cursor-pointer
                        select-none
                        transition-all
                        hover:bg-blue-gray-50
                        hover:bg-opacity-80
                        focus:bg-blue-gray-50
                        focus:bg-opacity-80
                        active:bg-blue-gray-50
                        active:bg-opacity-80
                        hover:text-blue-gray-900
                        focus:text-blue-gray-900
                        active:text-blue-gray-900
                        p-2'
                >
                    {item[itemPrint]}
                </h3>
            )) }          
        </div>   
    </div>
    )
}

export default ItemsScroll