import React,{useContext, useState} from "react";
import { Link } from "react-router-dom";

import { PostsContext } from "../store/postContext";

import PostItem from "../components/postitem";
import MainLayout from "../components/mainlayout";
import animal from "../assets/img/blueanimal.png";
import Pagination from "react-js-pagination";
import styled from "styled-components";



const Board = () => {
    const {datalist} = useContext(PostsContext);
    const[page,setPage] = useState(1);
    const itemsPerPage= 5;

    const handlePageChange = (page)=>{
        setPage(page);
    };

    // Calculate the data to display for the current page
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = datalist.slice(indexOfFirstItem, indexOfLastItem);

    const ContainerStyle = {
        width: '65%',
        height:'608px',
        padding: '10px',
        borderRadius: '30px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center', 
        textAlign:'left',

        backgroundColor: '#FFFFFF',
    };
    

    const buttonStyle = {
        width :'200px',
        height : '50px',
        borderRadius:'10px',

        backgroundColor:'#3893FF',
        border:'None',
        color:'white',
        fontSize:'20px',
        fontWeight:'700',
        textDecoration:'none',
    }

    return(
        <MainLayout>
            <div style={{display:"flex", gap:'10px'}}>
                <div style={{width:'30%'}}>
                    <img src={animal}/>
                 </div>

                 <div style={ContainerStyle}>
                    <div style={{textAlign:'left', padding:'0px 60px ', fontSize:'30px',fontWeight:'800'}}>
                        게시판
                    </div>
                    <div>
                    {currentItems.map((item) => (
                        <PostItem key={item.id} item={item} />
                    ))}
                    </div>
                    <Link to='/writing'> <button style={buttonStyle}> 글 작성하기</button> </Link>
                    <PaginationWrapper>
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={datalist.length}
                        pageRangeDisplayed={5}
                        prevPageText={"‹"}
                        nextPageText={"›"}
                        onChange={handlePageChange}// 페이지 변경을 핸들링하는 함수
                        />
                    </PaginationWrapper>
                </div>
        </div>
        </MainLayout>
    );
};
export default Board;

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;

    ul {
        display: flex;
        list-style: none;
        padding: 0;
    }

    li {
        margin: 0 5px;
    }

    a {
        text-decoration: none;
        color: #3893FF;
        font-weight: 700;
        cursor: pointer;
    }
`;