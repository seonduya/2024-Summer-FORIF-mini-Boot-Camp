import React, { useCallback, useState } from "react";
import '../App.css';

function TodoInsert({onInsert}) {
    const fieldstyle = {
        
        alignItems: 'center',
        width: '617px',
        borderRadius:'50px',
        padding:'35px',
        
        backgroundColor:'#F1F1F1',
        border:'#FFF',
        color:'#323232',/*#BCBCBC*/

        fontSize:'22px',        
        fontWeight:500,
    };

    const buttonStyle = {
        width:'178px',
        height: '80px',        
        borderRadius:'10px',

        color: 'white',
        backgroundColor:'#3893FF',
        border:'#FFFFFF',

        fontSize: '26px',
        fontWeight: 700,
    };
    const [value, setValue]= useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[])
    const onSubmit = useCallback(
        e=> {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },[onInsert,value])

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
                <input 
                onChange={onChange}
                value={value}
                style={fieldstyle} placeholder="해야할 일을 적어주세요."></input>
                <button type="submit" style={buttonStyle}>Enter</button>
                <div className='center' style={{gap:'20px'}}></div>
        </form>
    );
};

export default TodoInsert;
