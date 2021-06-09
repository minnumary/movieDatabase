import styled from 'styled-components';

export const MainWrapper = styled.div`
background-color: rgb(255 255 255 / 38%);
background-blend-mode: exclusion;
height: 100vh;
padding: 0 10%;
`;
export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const LogoSection = styled.div`
    position: relative;
    width: 50%;
`;

export const FilterSection = styled.div`
    position: relative;
    width: 50%;
    text-align: left;
`;

export const Dropdown = styled.div`
position: absolute;
background: #f6f6f6f2;
WIDTH: 100%;
margin: 0 10px;
top: 55px;
`;

export const Options = styled.div`
    padding: 10px;
    cursor: ${props => props.pointer ? "pointer" : "auto"};
`;

export const DetailSectionWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    font-weight: bold;
    background: black;
    color: white;
`;

export const Input = styled.input`
padding: 10px;
margin: 10px;
width: 100%;
color: black;
background: transparent;
border: none;
border-radius: 3px;
outline: 0;
border-bottom: 1px solid;
font-size: 20px;
`;

export const DetailsSection = styled.div`
`;
