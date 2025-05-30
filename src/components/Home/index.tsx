import { useState } from "react";

import Card from "../Card";
import Feedback from "../Feedback";
import Input from "../Input";
import { Fundo, FundoFundo, FundoFundoFundo } from "./style";
import Spinner from "../spinner";
import Titulo from "../Titulo";
import Pontilhado from "../Pontilhado";



function Home() {
  const [entrada, setEntrada] = useState("");
  const [usuario, setUsuario] = useState({ nome: "", bio: "", foto: "" });
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const buscarUsuario = () => {
    setLoading(true); 

    fetch(`https://api.github.com/users/${entrada}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setUsuario({
          nome: data.name || "Sem nome",
          bio: data.bio || "Sem bio",
          foto: data.avatar_url || "",
        });
        setErro(false);
      })
      .catch(() => {
        setUsuario({ nome: "", bio: "", foto: "" });
        setErro(true);
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <FundoFundoFundo>
      <FundoFundo>
        <Pontilhado></Pontilhado>
        <Fundo>
          <Titulo></Titulo>
          <Input
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            onClick={buscarUsuario}
          />

          {loading ? (
            <Spinner /> 
          ) : erro ? (
            <>
              <Feedback />
              {setTimeout(() => setErro(false), 5000) }
            </>
          ) : usuario.nome ?(
            <Card nome={usuario.nome} bio={usuario.bio} avatar={usuario.foto} />
          ) : (
            <></>
          )}    
        </Fundo>
      </FundoFundo> 
    </FundoFundoFundo>
    
  );
}

export default Home;
