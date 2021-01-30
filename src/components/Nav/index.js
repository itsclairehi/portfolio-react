import React from "react";


function Nav({ navSelect, currentNavSelect, setCurrentNavSelect }) {

    console.log(currentNavSelect);

    return (
        <div className="nav sticky-top navbar-light bg-light" >
            {/* hamburger menu that doesn't work */}
            <div className="collapse navbar-collapse" id="menu">
                <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#menu">
                    <span className="sr-only">Hamburger Menu</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>

       
            <li className="navbar-brand d-none d-sm-block"
                onClick={() => {
                    setCurrentNavSelect("About Me")
                }}>
                Claire Puckett
                </li>

                
                {navSelect.map((menu, i) => (
                    <li
                        className={currentNavSelect === menu.title ? "nav-link selected" : "nav-link"}
                        onClick={() => setCurrentNavSelect(menu.title)}
                        key={menu.title}
                    >{menu.title}</li>

                ))}
            </div>
            
    )
}

export default Nav;