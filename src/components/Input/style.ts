import styled from "styled-components";



export const BarraPesquisa = styled.div`
    width:520px;
    height:60px;
    display:flex;
    justify-content:space-between;
    border-radius:10px;
    background-color:#FFF;
    padding-left:20px;
   
   
`

export const Entrada = styled.input`
  width:435px;
  border-radius:10px;
  border:none;
  font-size:20px;
  

  &::placeholder {
    font-weight:bold;
    font-size: 18px; 
    color:rgb(0, 0, 0);
    font-weight:600;
  }

  &:focus {
    outline: none;
  }
`

export const Botao = styled.div`
    height:58px;
    width:58px;
    margin: 1px 1px 1px 1px;
    background-color:#005cff;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    cursor:pointer;
    
    &:active {
    transform: scale(0.95); 
    
  }

  
    img{
        width:25px;
        
    }

`