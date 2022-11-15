import { ReactComponent as Like } from "../Assets/images/like.svg"
import { useState } from "react"


const Card = ({ cards }) => {
    const [like, setLike] = useState(false)
    return (
        <div className=" card-container">
            <img src={cards.cardImg} alt="cards" className=" mb-[16px] " />
            <div className="bottom-t flex justify-between">
                <div className="left-side">
                    <p>Desert king</p>
                    <p>2345km away</p>
                    <img src={cards.rating} alt="" />
                </div>
                <div className="right-side">
                    <p className="  font-bold">1MBT per night</p>
                    <p>available for 2weeks stay</p>
                    <Like className={`like-action ${like ? 'opacity-100':' opacity-0'}`} onClick={() => setLike(current => !current)} />
                </div>
            </div>
        </div>
    )
}

export default Card