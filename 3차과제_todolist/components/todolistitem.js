import React from "react";
import Checked from '../assets/img/check.svg'
import Unchecked from '../assets/img/uncheck.svg'
import Delete from '../assets/img/delete.svg'
import { useState } from "react";


function TodoItem({todo}) {
    const {id, text, checked} = todo;

    const itembox ={
        display:'flex',
        alignItems:'cneter',
        width: '739px',
        height: '122px',
        grid:"",
        backgroundColor:'#FFFFFF',
        border:'#000000',
        borderRadius:'16px',
        padding:'15px',
        margin:'10px',
        boxShadow: '0px 8px 8px 0px rgba(67, 105, 150, 0.10)',
        
    }

    const itemboxchecked ={
        display:'flex',
        alignItems:'cneter',

        width: '739px',
        height: '122px',
        grid:"",

        color:'#BCBCBC',
        backgroundColor:'#F7F7F7',
        border:'#000000',

        borderRadius:'16px',
        padding:'15px',
        margin:'10px',
        boxShadow: '0px 8px 8px 0px rgba(67, 105, 150, 0.10)',

        textDecoration: 'line-through',
        
    }


    return(
        
        <div className="TodoItem" style={itembox} >
        <div className='center' style={{gap:'35px'}}>
            <img src={Unchecked} style={{width: '50px', height: '50px'}}/>
            <div style={{width:'528px', textAlign:'left'}}>
                <p style={{fontSize:'30px',fontWeight: 700}}>{text}</p>
                <p style={{fontSize:'23px', color:'#BCBCBC'}}>date</p>
            </div>
            <img src={Delete} style={{width: '35px', height: '35px'}}/>
        </div>

        </div>

        
        
    );
}

export default TodoItem;


{/* <div style={itemboxchecked}>
<div className='center' style={{gap:'35px'}}>
    <img src={Checked} style={{width: '50px', height: '50px'}}/>
        <div style={{width:'528px', textAlign:'left'}}>
            <p style={{fontSize:'30px',fontWeight: 700}}>투두리스트 만들기. 오늘까지!!!</p>
            <p style={{fontSize:'23px', color:'#BCBCBC'}}>date</p>
        </div>
        <img src={Delete} style={{width: '35px', height: '35px'}}/>
</div>
</div> */}
