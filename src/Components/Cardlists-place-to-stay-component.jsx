import { Cards } from "../utils/Cards-place-to-stay/Cards"
import Card from "./Cards-place-to-stay-component"


const CardList = () => {
    return (
        <div className=" cardlist">
            {
                Cards.map(cards=>{return <Card key={cards.id} card={cards}/>})
            }
        </div>
    )
}

export default CardList