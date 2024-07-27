import React,{useState, useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostsContext } from "../store/postContext";

function PostItem(){

    const {datalist,handleDelete} = useContext(PostsContext);
    const navigate = useNavigate();

    const titleStyle ={
        fontSize:'20px',
        fontWeight:'800',
        textDecoration:'none',
    }

    const postItemStyle = {
        
        width:'80%',
        padding:'20px',
        margin:'10px',
        borderRadius:'14px',
        gap:'10px',

        backgroundColor:'#F6F6F6',
        color:'black',
        fontStyle:'none',
        display:'flex',
        alignItems:'center',
        textDecoration:'none',
        cursor: 'pointer',
    }


    return(
        <div>
            {datalist.map((item)=>(
                <div key={item.id}>
                    <div onClick={()=> navigate(`/board/${item.id}`)} style={postItemStyle}>
                        <div  style={{textAlign:'left', textDecoration:'none', width:'70%'}}>
                            <h2 style={titleStyle}>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                        <button onClick={(event) => {
                            event.stopPropagation();
                            navigate(`/board/${item.id}/update`);
                        }}> 수정하기</button> | 
                        <button onClick={()=> {
                                handleDelete(item.id);
                                navigate('/board');
                            }}> 삭제하기 </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostItem;
