import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                    login();
                navigate(`/calendar`);
            }
        } catch (error){
            setError(error.message);
        }
    }

    const signup = () =>{
        alert(`${email}로 회원가입합니다.`)
    }

    const login = () =>{
        alert(`로그인합니다.`)
    }

    const fieldStyle = {
        width :'70%',
        height : '40px',
        borderRadius:'10px',
        padding:'8px',
        border:'None',

        backgroundColor:'#F1F1F1',

        fontSize:'18px',
    }


    const buttonStyle = {
        width :'75%',
        height : '50px',
        borderRadius:'10px',

        backgroundColor:'#3893FF',
        border:'none',

        color:'white',
        fontSize:'18px',
        fontWeight:'600',
        cursor: 'pointer',

    }
    
    return (
            
        <div style={{display:'flex', justifyContent:'center',height:'100vh',}}>
            <div style={{width:'50%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center' }}>
                <img src={ppumi}></img>
            </div>
            <form onSubmit={onSubmit} style={{width:'50%', height:'100%', 
                display:'flex', flexDirection:'column', 
                alignItems:'center',justifyContent:'center', 
                backgroundColor:'#FFFFFF',padding:'5px', gap:'10px'}}>
                
                <p>어서오세요. 쁘미반에</p>
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
                    <span style={{cursor:'pointer'}}
                        onClick={toggleAccount}>{newAccount? "로그인":"계정이 없나요? 회원가입"} 하러가기</span>
                    <button onClick={()=> navigate(`/create`)}>회원가입</button>
                
            </form>
        </div> 
        
    );
};

export default Auth;

