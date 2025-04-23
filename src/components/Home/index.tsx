import { useState } from "react"
import { Container } from "../../style"
import Card from "../Card"
import Feedback from "../Feedback"
import Input from "../Input"
import { Fundo } from "./style"

function Home() {
    const [entrada, setEntrada] = useState("");
    const [usuario, setUsuario] = useState({ nome: "", bio: "", foto: "" });
    const [erro, setErro] = useState(false);
  
    const buscarUsuario = () => {
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
        });
    };
  
    return (
      <Fundo>
        <Container>
          <Input
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            onClick={buscarUsuario}
          />
          {erro ? (
            <Feedback />
          ) : (
            <Card nome={usuario.nome} bio={usuario.bio} avatar={usuario.foto} />
          )}
        </Container>
      </Fundo>
    );
  }
  
export default Home;
  