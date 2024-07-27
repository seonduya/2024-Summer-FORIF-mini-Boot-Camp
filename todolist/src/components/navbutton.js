import React from "react";
import { Link } from "react-router-dom";


function Navigation({mode}) {
    const buttonStyle = {

        width: '150px',
        height: '60px',

        fontSize: '22px',
        fontWeight: '700',

        backgroundColor: 'rgba(255,255,255,0.2)',
        border: 'none',
        color: '#436996',
        textDecoration:'none',
    }
    const buttonStyledark ={
        width: '150px',
        height: '60px',
        
        fontSize: '22px',
        fontWeight: '700',
        
        backgroundColor: 'rgb(255,255,255,0)',
        border: 'none',
        color: '#323232',
        textDecoration:'none',
    }

    
    return (
        <div style={{width:'1000px', alignItems:'center'}}>
            <button style={mode ==='light' ? buttonStyle : buttonStyledark}>
            <Link to='/calendar'> 홈 </Link>
            </button>
            <button style={mode ==='light' ? buttonStyle : buttonStyledark}>
            <Link to='/todo'> 투두페이지 </Link>
            </button>
            <button style={mode ==='light' ? buttonStyle : buttonStyledark}>
            <Link to='/board'> 게시판 </Link>
            </button>
            <button style={mode ==='light' ? buttonStyle : buttonStyledark}>
            <Link to='/'> 로그인 </Link>
            </button>

        </div>
    );

};

export default Navigation;


