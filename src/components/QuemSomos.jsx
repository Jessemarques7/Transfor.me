import styled from "styled-components";

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

  .integrante-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    .image-placeholder {
      background: #d3d3d3;
      height: 240px;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1.2em;
      margin-bottom: 5px;
    }

    div {
      font-size: 0.9em;
      color: #555;
    }
  }
`;

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
          <div className="integrante-card">
            <div className="image-placeholder"></div>
            <h3>Lorem ipsum</h3>
            <span>Lorem ipsum</span>
          </div>
          <div className="integrante-card">
            <div className="image-placeholder"></div>
            <h3>Lorem ipsum</h3>
            <span>Lorem ipsum</span>
          </div>
          <div className="integrante-card">
            <div className="image-placeholder"></div>
            <h3>Lorem ipsum</h3>
            <span>Lorem ipsum</span>
          </div>
          <div className="integrante-card">
            <div className="image-placeholder"></div>
            <h3>Lorem ipsum</h3>
            <span>Lorem ipsum</span>
          </div>
          <div className="integrante-card">
            <div className="image-placeholder"></div>
            <h3>Lorem ipsum</h3>
            <span>Lorem ipsum</span>
          </div>
        </div>
      </div>
    </StyledQuemSomos>
  );
}

export default QuemSomos;
