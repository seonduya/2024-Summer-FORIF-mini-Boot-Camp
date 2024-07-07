import React from "react";

function Navigation() {
    const buttonStyle = {

        width: '267px',
        height: '60px',
        backgroundColor: 'rgba(255,255,255,0.7)',
        border: '#FFFFFF',

        fontSize: '22px',
        fontWeight: '700',
        borderRadius: '50px',
        color: '#436996',
    }

    return (
        <button style={buttonStyle}>front-end 배우기</button>
    );

};

export default Navigation;