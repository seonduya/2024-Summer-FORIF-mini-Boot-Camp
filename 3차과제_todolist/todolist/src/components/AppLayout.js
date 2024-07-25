import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import {FlexContainer} from "../style/styles";
import ThemeToggle from "../theme/ThemeToggle";

const AppLayout = ({children}) => {
    const [themeMode, toggleTheme] = useTheme();
    return(
        <WrapContainer>
            <ThemeToggle toggle={toggleTheme} mode={themeMode}>
                DarkMode
            </ThemeToggle>

            <FlexContainer>{children}</FlexContainer>
        </WrapContainer>
    )
}

export default AppLayout;

const WrapContainer = styled.main`
    min-height:100%;
    position: relative;
`