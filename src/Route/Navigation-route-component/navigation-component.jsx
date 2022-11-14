import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as MetaLogo } from "../../Assets/images/logo.svg"
import { ReactComponent as MenuToggle } from "../../Assets/images/menu.svg"
import { Links } from "../../utils/Statics/nav"
import Button from "../../Components/Button-component"

const Nav = () => {
    return (
        <Fragment>
            <div className="header  bg-basicWhite   shadow-sm ml:shadow-none  w-full  767-max:sticky top-0   z-[100] ml:mt-[43px]">
                <nav className=" container-use  h-[48px] relative flex items-center z-50  py-9   ml:shadow-none justify-between  ">
                    <Link to="/home">
                        <MetaLogo className=" w-[120px] h-[35px] ml:w-[150px] need:w-[233px] need:h-[36.67px] ml:h-[40px]  350-max:w-[100px] 350-max:h-[20px]" />
                    </Link>
                    <div className="nav-menu  767-max:fixed 767-max:bg-primary   767-max:shadow-2xl 767-max:top-[6rem]  z-20 767-max:right-[1rem] 767-max:flex 767-max:flex-col
                     767-max:p-8 767-max:text-center 767-max:gap-y-4  rounded-[5px]  flex   gap-x-[25px]  lg:gap-x-[48px]
                    ">
                        {
                            Links.map((link) => { return (<Link key={link.id} to={link.location} className="  text-[17px]  ml:mt-2 767-max:text-[20px] lg:text-[20px] font-normal 767-max:text-basicWhite">{link.text}</Link>) })
                        }
                    </div>
                    <div className="group flex items-center  gap-x-7">
                        <Button buttonType={`default`} styleType={`styleDefault`}>Connect wallet</Button>
                        <MenuToggle className=" 350-max:w-[24px] 350-max:h-[24px] ml:hidden opacity-50" />
                    </div>
                </nav>
            </div>
            <Outlet/>
        </Fragment>
        
    )
}

export default Nav

/**
 * #FAE5E500
 */

/**
 * 767-max:bg-[#e8eaed] 
 */