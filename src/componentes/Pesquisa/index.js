import styled from "styled-components"
import Input from "../Input"
import { useState } from "react"
import { livros } from "./dadosPesquisa"

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    width: 350px;
    margin: auto;
    margin-bottom: 20px;
    padding: 10px 15px;
    p {
        width: 200px;
        font-size: 18px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 2px solid white;
        border-radius: 10px;
    }
`

// onBlur é um evento que executa quando o usuario digita no input e clica fora  
export default function Pesquisa(){

    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    return(
        <PesquisaContainer>
            <Titulo> Já sabe por onde começa?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={(evento) => {
                    const textoDigitado = evento.target.value.toLocaleLowerCase();
                    const resultadoPesquisa = livros.filter(livro => livro.nome.toLocaleLowerCase().includes(textoDigitado));
                    setLivrosPesquisados(resultadoPesquisa);
                }}  
            />
            {livrosPesquisados.map(livro => (
                <Resultado key={livro.id}>
                    <img src={livro.src} alt="livro" />
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}