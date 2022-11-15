import { Link } from "react-router-dom"
import { useRef } from "react"
import { ReactComponent as Settings } from "../Assets/images/Place-to-stay-collection/setting.svg"
import { NavPlaceToStay } from "../utils/Statics/nav-place-to-stay"
import CardList from "../Components/Cardlists-place-to-stay-component"
import arrow from "../Assets/images/arrow-right.svg"

const Place = () => {
    const slider = useRef(null)

    const Scroll = () => {
        const right = document.getElementById('slider')
        right.scrollLeft = right.scrollLeft + 50
    }

    return (
        <div>
            <section className="container-use mt-[52px]  lg:mt-[132px] ml:mt-[80px]  flex items-center gap-x-[20px] ">
                <div className=" links-place  relative  items-center   w-[50%] sm:w-[60%] md:w-[70%]  mx:w-[80%]  flex gap-x-[10px] ">
                    <div id="slider" ref={slider} className="  text-[16px] md:text-[16px] mll:text-[18px] lg:text-[20px] w-[100%] overflow-x-scroll  ml:overflow-visible  flex gap-x-[15px]  lg:gap-x-[28px] mll:gap-x-[12px] need:gap-x-[48px] scrollbar-hide scroll whitespace-nowrap scroll-smooth ">
                        {
                            NavPlaceToStay.map(place => { return <Link key={place.id}>{place.link}</Link> })
                        }
                    </div>
                    <img src={arrow} alt="" className=" animate-pulse  ml:hidden" onClick={Scroll} />
                </div>
                <button className="location flex items-center gap-x-4  px-4 py-2  justify-between  border-[1px] border-[#B4B4B4] rounded-[8px] ">
                    <p className=" 350-max:text-[10px] text-[12px] sm:text-[14px] lg:text-[20px]">Location</p>
                    <Settings className=" 350-max:w[11px] 350-max:h-[11px] w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] lg:w-[24px] lg:h-[24px]" />
                </button>
            </section>

            <section className="cards">
                <CardList />
            </section>
        </div>
    )
}

export default Place