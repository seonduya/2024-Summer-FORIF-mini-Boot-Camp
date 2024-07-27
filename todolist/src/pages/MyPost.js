import React, { useContext, useState, useEffect} from "react";
import { Link,useParams, useNavigate } from "react-router-dom";
import Navigation from "../components/navbutton";
import '../App.css';

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

        width:'700px',
        heigt:'400px',
        padding:'50px',
        borderRadius:'30px',
        backgroundColor:'#FFFFFF',
        
    }

    const TextLayout ={
        textAlign:'left',
    }
    
    const titleStyle={
        fontSize:'30px',
        fontWeight:600,
    }

    return (
        <div >
            <Navigation/>
            <div  style={BoxStyle}>
            <div style={TextLayout}>
                <p style={titleStyle}>{post.title}</p>
                <div>{post.date}</div>
                <div>{post.content}</div>
            </div>
                <Link to={`/board/${postId}/update`}> <button>수정하기</button> </Link>
                <Link to='/board'> <button>돌아가기</button> </Link>
            
            </div>
        </div>
        
    );
};

export default MyPost;
