import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/mainlayout";

import { useContext} from "react";
import {PostsContext} from "../store/postContext";


export default function Writing(){

    const {handleAdd} = useContext(PostsContext);
    const navigate= useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate]= useState("");
    //const contentRef= useRef();
    // const yesnoRef= useRef();

    function handleSubmit(event){
        event.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];
        const post = {
            title: title,
            content: content,
            date: currentDate,
        };

        handleAdd(post);
        navigate('/board');
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

        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'20px',
        
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
        <MainLayout >
            <form method="post" onSubmit={handleSubmit} style={BoxStyle}>
                <div style={{width:'1000px'}}>
                    <label htmlFor="contents" style={{margin:'50px'}}>제목</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="contents" id='contents' required style={Titleboxstyle}/>
                </div>
                <div>
                <textarea value={content} onChange={(e) => setContent(e.target.value)}  type="text" name="yesno" id='yesno' required className="Textboxstyle"  style={Textboxstyle}
                        placeholder="본문을 입력하세요."/>
                </div>
                <div style={{display:'flex', gap:'15px'}}>
                    <button onClick={()=>navigate(`/board`)} style={buttonStyle}>돌아가기</button>
                    <input type="submit" value="게시하기" style={buttonStyle}/>
                </div>
            </form>
        </MainLayout>
        
    );
};


//post ->우측엔 postitems -> 그 하위엔 postitem