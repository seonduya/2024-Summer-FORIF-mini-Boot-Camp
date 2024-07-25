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
    position:fixed;
    z-index: 999999; /* ?? */
    top: 4%;
    right : 3%;

    background-color: ${
        props => props.mode ==='dark'? '#000000':'#FFFFFF'
    };
    border: ${props => props.theme.borderColor};
    font-size:30px;

    dixplay:flex;
    justify-content: center;
    algin-item:center;

    width:96px;
    height:48px;
    border-radius:30px;
    box-shadow: ${
    props => props.mode === 'dark' ? '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'
    : '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'
  }
`
