import React,{useState} from "react";
import cut1 from "../../src/assets/images/project/cut1.png";
import cut2 from "../../src/assets/images/project/cut2.png";
import cut3 from "../../src/assets/images/project/cut3.png";

export default function Project() {

    let [프로젝트명,프로젝트명변경] = useState(['Sheepify States','FORIF 설계하기','티끌모아맥북']);
    let [프로젝트설명,프로젝트설명변경] = useState('React, Typescript, MobX인기 있는 Sheepify 앱을 위해 귀여운  <br> 스타일로 빈 상태 화면을 디자인했습니다.');

    return <div className='project-box'>
            <div className='project-text'>
                <p className="project-title">{프로젝트명[0]}</p>
                <p>React, Typescript, MobX인기 있는 Sheepify 앱을 위해 귀여운  <br></br> 스타일로 빈 상태 화면을 디자인했습니다.</p>
                <div className="project-links">
                    <p>Notion</p>
                    <p>gitgub</p>
                </div>
            </div>
            <div className='project-photo'>
                <img className="project-img" src={cut1}/>
                <img className="project-img" src={cut2}/>
                <img className="project-img" src={cut3}/>

            </div>
        </div>
}