import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import {FlexContainer} from "../style/styles";
import ThemeToggle from "../theme/ThemeToggle";

const AppLayout = ({children}) => {
    const {themeMode, toggleTheme} = useTheme();
    const CurrentMode = themeMode ==='light' ? '아침이양🔅':'밤이양🌝';
    return(
        <WrapContainer>
            <ThemeToggle toggle={toggleTheme} mode={themeMode} />

            <ColoredText> 지금 Mode는 {CurrentMode}</ColoredText>
            <FlexContainer>{children}</FlexContainer>
        </WrapContainer>
    )
}

export default AppLayout;

const WrapContainer = styled.main`
    min-height:100%;
    position: relative;
`
const ColoredText = styled.span`
    position: absolute;
    color: #E6B74A;

`