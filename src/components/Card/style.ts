import  styled  from "styled-components";

export const Fundo = styled.div`
    width: 820px;
    height: 264px;
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
    height: 234px;
    object-fit: cover;
    
    border-radius:150px;
`

export const Nome = styled.div`
    font-size: 16px;
    color:#14b86c;
     margin-top:62px;
`

export const Descricao = styled.div`

    margin-top:16px;
    font-size: 16px;
    max-width:440px
   
`

