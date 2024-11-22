import styled from "styled-components";
import Integrante from "./Integrante";

const StyledQuemSomos = styled.section`
  max-width: 1200px;
  margin: 100px auto;

  h2 {
    font-size: 56px;
  }

  p {
    color: #6f6f6f;
    margin: 20px 0;
  }
  .integrantes {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
  }
`;

const Integrantes = [
  {
    Image: "/JESSE.jpeg",
    name: "Jesse",
    description: "RM",
  },
  {
    Image: "/THIAGO.jpg",
    name: "Thiago",
    description: "RM",
  },
  {
    Image: "/LUCAS.png",
    name: "Lucas",
    description: "RM",
  },
  {
    Image: "/DAVI.jpg",
    name: "Davi",
    description: "RM",
  },
];

function QuemSomos() {
  return (
    <StyledQuemSomos>
      <h2>Quem somos?</h2>
      <p>
        Acreditamos que pequenas ações geram grandes mudanças,
        <br /> e cada projeto financiado aqui é um passo em direção a um Brasil
        melhor.
      </p>
      <div>
        <div className="integrantes">
          {Integrantes.map((integrante, index) => (
            <Integrante integrante={integrante} key={index} />
          ))}
        </div>
      </div>
    </StyledQuemSomos>
  );
}

export default QuemSomos;
