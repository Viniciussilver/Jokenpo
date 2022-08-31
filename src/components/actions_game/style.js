
import styled from 'styled-components';


export const Action = styled.button`
    width:72px;
    height:72px;
    border-radius:50%;
    cursor:pointer;
    background-color: #1A1A1A;
    border-color: #ececec;
    

    &:hover{
        background-color: #ececec;
        opacity: ${(props) => props.disabled ? '1' : '0.9' };
    }
    &:active {
        opacity: ${(props) => props.disabled ? '1' : '0.4' };
    }

`;