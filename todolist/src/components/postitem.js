import React,{useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../store/postContext";

function PostItem(){

    const {datalist,handleEdit,handleDelete} = useContext(PostsContext);

    const postItemStyle = {
        
        width:'60%',
        padding:'20px',
        margin:'10px',
        borderRadius:'14px',

        backgroundColor:'#F6F6F6',
        color:'black',
        fontStyle:'none',
        display:'flex',
        alignItems:'center',
        textDecoration:'none',
    }


    return(
        <Link to='/mypost' style={postItemStyle}>
            {datalist.map((item,index)=>(
                <tr key={index}>
                    <td>{item.contents}</td>
                    <td>{item.yesno}</td>
                    <p onClick={()=> handleEdit(item.id)}>수정하기| </p>
                    <p onClick={()=> handleDelete(item.id)}>삭제하기</p>
                </tr>
            ))}
            <div style={{textAlign:'left', width:'70%'}}>
            <div style={{fontSize:'20pt'}}>제목입니다</div>
            <div>2020.00.00</div>
            </div>
            <div>
                 <p onClick={()=> handleEdit()}>수정하기| </p>
                 <p onClick={()=> handleDelete()}>삭제하기</p>
            </div>
        </Link>
    );
};

export default PostItem;
