
import '../App.css';
import React, { useCallback, useState, useRef, useContext} from 'react';
import MainLayout from '../components/mainlayout';


import ppumi from '../assets/img/ppumi.png';

import TodoList from '../components/todolist';
import TodoInsert from '../components/textfield';
import {TodosContext} from '../store/todoContext';


const TodoPage = ()=>{
  const [todos, setTodos] = useState('');
  const TodoContext = useContext(TodosContext);

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

const whitebox= {
  width: '80%',
  display:'flex',
  flexDirection:'column',
  gap:'30px',

  backgroundColor: 'rgba(255, 255, 255, 0.70)',
  borderRadius: '32px',
  border: '2px solid #FFF',
  
  padding: '50px 20px',
  margin: '0px auto', /*수평 - 중간 배열*/
  flexShrink: 0,
}

    return(
        <MainLayout>
        <div  style={{height:'700px', display:'flex', flexDirection:'column', alignItems:'center'}}>
              <div style={{height:'500px'}}>            
                <img src={ppumi} className='icon'/>
              </div>
              <TodoInsert onInsert={onInsert}/> 
        </div>

        <div style={whitebox} >
            <p style={{color:'black',fontSize : '50px',fontFamily:'Recipekorea'}}>To-Do List</p>
            <div>
            <TodoList/>
            </div>
        </div>
        
        </MainLayout>
    );
};

export default TodoPage;
