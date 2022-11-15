import { cards } from "../utils/Cards-Landing/cards-landing"
import Card from "./Cards-component"

const CardList = () => {
    return (
        <div className="  grid grid-cols-1 xl:grid-cols-4  xl:gap-x-[24px] place-content-center place-items-center gap-y-[40px] container-use">
            {
                cards.map(card => { return (<Card key={card.id} cards={card} />) })
            }
        </div>
    )
}
export default CardList