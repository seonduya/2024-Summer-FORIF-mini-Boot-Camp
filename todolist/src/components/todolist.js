import React, { useContext } from "react";
import TodoItem from '../components/todolistitem';
import { TodosContext } from "../store/todoContext";

function TodoList(){
    const {todolist}= useContext(TodosContext);
    return (
        <div className="TodoList" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap:'16px' }} >
            {todolist.map((item)=>(
                <TodoItem 
                    key={item.id} 
                    item={item}/>
            ))}
            
        </div>
    )
}

export default TodoList;