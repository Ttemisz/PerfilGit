import { BarraPesquisa, Botao, Entrada } from "./style"

type InputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
  };
  
  function Input({ value, onChange, onClick }: InputProps) {
    return (
      <BarraPesquisa>
        <Entrada
          type="text"
          placeholder="Digite um usuário do GitHub"
          value={value}
          onChange={onChange}
        />
        <Botao onClick={onClick}>
          <img src="lupa.png" alt="Buscar" />
        </Botao>
      </BarraPesquisa>
    );
  }
  

  
  
  export default Input