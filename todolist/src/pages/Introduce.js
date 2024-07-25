//캘린더로 바꾸기
import { Link } from 'react-router-dom';
import MyCalendar from 'react-calendar';
import Navigation from '../components/navbutton';

const Introduce = () =>{
    
    return(
        <div>
        <Navigation/>
        <MyCalendar/>
        
        </div>
    )
};

export default Introduce;