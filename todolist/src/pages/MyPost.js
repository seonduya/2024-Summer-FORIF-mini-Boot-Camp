import React, { useContext, useState, useEffect} from "react";
import { Link,useParams, useNavigate } from "react-router-dom";
import '../App.css';

import MainLayout from "../components/mainlayout";
import {PostsContext} from "../store/postContext";


function MyPost(){
    const { datalist } = useContext(PostsContext);
    const {postId} = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(()=> {
        const foundPost = datalist.find(item => item.id === postId);
        if (foundPost){
            setPost(foundPost);
        } else {
            navigate('/board');
        }
        setLoading(false);
    },[datalist, postId, navigate]);


    if (loading) {
        return <div>Loading...</div>;
    }

    const BoxStyle ={
        padding:'50px',
        borderRadius:'30px',
        backgroundColor:'#FFFFFF',
        
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center',
        gap:'20px',
        overflow: 'auto',
        
    }

    const TextLayout ={
        textAlign:'left',
        width:'100%',
        minHeight:'400px',
        display:'flex',
        flexDirection:'column',
    }
    
    const titleStyle={
        fontSize:'20px',
        fontWeight:600,
        paddingBottom: '10px', // 밑줄과 텍스트 사이 간격
    }

    const dateStyle = {
        fontSize: '14px',
        color: '#888888',
        marginBottom: '20px',
        borderBottom:'1px solid black',
        paddingBottom: '10px', // 밑줄과 텍스트 사이 간격
        marginBottom: '20px', // 제목과 다음 요소 사이 간격
    }

    return (
        <MainLayout>
            <div  style={BoxStyle}>
            <div style={TextLayout}>
                <div style={titleStyle}>{post.title}</div>
                <div style={dateStyle}>{post.date}</div>
                <div>{post.content}</div>
            </div>
            <div style={{display:'flex', gap:'10px'}}>
                <Link to={`/board/${postId}/update`}> <button className="buttonStyle">수정하기</button> </Link>
                <Link to='/board'> <button className="buttonStyle">돌아가기</button> </Link>
                </div>
            </div>
        </MainLayout>
        
    );
};

export default MyPost;
