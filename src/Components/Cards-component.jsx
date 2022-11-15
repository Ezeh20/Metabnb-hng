import { ReactComponent as Like } from "../Assets/images/like.svg"
import { useState } from "react"


const Card = ({ cards }) => {
    const [like, setLike] = useState(false)
    return (
        <div className="  relative border-[1px] border-solid border-[#D7D7D7] p-[16px] rounded-[15px]">
            <img src={cards.cardImg} alt="cards" className=" mb-[16px]" />
            <div className="bottom-t flex justify-between">
                <div className="left-side text-[12px] flex flex-col gap-y-[10px]">
                    <p>Desert king</p>
                    <p>2345km away</p>
                    <img src={cards.rating} alt="" />
                </div>
                <div className="right-side text-right text-[12px] flex flex-col gap-y-[10px]">
                    <p className="  font-bold">1MBT per night</p>
                    <p>available for 2weeks stay</p>
                    <Like className={`absolute hover:cursor-pointer top-[1.7rem] right-[1.6rem] text-sec ${like ? 'opacity-100':' opacity-0'}`} onClick={() => setLike(current => !current)} />
                </div>
            </div>
        </div>
    )
}

export default Card