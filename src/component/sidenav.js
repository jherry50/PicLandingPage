import React from "react";
import logo from "../assets/blucube.PNG";

const SideNav = (props) => {
    return(
        <div>
           <div>
               <img src={logo} alt="logo"/>
           </div>
           {/* <div className="menuList">
               <ul>
                   <li>Home</li>
                   <li>Message</li>
               </ul>
               <h6>
                   SHARE
               </h6>
               <ul>
                    <li>Ranking</li>
                    <li>Challenge</li>
                    <li>Party</li>
                    <li>Connect</li>
                    <li>Parade</li>
                    <li>Group</li>
               </ul>
           </div> */}
        </div>
    )
}

export default SideNav;