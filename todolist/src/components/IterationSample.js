import React, { useState } from "react";

const IterationSample = () => {
    const [names,setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'사람'},
        {id:3, text:'눈'}
    ]);
    
    const [inputText, setInputText]= useState('');
    const [nextId, setNextId] = useState(4);

    const onChange = e=> setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        })
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    };

    const nameList = names.map(name => <li key={name.id}>{name.id}{name.text}</li>);
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}> 추가 </button>
            <ul>{nameList}</ul>
        </>
    )
};

export default IterationSample;