import { Descricao, Fundo, Imagem, Nome } from "./style"

type CardProps = {
    nome: string;
    bio: string;
    avatar: string;
  };


function Card({ avatar,nome, bio }: CardProps) {
  
   
      
    return (
      <>
        <Fundo>
            <Imagem src={avatar}>
            </Imagem>
            <div>
                <Nome>
                    <h2>{nome}</h2>
                </Nome>
                <Descricao>
                    <p>{bio}</p>
                </Descricao>
            </div>
        </Fundo>
      </>
    )
  }
  
  export default Card