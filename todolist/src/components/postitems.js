import React,{useState, useContext} from "react";
import PostItem from "./postitem";
import { PostsContext } from "../store/postContext";

function PostItems(){
    
    const {datalist,handleEdit,handleDelete} = useContext(PostsContext);

    const ItemsStyle = {
        gap:'15px',
    }

    return(
        <div style={ItemsStyle}> 
            <PostItem/>
            <PostItem/>
            {datalist.map((item, index) => (
                <React.Fragment key={index}>
                <li>{item.contents}</li>
                <li>{item.yesno}</li>
                </React.Fragment>
            ))}
        </div>
    );
};

export default PostItems;