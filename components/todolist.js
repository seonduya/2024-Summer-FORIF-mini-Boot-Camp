import React from "react";
import TodoItem from '../components/todolistitem';

function TodoList({todos, onRemove, onToggle}){
    return (
        <ul className="TodoList">
            {todos.map((todo)=>(
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}

        </ul>
    )
}

export default TodoList;