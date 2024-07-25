import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Navigation from "../components/navbutton";

import { useContext, useRef } from "react";
import {PostsContext} from "../store/postContext";


export default function Writing(){

    const {handleAdd} = useContext(PostsContext);
    const navigate= useNavigate();

    const contentRef= useRef();
    const yesnoRef= useRef();

    function handleSubmit(event){
        event.preventDefault();
        const post = {
            contents: contentRef.current.value,
            yesno: yesnoRef.current.value,
        };
        handleAdd(post);
        navigate('/post');
    }


    const Titleboxstyle = {
        
        width:'400px',
        height:'50px',
        borderRadius:'30px',
        
        backgroundColor: '#F1F1F1',
        
    };

    const Textboxstyle = {
        
        width:'600px',
        height:'300px',
        borderRadius:'30px',
        padding:'20px',

        backgroundColor: '#F1F1F1',
        
    };

    const BoxStyle = {
        width : '800px',
        height : '600px',
        padding: '70px',
        borderRadius:'35px',
        
        backgroundColor:'#FFFFFF',
    }

    const buttonStyle = {
        width :'200px',
        height : '50px',
        borderRadius:'10px',

        backgroundColor:'#3893FF',
        border:'None',
        color:'white',
        fontSize:'20px',
        fontWeight:'700',
    }

    return (
        <div>
            <Navigation/>
            <form method="post"onSubmit={handleSubmit} style={BoxStyle}>
                <div>
                    <label htmlFor="contents">제목</label>
                    <input ref={contentRef} type="text" name="contents" id='contents' required style={Titleboxstyle}/>
                </div>
                <div>.</div>
                <div>
                <textarea ref={yesnoRef} type="text" name="yesno" id='yesno' required className="Textboxstyle"  style={Textboxstyle}
                        placeholder="본문을 입력하세요."/>
                </div>
                <Link to='/board'> <button style={buttonStyle}>돌아가기</button> </Link>
                <Link to='/board'> <input type="submit" value="게시하기" style={buttonStyle}/></Link>
            </form>
        </div>
        
    );
};



//post ->우측엔 postitems -> 그 하위엔 postitem