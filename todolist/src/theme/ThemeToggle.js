import React from "react";
import styled from "styled-components";

function ThemeToggle({toggle, mode}){
    return (
        <ToggleWrapper onClick={toggle} mode={mode}>
            {mode === 'dark' ? '🌝':'🔅'}
        </ToggleWrapper>
    );
}

export default ThemeToggle;

const ToggleWrapper = styled.button`
`
