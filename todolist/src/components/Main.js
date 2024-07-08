import React from "react";
import styled, { useTheme } from "styled-components";
import AppLayout from "./AppLayout";


const Main = ()=>{
    const ThemeMode = useTheme();
    const CurrentMode = ThemeMode[0] ==='light' ? '🌝':'🔅';

    return(
        <AppLayout> Welcome to {''}
            <h2>
                <ColoredText>Current mode is {CurrentMode}</ColoredText>
            </h2>
        </AppLayout>
    )
}

export default Main;

const ColoredText = styled.span`
`
