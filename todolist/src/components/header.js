import React from "react";
import logo from '../assets/img/logo.png';
import logodark from '../assets/img/logodark.png';
import { useTheme } from '../context/themeProvider';

function Header(){
    const [toggleTheme ]= useTheme(); 
    const headerstyle={
        width:'40px',
        height:'172px',
    };

    console.log(toggleTheme[0]);

    return(
        <div style={headerstyle} >
           {toggleTheme[0] === 'dark' ? <img src={logodark} alt="로고다크"/> : <img src={logo} alt="로고"/>} 
        </div>
    );
};

export default Header;