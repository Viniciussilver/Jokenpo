import styled from 'styled-components'

export const ModalStyled = styled.div`
    width:83%;
    background-color: #ececec;
    border-radius: 10px;
    padding: 12px;
    position:absolute;
    top: ${(props) => props.open ? '13%' : '-100%'};
    opacity:  ${(props) => props.open ? '1' : '0'};
    transition: 0.7s ease;
    text-align:center;
`;

export const CloseModal = styled.button`
    width:32px;
    height:32px;
    border-radius:50%;
    color: #ececec;
    cursor:pointer;
    position:absolute;
    top:2%;
    right:2%;
    background-color: #1a1a1a;
    font-weight:700;
    font-size:25px;
    line-height:30px;

    &:hover {
        opacity: 0.8;
    }
   
    

`;