import React,{useState} from "react";

const HeaderMenu = () => {
    const [openMenu,setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu((prevOpenMenu)=>!prevOpenMenu);
    };

    const iconClassToogle = () => `hamburger-icon ${openMenu ?'open':''}`;
    const linkClassToogle = () => `menu-links ${openMenu ?'open':''}`;

    return (
        <div className='hamburger-menu'>
          <div className={iconClassToogle()} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={linkClassToogle()}>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#project'>Project</a></li>
            <li><a href='#contact'>Contact</a></li>
          </div>
        </div>
    )
}
export default HeaderMenu;