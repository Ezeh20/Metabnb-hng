import { Outlet, Link } from "react-router-dom"
import { useState } from "react"
import { Fragment } from "react"
import { ReactComponent as MetaLogo } from "../../Assets/images/logo.svg"
import MenuToggle from "../../Assets/images/menu.svg"
import CloseToggle from "../../Assets/images/close.svg"
import { ReactComponent as Close } from "../../Assets/images/x.svg"
import { ReactComponent as Arrow } from "../../Assets/images/arrow-right.svg"
import { ReactComponent as Meta } from "../../Assets/images/metamask-high.svg"
import Wallet from "../../Assets/images/wallet-connect.svg"
import { Links } from "../../utils/Statics/nav"
import Footer from "../../Components/Footer"
const Nav = () => {
    const [navToggle, setNavToggle] = useState(false)
    const [modal, setModal] = useState(false)

    return (
        <Fragment>
            <div className="header">
                <nav className="nav">
                    <Link to="/home">
                        <MetaLogo className="logo" />
                    </Link>
                    <div className={`nav-menu ${navToggle ? '767-max:right-4 ' : '767-max:right-[-20rem]'}`}>
                        {/**Map the navigation links */}
                        {
                            Links.map((link) => { return <Link key={link.id} to={link.location} className="links">{link.text}</Link> })
                        }
                    </div>
                    <div className="group flex items-center  gap-x-6 350-max:gap-x-2">
                        <button className=" default styleDefault " onClick={() => setModal(current => !current)}>Connect wallet</button>
                        <img src={navToggle ? CloseToggle : MenuToggle} alt="nav-toggle" className="toggle" onClick={() => setNavToggle(current => !current)} />
                    </div>
                </nav>
                <div className={`modal ${modal ? 'flex' : 'hidden'}`} >
                    <div className="contain">
                        <div className="top">
                            <p className=" CW ">Connect Wallet</p>
                            <Close onClick={() => setModal(current => !current)} className=" hover:cursor-pointer" />
                        </div>
                        <div className="line"></div>
                        <div className="bottom">
                            <p>Choose your preferred wallet:</p>
                            <button className="meta">
                                <div className="left ">
                                    <Meta className="" />
                                    <p className="Mask">Metamask</p>
                                </div>
                                <Arrow />
                            </button>
                            <button className="meta mb-[32px]">
                                <div className="left">
                                    <img src={Wallet} alt=" wallet" className="" />
                                    <p className="Mask">WalletConnect</p>
                                </div>
                                <Arrow />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
            {/**<Footer/> */}
            
        </Fragment>
    )
}

export default Nav

