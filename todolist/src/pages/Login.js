import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/navbutton";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { authService } from "../firebase/fbInstance";

import '../App.css';
import ppumi from "../assets/img/ppumi.png"


const Auth = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError]= useState('');

    const navigate = useNavigate();

    const toggleAccount = () => setNewAccount((prev)=> !prev)

    const onChange = (e) =>{
        const {target: {name, value}} = e;
        if (name ==="email") setEmail(value);
        else if (name === "password") setPassword(value);
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        let data; 
        try {
            if (newAccount)
                {
                    signup();
                    data= await createUserWithEmailAndPassword(authService, email, password);
                }
             else 
             {
                data = await signInWithEmailAndPassword(authService, email, password);
                navigate(`/`);
            }
        } catch (error){
            setError(error.message);
        }
    }

    const signup = () =>{
        alert(`${email}로 회원가입합니다.`)
    }

    const BoxStyle ={
        width:'50%',
        padding: '30px',
        alignItems:'center',
        borderRadius:'30px',
        backgroundColor:'#FFFFFF',
        
    }

    const fieldStyle = {
        width :'400px',
        height : '40px',
        borderRadius:'10px',
        padding:'8px',
        border:'None',

        backgroundColor:'#F1F1F1',

        fontSize:'18px',
    }


    const buttonStyle = {
        width :'400px',
        height : '50px',
        borderRadius:'10px',

        backgroundColor:'#3893FF',
        border:'none',

        color:'white',
        fontSize:'20px',
        fontWeight:'700',
        cursor: 'pointer',

    }
    
    return (
        <div>
            
        <div style={{display:'flex'}}>
            <img src={ppumi}></img>
            <form onSubmit={onSubmit} style={BoxStyle}>
                <p>어서오세요. 쁘미반에</p>
                <div style = {{display:'flex',flexDirection:'column',gap:'10px'}}>
                    <input 
                        name="email"
                        type="email"
                        placeholder="아이디를 입력하세요."
                        required 
                        value={email}
                        onChange={onChange}
                        style={fieldStyle} />
                    <input
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        required
                        value={password}
                        onChange={onChange}
                        style={fieldStyle}/>
                    <input
                        type="submit" 
                        value={newAccount?"Create Account":"Login"}
                        style={buttonStyle} />
                    <span
                        onClick={toggleAccount}>{newAccount? "로그인":"계정이 없나요? 회원가입"} 하러가기</span>
                </div>
            </form>
        </div> 
        </div>
    );
};

export default Auth;
