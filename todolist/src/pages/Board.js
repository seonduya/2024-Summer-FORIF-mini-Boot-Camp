import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/navbutton";
import PostItems from "../components/postitems";

const Board = () => {

    const buttonStyle = {
        width :'200px',
        height : '50px',
        borderRadius:'10px',

        backgroundColor:'#3893FF',
        border:'None',
        color:'white',
        fontSize:'20px',
        fontWeight:'700',
        textDecoration:'none',
    }

    return(
        <div>
            <Navigation/>
            <div style={{display:"flex", gap:'10px'}}>
                <div style={{width:'300px', backgroundColor:'#000000'}}>
                    <img />
                 </div>
                 <div className="whitebox" style={{backgroundColor:'#FFFFFF'}}>
                    <PostItems/>
                    <Link to='/writing'> <button style={buttonStyle}> 글 작성하기</button> </Link>
            </div>
        </div>
        </div>
    );
};

export default Board;

        //왼쪽 오른쪽
        //오른쪽은 반복으로 나타내야 함.
        //포스트 컴포넌트 : PostItem -> map으로
        //포스트 리스트 : PostList