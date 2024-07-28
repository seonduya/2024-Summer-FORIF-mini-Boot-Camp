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
        padding: '0px 50px',
        borderRadius: '30px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
                <ImageContainer>
                    <StyledImage src={animal}/>
                </ImageContainer>

                 <div style={ContainerStyle}>
                    <div style={{display:'flex', width:'100%',textAlign:'left', padding:'30px 0px',fontSize:'30px',fontWeight:'800'}}>
                        <div style={{width:'70%'}}>게시판</div>
                        <Link to='/writing'> <button style={buttonStyle}> 글 작성하기</button> </Link>
                    </div>
                    
                    <div style={{width:'100%', height:'430px', display:'flex', flexDirection:'column', gap:'8px'}}>
                    {currentItems.map((item) => (
                        <PostItem key={item.id} item={item} />
                    ))}
                    </div>
                    
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

const ImageContainer = styled.div`
    width: 30%;
    height: 100%;
    max-width: 300px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;

const StyledImage = styled.img`
    height: auto;
`;
