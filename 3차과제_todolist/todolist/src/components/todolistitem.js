import React from "react";
import Checked from '../assets/img/check.svg'
import Unchecked from '../assets/img/uncheck.svg'
import Delete from '../assets/img/delete.svg'


function TodoItem({todo, onRemove, onToggle}) {
    const {id, text, checked} = todo;
    

    const itembox ={
        display:'flex',
        alignItems:'cneter',
        width: '739px',
        height: '122px',
        color: '#323232',
        backgroundColor:'#FFFFFF',
        border:'#000000',
        borderRadius:'16px',
        padding:'15px',
        margin:'20px -2px',
        boxShadow: '0px 8px 8px 0px rgba(67, 105, 150, 0.10)',
        
    }

    const itemboxchecked ={
        display:'flex',
        alignItems:'cneter',
        width: '739px',
        height: '122px',

        color:'#BCBCBC',
        backgroundColor:'#F7F7F7',
        border:'#000000',

        borderRadius:'16px',
        padding:'15px',
        margin:'20px 2px',
        boxShadow: '0px 8px 8px 0px rgba(67, 105, 150, 0.10)',

        textDecoration: 'line-through',   
    }

    return(
        <div className={{checkbox:true}} >
            {checked ? 
            <div className="TodoItem" style={itembox}>
                <div className='center' style={{gap:'35px'}}>
                    <img src={Unchecked} style={{width: '50px', height: '50px'}} onClick={()=> onToggle(id)}/>
                    <div style={{width:'528px', textAlign:'left'}}>
                        <p style={{fontSize:'30px',fontWeight: 700}}>{text}</p>
                        <p style={{fontSize:'23px', color:'#BCBCBC'}}>2024.02.16</p>
                    </div>
                    <img src={Delete} style={{width: '35px', height: '35px'}} onClick={()=> onRemove(id)}/>
                </div>
                </div>
                :
                <div className="TodoItem" style={itemboxchecked}>
                <div className='center' style={{gap:'35px'}}>
                    <img src={Checked} style={{width: '50px', height: '50px'}} onClick={()=> onToggle(id)}/>
                    <div style={{width:'528px', textAlign:'left'}}>
                        <p style={{fontSize:'30px',fontWeight: 700}}>{text}</p>
                        <p style={{fontSize:'23px', color:'#BCBCBC'}}>2024.02.16</p>
                    </div>
                    <img src={Delete} style={{width: '35px', height: '35px'}} onClick={()=> onRemove(id)}/>
                </div>
                </div>
                }
        </div>
        
    );
}

export default TodoItem;
