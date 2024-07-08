import React from "react"
import { Link } from "react-router-dom";
import { useTheme } from "styled-components"
import AppLayout from "./AppLayout";
import styled from "styled-components";

const Sub = () => {
    const ThemeMode = useTheme();
    return(
        <AppLayout>
            <h2> ... SubPage </h2>
            <Link to ='/'>
                <StyledButton theme={ThemeMode[0]}>
                    Go Back to Home
                </StyledButton>
            </Link>
        </AppLayout>
    )
}

export default Sub;

const StyledButton = styled.button`
    width:240px;
`