import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/navbutton";
import '../App.css';

import {PostsContext} from "../store/postContext";


function MyPost(){
    const {datalist,handleEdit,handleDelete} = useContext(PostsContext);

    const BoxStyle ={

        width:'700px',
        heigt:'400px',
        padding:'30px',
        borderRadius:'30px',
        backgroundColor:'#FFFFFF',
        
    }

    return (
        <div >
            <Navigation/>
            <div  style={BoxStyle}>
            {datalist.map((item, index) => (
            <div>
                <div>{item.contents}</div>
                <div>2000.02.16</div>
                <div>본문입니다.</div>
                <Link to='/board'> <button>돌아가기</button> </Link>
            </div>
            ))}
            </div>
            <div  style={BoxStyle}>
            
            <div>
                <div>제목은 여기</div>
                <div>2000.02.16</div>
                <div>본문입니다.</div>
                <Link to='/board'> <button>돌아가기</button> </Link>
            </div>
            
            </div>
        </div>
        
    );
};

export default MyPost;

//post ->우측엔 postitems -> 그 하위엔 postitem