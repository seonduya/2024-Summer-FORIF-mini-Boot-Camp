import React, { useCallback, useState, useContext } from "react";
import '../App.css';
import { TodosContext } from "../store/todoContext";

export default function TodoInsert() {
    const {handleAdd} = useContext(TodosContext);
    const [value, setValue]= useState("");
    const [date, setDate] =useState("");

    const onChange = useCallback( e=>
        {setValue(e.target.value);},[])


    function handleSubmit(event){
        event.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];
        const todo = {
            value: value,
            date: currentDate,
        };

        handleAdd(todo);
        setValue('');
    }

    const fieldstyle = {
        width:'80%',
        height: '80px', 
        borderRadius:'50px',
        padding:'0px 35px ',
        
        
        backgroundColor:'#F1F1F1',
        border:'#FFF',
        color:'#323232',/*#BCBCBC*/

        fontSize:'22px',        
        fontWeight:500,
    };

    const buttonStyle = {
        width:'178px',
        height: '80px',        
        borderRadius:'30px',

        color: 'white',
        backgroundColor:'#3893FF',
        border:'#FFFFFF',

        fontSize: '26px',
        fontWeight: 700,
        cursor:'pointer',
    };

    return (
        <form onSubmit={handleSubmit} style={{width:'80%'}}>
            <div style={{display:'flex', alignItems:'center', width:'100%', gap:'10px'}}>
                <input 
                    value={value}
                    onChange={(e) =>setValue(e.target.value)}
                    type="text" name="contents" id='contents' 
                    required
                    style={fieldstyle} placeholder="해야할 일을 적어주세요.">
                </input>
                <button type="submit" style={buttonStyle}>Enter</button>
            </div>
                
        </form>
    );
};

