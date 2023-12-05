import styled from 'styled-components'

export const StyledButton = styled.button`
    color: #fcba03;
    margin:10px;
    padding:10px;

`
export const StyledTitle = styled.h2`
    color: ${(props)=>props.isRed ? '#de270b' : '#fcba03'};
    padding:${false ? "10px" : "40px"};
    margin:10px;
    background-color: ${(props)=>props.bgColor};

`
export const StyledParagraph = styled.p`
    color: #fcba03;
    padding:10px;
    margin:10px;
`
export const StylesContainer = styled.div`
    text-align:center;
    border:1px solid #7948a3;
    background-color: #83d6c7;
    padding:10px;
    margin:10px;

`