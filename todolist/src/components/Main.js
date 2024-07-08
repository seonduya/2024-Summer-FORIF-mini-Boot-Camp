import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import AppLayout from "./AppLayout";


const Main = ()=>{
    const ThemeMode = useTheme();
    const CurrentMode = ThemeMode[0] ==='light' ? '🌝':'🔅';

    return(
        <AppLayout> 
            <h2>
                Welcome to {''}
                <a
                    href=""
                    target="_blank"
                >
                    darkmode!
                </a>
                <br/>
                <ColoredText>Current mode is {CurrentMode}</ColoredText>
            </h2>
            <a>
                All rights reserved by seonduya
            </a>
        </AppLayout>
    )
}

export default Main;

const ColoredText = styled.span`
    color: ##E6B74A
`
