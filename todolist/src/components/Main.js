import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import AppLayout from "./AppLayout";


const Main = ()=>{
    const temp = window.localStorage.getItem('theme');

    const [themeMode,setThemeMode]= useState(temp);

    console.log(themeMode)
    const CurrentMode = themeMode ==='light' ? '아침이양🔅':'밤이양🌝';

    return(
        <AppLayout> 
                <ColoredText> 지금 Mode는 {CurrentMode}</ColoredText>
        </AppLayout>
    )
}

export default Main;

const ColoredText = styled.span`
    color: '#E6B74A';

`
