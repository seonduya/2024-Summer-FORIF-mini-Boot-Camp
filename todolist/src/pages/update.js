import React, { useContext, useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import { PostsContext } from "../store/postContext";
import Navigation from "../components/navbutton";

export default function PostUpdate() {
    const { datalist, handleEdit } = useContext(PostsContext);
    const { postId } = useParams(); // URL에서 postId 매개변수를 가져옴
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const foundPost = datalist ? datalist.find(p=>p.id===postId) : null;
        if (foundPost){
            setTitle(foundPost.title);
            setDate(foundPost.date);
            setContent(foundPost.content);
        } setLoading(false);
    },[datalist, postId, navigate]);


    // 게시글 수정
    function handleEditPost(event) {
        event.preventDefault(); // 폼 제출 기본 동작 막음
        if (datalist){
            handleEdit(postId, { title, content });
            navigate('/board');
        } 
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
        minHeight: '600px',
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
            <form onSubmit={handleEditPost} style={BoxStyle}>
                <div>
                        <label htmlFor="title">제목</label>
                        <input 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} 
                            type="text" 
                            name="title" 
                            id='title' 
                            required style={Titleboxstyle} /> 
                </div>
                <div>
                    작성한 날짜 : {date}
                </div>
                <div>
                        <textarea 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                            type="text" 
                            name="content" 
                            id='content' 
                            required className="Textboxstyle" 
                            style={Textboxstyle}/>
                </div>
                <button onClick={()=> navigate('/board')} style={buttonStyle}> 돌아가기 </button> 
                <button type="submit" style={buttonStyle}> 수정 완료 </button>   
            </form>
       
        </div>
    );
}


