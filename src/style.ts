import  styled, { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Nunito Sans;
    
  }
`


export const Container = styled.div`
  width: 1024px;
  max-width: 100%;
  margin: 0 auto; 
  
`