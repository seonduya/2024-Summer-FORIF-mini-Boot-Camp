
import '../App.css';
import React, { useCallback, useState, useRef, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ppumi from '../assets/img/ppumi.png';

import TodoList from '../components/todolist';
import TodoInsert from '../components/textfield';



//{todo, onRemove, onToggle}
const TodoPage = ()=>{
  const [todos, setTodos] = useState([
  {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
  },  
  {
      id: 3,
      text: '잘하고 있...어요',
      checked: false,
      },  
]);

const nextID = useRef(4);
const onInsert = useCallback(
  (text) => {
    const todo = {
      id: nextID.current,
      text,
      checked:true,
    };
    setTodos(todos.concat(todo));
    nextID.current++;
  },
  [todos],
);


const onRemove = useCallback(
(id) => {
setTodos(todos.filter((todo)=> todo.id !== id));
},
[todos],
);


const onToggle = useCallback(
(id)=> {
setTodos(
  todos.map((todo) => 
    todo.id === id ? {...todo, checked: !todo.checked} : todo,
),
);
},
[todos],
);

    return(
        <div>

            <div  style={{height:'800px'}}>
            <div className='center' style={{height:'500px'}}> 
            <div className='center'>
            
            <div style={{height:'500px'}}>            
            <img src={ppumi} className='icon'/>
     </div>
     
        </div>
        </div>
        <TodoInsert onInsert={onInsert} style={{alignItems:'center'}}/>
    </div>
        <div className='whitebox' >
            <p style={{color:'black',fontSize : '50px',fontFamily:'Recipekorea'}}>To-Do List</p>
            <div>
            <TodoList
                todos={todos}
                onRemove={onRemove}
                onToggle={onToggle} />
            </div>
        </div>

        </div>
    );
};

export default TodoPage;
