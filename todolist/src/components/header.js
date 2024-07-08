import React from "react";
import logo from '../assets/img/logo.png';

function Header(){
    const headerstyle={
        width:'40px',
        height:'172px',
    };
    return(
        <div style={headerstyle}>
            <img src={logo} alt="로고"/>
        </div>
    );
};

export default Header;