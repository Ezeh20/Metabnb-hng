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
            <section className="content">
                <div className=" links-place">
                    <div id="slider" ref={slider} className="slider scrollbar-hide scroll whitespace-nowrap scroll-smooth">
                        {
                            NavPlaceToStay.map(place => { return <Link key={place.id}>{place.link}</Link> })
                        }
                    </div>
                    <img src={arrow} alt="" className=" animate-pulse  ml:hidden" onClick={Scroll} />
                </div>
                <button className="location">
                    <p className=" 350-max:text-[10px] text-[12px] sm:text-[14px] lg:text-[20px]">Location</p>
                    <Settings className=" 350-max:w[11px] 350-max:h-[11px] w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] lg:w-[24px] lg:h-[24px]" />
                </button>
            </section>

            <section className="cards  mt-[50px] xl:mt-[75px]">
                <CardList />
            </section>
        </div>
    )
}

export default Place