import { Link } from "react-router-dom";

const About=()=>{
    return(
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 사용해보는 프로젝트요.</p>
            <Link to='/'>home</Link>
        </div>
    );
};

export default About;