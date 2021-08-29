import React, { useState } from 'react';
// import { IconName } from "react-icons/fa"; //! isky bjye aesy bi kr skty
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData'
import './Navbar.css'
import {IconContext} from 'react-icons'

function Navbar() {  
    const [sidebar, setsidebar] = useState(false);

    const showSidebar = ()=>setsidebar(!sidebar);
    return (
        <> 
        <IconContext.Provider value={{color:'white'}}>
         <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <nav className={sidebar? 'nav-menu active':'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item,i)=>{
                        return(
                            <li key={i} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div> 
        </IconContext.Provider>  
        </>
    )
}

export default Navbar
// 