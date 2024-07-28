//캘린더로 바꾸기
import { Link } from 'react-router-dom';
import MyCalendar from 'react-calendar';
import MainLayout from '../components/mainlayout';

const Introduce = () =>{
    
    return(
        
        <MainLayout>
            <MyCalendar/>
        </MainLayout>
        
    )
};

export default Introduce;