import React from "react";
import TodoItem from '../components/todolistitem';

function TodoList({todos}){
    return(
        <ul className="TodoList">
            {todos.map((todo)=>(
                <TodoItem
                    todo={todo}
                    key={todo.id}/>
            ))}

        </ul>
    )
}

export default TodoList;