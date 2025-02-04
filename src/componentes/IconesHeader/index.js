import perfil from "../../imagens/perfil.svg"
import sacola from "../../imagens/sacola.svg"
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const icones = [perfil, sacola];

export default function IconesHeader(){
    return(
        <Icones>
          { icones.map((icone) => (
            <Icone key={icone.toString()}><img src={icone} alt={icone}></img></Icone>
          )) }
        </Icones>
    )
}