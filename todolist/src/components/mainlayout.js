import React from 'react';
import styled from 'styled-components';

const MainLayout = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default MainLayout;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;

    display: flex;
    flex-direction:column;
    align-items:center;

    margin: 0 auto;
    padding: 20px;  
    
    box-sizing: border-box; 

`;
// 패딩 포함하여 크기 계산