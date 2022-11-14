import cta from "../Assets/images/landing-group-img.svg"

const LandingPage = () => {
    return (
        <div className="">
            <section className="container-use mt-[52px] ml:mt-[132px]  justify-center flex  flex-col  ml:items-center  ">
                <div className="cta flex flex-col  justify-items-center self-center ml:flex-row  ml:gap-x-[99px] ml:items-center">
                    <div className="">
                        <h2 className=" text-center mb-[32px]  ml:text-left ml:text-[57px] ml:w-[100%]">Rent a Place away from Home in the Metaverse </h2>
                        <p className="     text-center  mb-[48px] ml:text-left ml:text-[24px] ml:w-[97%]">we provide you access to luxury and  affordable  houses in the metaverse, get a chance to turn your <br /> imagination to reality at your comfort zone</p>
                        <form action="" className=" self-center w-full flex flex-col gap-y-2 mb-8 ml:flex-row">
                            <input type="text" placeholder="search for location" className=" rounded-[5px] border-[1px]  border-solid border-[#A3A3A3]  py-2 px-4  outline-none  ml:w-[390px]  ml:rounded-r-none" />
                            <button className=" bg-primary py-2 px-4  text-basicWhite text-[16px] rounded-[5px] ml:w-[230px]  ml:rounded-l-none">Search</button>
                        </form>
                    </div>

                    <img src={cta} alt="" />

                </div>

            </section>

        </div>
    )
}

export default LandingPage