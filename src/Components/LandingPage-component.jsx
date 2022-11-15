import cta from "../Assets/images/landing-group-img.svg"
import { web } from "../utils/Statics/web"
import CardList from "./CardLists-component"
import any from "../Assets/images/bottom-img-group.svg"

const LandingPage = () => {
    return (
        <div className="">
            <section className="container-use mt-[52px]  lg:mt-[132px] ml:mt-[80px]  justify-center flex  flex-col  ml:items-center  mb-[67px] ">
                <div className="cta">
                    <div>
                        <h2 className="Landing-text">Rent a  <span className=" text-primary">Place</span> away from <span className=" text-primary">Home</span> in the <span className=" text-primary">Metaverse</span> </h2>
                        <p className="Landing-sub">we provide you access to luxury and  affordable  houses in the metaverse, get a chance to turn your <br />  imagination to reality at your comfort zone</p>
                        <form action="" className="  w-full flex flex-col gap-y-2 mb-8 ml:flex-row " >
                            <input type="text" placeholder="search for location" className="location-s" />
                            <button className="btn-landing">Search</button>
                        </form>
                    </div>
                    <img src={cta} alt="" className="cta-img" />
                </div>
            </section>

            <section className=" mb-[54px]">
                <div className="web bg-primary  ">
                    <div className="container-use flex items-center py-[10px]  lg:px-[30px] justify-between">
                        {
                            web.map(web => { return <img key={web.id} src={web.logo} alt="web logos" className="web-icons" /> })
                        }
                    </div>
                </div>
            </section>

            <section className="cards">
                <h3 className="title-card">Inspiration for your next adventure</h3>
                <CardList />
            </section>

            <section className="bg-primary  py-8">
                <div className="ctf">
                    <div className="one flex flex-col gap-y-[1.5rem]">
                        <h3 className=" text-basicWhite text-[28px] ml:text-[35px] lg:text-[45px] xl:text-[60px] ">Metabnb NFTs</h3>
                        <p className=" text-basicWhite text-[17px] xl:text-[18px]">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                        <button className="learn-more">Learn more</button>
                    </div>
                    <img src={any} alt="" className="any-img" />
                </div>
            </section>

        </div>
    )
}

export default LandingPage