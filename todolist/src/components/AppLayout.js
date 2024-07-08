import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import {FlexContainer} from "../style/styles";
import ThemeToggle from "../theme/ThemeToggle";
import Header from "./header";

const AppLayout = ({children}) => {
    const [ThemeMode, toggleTheme] = useTheme();
    return(
        <WrapContainer>
            <Header />
            <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
                DarkMode
            </ThemeToggle>

            <FlexContainer>{children}</FlexContainer>
        </WrapContainer>
    )
}

export default AppLayout;

const WrapContainer = styled.main`
`