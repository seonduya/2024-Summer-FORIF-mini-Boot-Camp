import React,{useState, useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostsContext } from "../store/postContext";

function PostItem({item}){

    const {datalist,handleDelete} = useContext(PostsContext);
    const navigate = useNavigate();

    const titleStyle ={
        fontSize:'20px',
        fontWeight:'600',
        textDecoration:'none',
    }

    const postItemStyle = {
        height:'36px',
        width:'100%',
        padding:'20px',
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
                <div key={item.id} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div onClick={()=> navigate(`/board/${item.id}`)} style={postItemStyle}>
                        <div  style={{display:'flex', flexDirection:'column',gap:'8px', textAlign:'left', width:'100%'}}>
                            <h2 style={titleStyle}>{item.title}</h2>
                            <p>{item.date}</p>
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
            
        </div>
        
    );
};

export default PostItem;
