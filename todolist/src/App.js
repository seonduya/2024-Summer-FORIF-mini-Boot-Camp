import './App.css';
import React, { useCallback, useState, useRef, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';


import Header from './components/header';
import Layout from './components/AppLayout'


import { ThemeProvider, useTheme } from './context/themeProvider';
import PostsContextProvider, { PostsContext } from './store/postContext';
import TodosContextProvider from './store/todoContext';
import { Globalstyle } from './theme/GlobalStyle';

import Introduce from './pages/Introduce';
import Login from './pages/Login';
import TodoPage from './pages/TodoPage';
import Board from './pages/Board';
import MyPost from './pages/MyPost';
import Writing from './pages/writing';
import PostUpdate from './pages/update';


function App() {
  const {themeMode, toggleTheme}  = useTheme();
  console.log(themeMode);  

  const location = useLocation();

  
  return (
    <div className="App">
     <Layout/>
     {location.pathname !== "/" && <Header />}
          <Globalstyle/>
          <Suspense fallback={<div>...loading</div>}>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/calendar" element={<Introduce themeMode={themeMode}/>}/>
              <Route path="/todo" element={<TodoPage/>}/>

              <Route path="/board" element={<Board/>} />
              <Route path='/writing' element={<Writing/>}/>
              <Route path='/board/:postId' element={<MyPost/>}/>
              <Route path='/board/:postId/update' element={<PostUpdate/>}/>
              
            </Routes>
          </Suspense>
     
    

      {/* <InterationSample/> */}
      <div>
          <div style={{height:'100px'}}>

          </div>
          <div style={{padding:'25px', fontSize:'25px',fontFamily:'ShinDongYup Handwriting',fontWeight:1000}}>
          Created by seonduya 
          </div>
      </div>
    
</div>
    
  );
  
}

export default function AppWrapper(){
  return(
    <ThemeProvider>
      <PostsContextProvider>
        <TodosContextProvider>
          <Router>
              <App />
          </Router>
          </TodosContextProvider>
        </PostsContextProvider>
      </ThemeProvider>
    )
};
