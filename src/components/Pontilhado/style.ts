import styled from "styled-components";

export const Quadrado = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(17, 8px);
    grid-auto-rows: 8px;  
    gap: 6px;
    z-index:-1;
    top:3.3%;
    left: 5.3%;
`

export const Circulo = styled.div`
    width: 6px;
    height: 6px;
    background: #272727;       
    border-radius: 50%;
    margin-top:8px;    
`