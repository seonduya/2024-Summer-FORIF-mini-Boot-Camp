import React, {useState} from 'react';
import './App.css';

import fb from './assets/images/icon/fb.png';
import insta from './assets/images/icon/insta.png';
import Linkedin from './assets/images/icon/Linkedin.png';
import face from './assets/images/etc/my.jpeg';

import a from './assets/images/skill/bootstrap.svg';
import b from './assets/images/skill/css.svg';
import c from './assets/images/skill/git.svg';
import d from './assets/images/skill/github.svg';
import e from './assets/images/skill/greensock.svg';
import f from './assets/images/skill/html.svg';
import g from './assets/images/skill/icon.svg';
import h from './assets/images/skill/js.svg';
import i from './assets/images/skill/react.svg';
import j from './assets/images/skill/sass.svg';
import k from './assets/images/skill/tailwind.svg';
import l from './assets/images/skill/vscode.svg';

import Project from './component/project';
import Comment from './component/comment';
function App() {
  let name = '이선주';
  let 개발자유형 = '뿌론^또엔드';
  let [이미지,이미지변경]=useState([a,b,c,d,e,f,g,h,i,j,k,l]);
  return (
    <div className="App">
      <header className={`navar`}>
          <ul><a href='#home'>Home</a></ul>
          <ul><a href='#project'>Project</a></ul>
          <ul><a href='#recommend'>Recommend</a></ul>
          <ul><a href='#contact'>Contact</a></ul>
      </header>
      
      <div id='home' className='home'>
        <div className='home-container'>
          <div className='home-textalign'>
            <p className='textbox'>👋 오하요-!</p>
            <h1 className='h1'>신입 {개발자유형} 개발자.<br></br>
            <span style={{color:"LinearGradient(#e66465, #9198e5);"}}>Problem Solver. <br></br></span>
            {name}입니다.</h1>
            <div className='buttons'>
              <div className='button-black'> Github Link</div>
              <div className='button-white'> Resume Link</div>
            </div>
          </div>
          <img src={face} className='home-image'/>

          </div>
      </div>

      <div className='introduce'>
        <h3>
        끊임없이 배우고 집요하게 해결하는 <br>
        </br>{개발자유형} 개발자 {name}입니다.
        </h3>
        <p style={{whiteSpace: 'pre-line'}}> 항상 새로운 기술에 열려 있으며, 문제 해결에 대한 열정으로 프로젝트에 참여합니다. <br></br>
        꾸준한 성장과 협업을 통해 새로운 아이디어를 탐험하고 효과적인 솔루션을 찾는 것을 즐깁니다. <br></br>
        강력한 분석 및 문제 해결 능력으로 효율적이고 확장 가능한 코드를 작성하는 것에 자부심을 가지고 있습니다. <br></br>
        팀과 함께 협력하며, 사용자 중심의 솔루션을 만들기 위해 노력하고 있습니다. <br></br>
        끊임없는 도전을 통해 성장하는 개발자로서 기여하고 싶습니다. </p>
      </div>

      <div className='skill'>
        <h3>
        기술 스택
        </h3>
        <p>지금까지 활용해 본 기술들입니다. 
            넓고 깊은 기술 스택을 얻기 위해 노력하고 있습니다.</p>
        <div className='skill-grid'>
          {이미지.map((image,index)=>{
            return(<img src={image} key={index} className='skill-grid-img'/>)
          })}          
        </div>

      </div>

      <div id='project' className='project'>
        <h3>
        내 프로젝트
        </h3>
        <div className='project-container'>
          <Project />
          <Project />
          <Project />
          </div>
      </div>

      <div id='recommend' className='recommend'>
        <h3>
        함께 개발한 동료들의 평가
        </h3>
        <div className='grid-container'>
          <Comment />
          <Comment />
          <Comment />
        </div>

      </div>
      <div className='says'>
        <h2>
        꼼꼼함과 기술에 대한 집요함으로 어떤 문제든 <br></br>
        해결해내는 백엔드 개발자가 되겠습니다. 
        감사합니다! 😊
        </h2>
      </div>
      
      <div id='contact' className='contact'>
      <div className='contact-box'>
        <img src={fb}/><img src={insta}/><img src={Linkedin}/>
         <p>연락주세요.</p>
         </div>
      </div>
    </div>
  );
}

export default App;
