import React from "react";

function Navigation({mode}) {
    const buttonStyle = {

        width: '267px',
        height: '60px',

        fontSize: '22px',
        fontWeight: '700',
        borderRadius: '50px',

        backgroundColor: 'rgba(255,255,255,0.7)',
        border: '#FFFFFF',
        color: '#436996',
    }
    const buttonStyledark ={
        width: '267px',
        height: '60px',
        
        fontSize: '22px',
        fontWeight: '700',
        borderRadius: '50px',
        
        backgroundColor: 'rgb(255,255,255)',
        border: '#FFFFFF',
        color: '#323232',
    }

    
    return (
        <button style={mode ==='dark' ? buttonStyle : buttonStyledark}>
            front-end 배우기
        </button>
    );

};

export default Navigation;


