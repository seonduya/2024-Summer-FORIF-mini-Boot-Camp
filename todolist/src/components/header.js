import React,{useState} from "react";
import logo from '../assets/img/logo.png';
import logodark from '../assets/img/logodark.png';
import { useTheme } from '../context/themeProvider';
import styled from "styled-components";
import Navigation from "./navbutton";


function Header(){
    // const temp = window.localStorage.getItem('theme');
    // const [themeMode,setThemeMode]= useState(temp);
    const {themeMode} = useTheme();
    
    
    const headerstyle={
        width:'100px',
        alignItems:"center",
    };

    console.log(themeMode);

    return(
        <div>
        <div style={{display:"flex", alignItems:"center"}}>
            <HeaderContainer style={headerstyle} > 
                <ImageContainer>
                {themeMode === 'dark' ? <StyledImage src={logodark} alt="로고다크"/> : <StyledImage src={logo} alt="로고"/>} 
                </ImageContainer>
            </HeaderContainer>
            <Navigation/> 
        </div>
            <div style={{
                width: '150px',
                height: '60px',}}>
            </div>

        </div>

    );
};

export default Header;

const HeaderContainer = styled.div`
    display:flex;
    jstify-content:center;
    align-tiems:center;
`

const ImageContainer = styled.div`
    width:200px;
    max-width:100%;
    height:auto;
`
const StyledImage = styled.img`
    width:200px;
    height:auto;
`