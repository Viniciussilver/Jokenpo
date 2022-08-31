import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;

    }
    body {
        height: 100vh;
        background-color: #1A1A1A;
        display: flex;
        justify-content:center;
        
    }
`;

export const Container = styled.div`
    width:428px;
    padding:20px 45px;
    position:relative;
  
`;

export const Flex = styled.div`
    display:flex;
    width:100%;
    align-items: ${(props)=> props.align || 'center'};
    justify-content: ${(props)=> props.justify || 'center'};
    flex-direction: ${(props)=> props.direction || 'row'};
    gap: ${(props)=> props.gap || '16px'};

`;

export const Spacer = styled.div`
    width:100%;
    margin: ${(props)=> props.margin || '20px'};
`;

export const Typography = styled.p`
    font-weight: ${(props)=> props.fontWeight || '600'};
    font-size: ${(props)=> props.size || '18px'};
    line-height: ${(props)=> props.lineHeight || '27px'};
    color: ${(props)=> props.primary ? '#1A1A1A' : '#ECECEC'};

`;

export const Rules = styled.button`
    width:100px;
    font-weight:700;
    font-size:16px;
    line-height:24px;
    background: transparent;
    color: #ECECEC;
    border:none;
    cursor:pointer;

    &:active {
        opacity:0.5;
    }
    

`;

