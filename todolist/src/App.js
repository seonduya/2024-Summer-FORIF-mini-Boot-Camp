import './App.css';
import React, { useCallback, useState, useRef, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Navigation from './components/navbutton';
import TodoList from './components/todolist';
import TodoInsert from './components/textfield';
import FeatureButton from './components/feature';
import FeatureList from './components/featurelist';

import Main from './components/Main';
import Sub from './components/Sub';
import { ThemeProvider, useTheme } from './context/themeProvider';
import { Globalstyle } from './theme/GlobalStyle';

import ppumi from './assets/img/ppumi.png';


function App() {
  const {themeMode, toggleTheme}  = useTheme();
  console.log(themeMode);  

  const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트 기초 알아보기',
            checked: true,
        },  
        {
            id: 2,
            text: 'ㅎ...진짜 디지겠네..^^;;',
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

  
  
  return (
    <div className="App">
     <Header themeMode={toggleTheme}/> 
     <Router>
          <Globalstyle/>
          <Suspense fallback={<div>...loading</div>}>
            <Routes>
              <Route exact path="/" element={<Main themeMode={themeMode}/>}/>
              
              <Route exact path="/sub" element={<Sub/>}/>
            </Routes>
            <Navigation  mode={themeMode} />
          </Suspense>
     </Router>

     <div style={{height:'500px'}}>
        <img src={ppumi} className='icon' />
     </div>
    
    <div  style={{height:'300px'}}>
        <div className='center' style={{height:'150px'}}> 
        <div className='center'>
            <FeatureButton/>
            <FeatureList/>
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
      <div/>
    </div>
    
    <div style={{height:'150px'}}>

    </div>
    <div style={{padding:'25px', fontSize:'25px',fontFamily:'ShinDongYup Handwriting',fontWeight:1000}}>
    Created by seonduya 
    </div>

</div>
    
  );
}

export default function AppWrapper(){
  return(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
};
