import cta from "../Assets/images/landing-group-img.svg"
import { web } from "../utils/Statics/web"
import CardList from "./CardLists-component"

const LandingPage = () => {
    return (
        <div className="">
            <section className="container-use mt-[52px]  lg:mt-[132px] ml:mt-[80px]  justify-center flex  flex-col  ml:items-center  mb-[67px] ">
                <div className="cta flex flex-col  justify-items-center self-center ml:flex-row   ml:gap-x-[40px] lg:gap-x-[50px]  xl:gap-x-[99px] ml:items-center">
                    <div className=" ">
                        <h2 className=" text-center mb-[32px] text-[20px] ml:text-left ml:text-[25px] md:text-[30px] lg:w-[90%] xl:w-[100%] lg:text-[40px] xl:text-[56px]  font-semibold ">Rent a  <span className=" text-primary">Place</span> away from <span className=" text-primary">Home</span> in the <span className=" text-primary">Metaverse</span> </h2>
                        <p className="     text-center  mb-[48px] ml:text-left  ml:text-[16px] ml:w-[90%] lg:w-[68%] lg:text-[18px] md:text-[18px]  xl:w-[99%] xl:text-[24px] ">we provide you access to luxury and  affordable  houses in the metaverse, get a chance to turn your <br />  imagination to reality at your comfort zone</p>
                        <form action="" className="  w-full flex flex-col gap-y-2 mb-8 ml:flex-row " >
                            <input type="text" placeholder="search for location" className=" rounded-[5px] border-[1px]  md:self-center md:w-[400px]  ml:w-[200px] lg:w-[290px] xl:w-[390px] border-solid border-[#A3A3A3]  py-3 px-4  outline-none   ml:rounded-r-none" />
                            <button className=" bg-primary  text-basicWhite text-[16px] rounded-[5px] ml:rounded-l-none  w-full md:w-[400px] ml:w-[26%]  xl:w-[230px] self-center ml:self-auto  py-3 px-4  ">Search</button>
                        </form>
                    </div>
                    <img src={cta} alt="" className=" w-[350px] h-[350px]  md:w-[400px] md:h-[320px] mx:w-[420px] mx:h-[360px] ml:w-[430px] ml:h-[370px] lg:w-[430px] lg:h-[440px] xl:w-[476px] xl:h-[459px] self-center" />
                </div>
            </section>

            <section className=" mb-[54px]">
                <div className="web bg-primary  ">
                    <div className="container-use  flex  items-center  py-[10px]   justify-between">
                        {
                            web.map(web => { return <img key={web.id} src={web.logo} alt="web logos" className=" w-[100px] h-[30px]" /> })
                        }
                    </div>
                </div>
            </section>

            <section className="cards">
                <h3 className="title text-center  text-[20px] text-[#000] xl:text-[46px] font-bold mb-[43px]">Inspiration for your next adventure</h3>
                        <CardList/>
            </section>

        </div>
    )
}

export default LandingPage