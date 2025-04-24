import  styled  from "styled-components";

export const Fundo = styled.div`
    width: 820px;
    height: 256px;
    padding: 16px 16px 16px 32px;
    
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color:#d9d9d9;
    display:flex;
    align-items:flex-start;
    
    div{
       
        display:flex;
        flex-direction:column;
        
        margin-left:15px;
        justify-content:space-between;
    }

`

export const Imagem = styled.img`
    height: 220px;
    
    border: 2px solid #005cff;
    border-radius:150px;
    margin-top:2px;
`

export const Nome = styled.div`
    font-size: 14px;
    color:#005cff;
    margin-top:55px;
`

export const Descricao = styled.div`

    margin-top:16px;
    font-size: 15px;
    max-width:440px;
   
`

