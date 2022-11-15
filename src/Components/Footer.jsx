import { Link } from "react-router-dom"
import meta from "../Assets/images/logo-rev.svg"
import { Socials } from "../utils/Statics/socials"
import copy from "../Assets/images/cc.svg"
import { Footer_community, Footer_places, Footer_About } from "../utils/Statics/footer-links"

const Footer = () => {
    return (
        <div className=" bg-footerBlack">
            <div className="container-use pt-[40px] lg:pt-[62.88px] flex  flex-col  lg:flex-row lg:gap-x-[187px]">
                <div className="part-1">
                    <img src={meta} alt="meta" className=" w-[120px] h-[35px] mb-[35px] lg:mb-[99px] lg:w-[230px] lg:h-[40px] " />
                    <div className="socials flex gap-x-4 mb-[30px] lg:mb-[59px]">
                        {
                            Socials.map(social => { return <img key={social.id} src={social.media} alt="media" /> })
                        }
                    </div>
                    <div className="copy flex gap-x-2 mb-[40px]">
                        <img src={copy} alt="copy" />
                        <p className=" text-[#F7F7F7]">2022 Metabnb</p>
                    </div>
                </div>
                <div className="part-2 grid grid-cols-2 mx:grid-cols-3 gap-y-5 pb-[37px] lg:gap-x-[100px] xl:gap-x-[217px]">
                    <div className="community flex flex-col text-[#F1F3F9]">
                        <p className=" mb-[23px] text-[18px] font-bold">Community</p>
                        <div className=" flex flex-col gap-y-[13px] text-[14px]">
                            {
                                Footer_community.map(community => { return <Link key={community.id} >{community.link}</Link> })
                            }
                        </div>
                    </div>
                    <div className="places flex flex-col text-[#F1F3F9]">
                        <p className=" mb-[23px] text-[18px] font-bold">Places</p>
                        <div className="flex flex-col gap-y-[13px] text-[14px]">
                            {
                                Footer_places.map(places => { return <Link key={places.id} className=" text-[14px]">{places.link}</Link> })
                            }
                        </div>
                    </div>
                    <div className="About flex flex-col text-[#F1F3F9]">
                        <p className=" mb-[23px] text-[18px] font-bold">About us</p>
                        <div className="flex flex-col gap-y-[13px] text-[14px]">
                            {
                                Footer_About.map(about => { return <Link key={about.id} className=" text-[14px]">{about.link}</Link> })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer