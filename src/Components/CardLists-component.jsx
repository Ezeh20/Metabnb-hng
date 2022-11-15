import { cards } from "../utils/Cards-Landing/cards-landing"
import Card from "./Cards-component"
import { useRef } from "react"


const CardList = () => {
    const triggerRef= useRef(null)
    return (
        <div className=" cardlist">
            {
                cards.map(card => { return (<Card key={card.id} cards={card} />) })
            }
            <div  ref={triggerRef} className={clsx('trigger', {})}></div>
        </div>
    )
}
export default CardList