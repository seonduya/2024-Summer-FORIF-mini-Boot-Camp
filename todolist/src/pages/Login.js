import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import Navigation from "../components/navbutton";

function Login(){

    const fieldStyle = {
        width :'400px',
        height : '40px',
        borderRadius:'10px',
        padding:'8px',
        border:'None',

        fontSize:'18px',
    }


    const buttonStyle = {
        width :'400px',
        height : '50px',
        borderRadius:'10px',

        backgroundColor:'blue',
        color:'white',
        fontSize:'20px',
        fontWeight:'700',
    }
    
    return (
        <div>
            <Navigation/>

            <div className="whitebox">
                <p>어서오세요. 쁘미반에</p>
                <div style = {{display:'flex',flexDirection:'column',gap:'10px'}}>
                    <input style={fieldStyle} placeholder="아이디를 입력하세요."/>
                    <input style={fieldStyle} placeholder="비밀번호를 입력하세요."/>
                    <button style={buttonStyle} >버튼</button>
                </div>
            </div> 
        </div>
    );
};

export default Login;

            // //좌측

            // //우측
            // 
            // 
            // <input/>
            
            // //input field 2개
            // //login 버튼 한개
/*style={alignItems:'center'}*/
