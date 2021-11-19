import React from "react";
import {NavLink} from 'react-router-dom';
import logo from "../assets/blucube.PNG";

import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import ElevenMpIcon from '@mui/icons-material/ElevenMp';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ParaglidingIcon from '@mui/icons-material/Paragliding';
import GroupIcon from '@mui/icons-material/Group';

const SideNav = (props) => {
    return(
        <div>
           <div>
               <img src={logo} alt="logo"/>
           </div>
           <div className="menuList">
               <ul className="sideMenuList">
                   <li>
                       <NavLink exact to="/" className="navItem" activeClassName="activeNavItem">
                           <HomeIcon className="navItemIcon"/>
                            Home
                       </NavLink>
                   </li>
                   <li>
                        <NavLink exact to="/" className="navItem" activeClassName="activeNavItem">
                           <MessageIcon className="navItemIcon"/>
                           Message
                       </NavLink>

                   </li>
               </ul>
               <h6 className="navSubhead">
                   SHARE
               </h6>
               <ul className="sideMenuList">
                    <li>
                        <NavLink exact to="/" className="navItem" activeClassName="activeNavItem">
                           <ElevenMpIcon className="navItemIcon"/>
                           Ranking
                       </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" className="navItem" activeClassName="activeNavItem">
                           <BubbleChartIcon className="navItemIcon"/>
                           Challenge
                       </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" className="navItem" activeClassName="activeNavItem">
                           <GroupWorkIcon className="navItemIcon"/>
                           Party
                       </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" className="navItem" activeClassName="activeNavItem">
                           <ConnectWithoutContactIcon className="navItemIcon"/>
                           Connect
                       </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" className="navItem" activeClassName="activeNavItem">
                           <ParaglidingIcon className="navItemIcon"/>
                           Parade
                       </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" className="navItem" activeClassName="activeNavItem">
                           <GroupIcon className="navItemIcon"/>
                           Group
                       </NavLink>
                    </li>
               </ul>
           </div>
        </div>
    )
}

export default SideNav;