import './App.css';
import React, { useCallback, useState, useRef, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Navigation from './components/navbutton';

import Main from './components/Main';
import Sub from './components/Sub';


import { ThemeProvider, useTheme } from './context/themeProvider';
import PostsContextProvider, { PostsContext } from './store/postContext';
import { Globalstyle } from './theme/GlobalStyle';

import Introduce from './pages/Introduce';
import Login from './pages/Login';
import TodoPage from './pages/TodoPage';

import Board from './pages/Board';
import MyPost from './pages/MyPost';
import Writing from './pages/writing';


function App() {
  const {themeMode, toggleTheme}  = useTheme();
  console.log(themeMode);  

  
  return (
    <div className="App">
  <Main/>
     <Header themeMode={toggleTheme}/> 
     <Router>
          <Globalstyle/>
          <Suspense fallback={<div>...loading</div>}>
            <Routes>
              <Route exact path="/" element={<Introduce themeMode={themeMode}/>}/>
              <Route exact path="/todo" element={<TodoPage/>}/>

              <Route exact path="/board" element={<Board/>} />
                <Route exact path='/mypost' element={<MyPost/>}/>
              <Route exact path='/writing' element={<Writing/>}/>
              
              <Route exact path="/login" element={<Login/>}/>
            </Routes>
          </Suspense>
     </Router>
    

      {/* <InterationSample/> */}
    
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
      <PostsContextProvider>
        <App />
      </PostsContextProvider>
    </ThemeProvider>
  )
};
