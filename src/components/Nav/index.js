import React from "react";


function Nav({ navSelect, currentNavSelect, setCurrentNavSelect }) {

    function updateState(title) {
        //update state
        setCurrentNavSelect(title)
        console.log("current nav select",currentNavSelect);
    }

    return (
        <div className="nav sticky-top navbar-light bg-light">

            <li className="navbar-brand">Claire Puckett</li>

              {navSelect.map((menu, i)=> (
                  <li
                 className="nav-link"
                 onClick={()=>updateState(menu.title)}
                 key={menu.title}
                >{menu.title}</li>

            ))}

        </div>
    )
}

export default Nav;