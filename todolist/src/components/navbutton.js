import React from "react";
import { Link } from "react-router-dom";


function Navigation({mode}) {
    const buttonStyle = {

        width: '150px',
        height: '60px',

        fontSize: '22px',
        fontWeight: '700',
        borderRadius: '50px',

        backgroundColor: 'rgba(255,255,255,0.7)',
        border: '#FFFFFF',
        color: '#436996',
    }
    const buttonStyledark ={
        width: '150px',
        height: '60px',
        
        fontSize: '22px',
        fontWeight: '700',
        borderRadius: '50px',
        
        backgroundColor: 'rgb(255,255,255)',
        border: '#FFFFFF',
        color: '#323232',
    }

    
    return (
        <div>
            <button style={mode ==='light' ? buttonStyle : buttonStyledark}>
            <Link to='/'> 홈 </Link>
            </button>
            <button style={mode ==='light' ? buttonStyle : buttonStyledark}>
            <Link to='/todo'> 투두페이지 </Link>
            </button>
            <button style={mode ==='light' ? buttonStyle : buttonStyledark}>
            <Link to='/board'> 게시판 </Link>
            </button>
            <button style={mode ==='light' ? buttonStyle : buttonStyledark}>
            <Link to='/login'> 로그인 </Link>
            </button>

        </div>
    );

};

export default Navigation;


