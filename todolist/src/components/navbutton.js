import { Cursor } from "mongoose";
import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Navigation({mode}) {
    const navigate = useNavigate();

    const buttonStyle = {

        width: '150px',
        height: '60px',

        fontSize: '18px',
        fontWeight: '700',

        backgroundColor: 'rgba(255,255,255,0.2)',
        border: 'none',
        color: '#436996',
        textDecoration:'none',
    }
    const buttonStyledark ={
        margin: '20px',
        padding: '5px',
        height: '40px',
        
        fontSize: '18px',
        fontWeight: '700',
        
        backgroundColor: 'rgb(255,255,255,0)',
        border: 'none',
        borderBottom: '1.5px solid black',
        color: '#323232',
        textDecoration:'none',

        cursor:'pointer',
    }

    
    return (
        <div style={{width:'80%', alignItems:'center'}}>
            <button onClick={()=>navigate(`/calendar`)} style={mode ==='light' ? buttonStyle : buttonStyledark}>
             Calendar
            </button>
            <button onClick={()=>navigate(`/todo`)} style={mode ==='light' ? buttonStyle : buttonStyledark}>
            Todo
            </button>
            <button onClick={()=>navigate(`/Board`)} style={mode ==='light' ? buttonStyle : buttonStyledark}>
            Board
            </button>
            <button onClick={()=>navigate(`/`)} style={mode ==='light' ? buttonStyle : buttonStyledark}>
            Logout
            </button>

        </div>
    );

};

export default Navigation;


