import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledProjetos = styled.section`
  display: flex;
  flex-direction: column;
  hr {
    border: none; /* Removes the default border */
    height: 2px; /* Sets the thickness */

    background-color: #f0f0f0;
  }
`;

const StyledMainProjetos = styled.section`
  .container {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 20px;
    max-width: 1200px;
    margin: 100px auto;
  }

  .featured-project {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    .image-placeholder {
      background: #d3d3d3;
      height: 200px;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.5em;
      margin-bottom: 10px;
    }

    .project-details {
      p {
        margin: 10px;
      }
    }

    .tags span {
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 0.9em;
      margin-right: 10px;
    }
  }

  .recommended-projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }


  .project-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    .image-placeholder {
      background: #d3d3d3;
      height: 120px;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .image-placeholder img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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

const StyledNovosProjetos = styled.section`
  max-width: 1200px;
  margin: 100px auto;
  .recommended-projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  .project-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    .image-placeholder {
      background: #d3d3d3;
      height: 180px;
      min-width: 360px;
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

function Projetos() {
  return (
    <StyledProjetos>
      <StyledMainProjetos>
        <div className="container">
          <NavLink to={"/projeto"}>
            <div className="featured-project">
              <div className="image-placeholder"></div>
              <h3>Bateria a base de sódio</h3>
              <p>Lorem ipsum</p>
              <div className="project-details">
                <p>4 dias restantes • 358% financiado</p>
                <p>
                  Descrição do produto, aqui vai informações importantes, mas
                  sendo curto.
                </p>
                <div className="tags">
                  <span>Mobilidade Urbana</span>
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
          </NavLink>

          <div className="recommended-projects">
            <div className="project-card">
              <div className="image-placeholder">
                <img src={"/energia eolica flutuante offshore.jpeg"} alt="Descrição da imagem" />
              </div>
              <h3>energia eolica flutuante offshore</h3>
              <span>4 dias restantes • 358% financiado</span>
            </div>
            <div className="project-card">
              <div className="image-placeholder">
              <img src={"/Energia geotérmica.jpeg"} alt="Descrição da imagem" />
              </div>
              <h3>Energia geotérmica</h3>
              <span>4 dias restantes • 358% financiado</span>
            </div>
            <div className="project-card">
            <div className="image-placeholder">
            <img src={"/motor energia solar.jpeg"} alt="Descrição da imagem" />
            </div>
            <h3>motor energia solar</h3>
            <span>4 dias restantes • 358% financiado</span>
            </div>
            <div className="project-card">
              <div className="image-placeholder">
              <img src={"/painel solar em estradas.jpeg"} alt="Descrição da imagem" />
              </div>
              <h3>Paineis solares em estradas</h3>
              <span>4 dias restantes • 358% financiado</span>
            </div>
          </div>
        </div>
      </StyledMainProjetos>
      <hr />
      <StyledNovosProjetos>
        <div className="recommended-projects">
          <div className="project-card">
          <div className="image-placeholder">
            <img src={"/painel solar em estradas.jpeg"} alt="Descrição da imagem" />
            </div>
            <h3>Paineis solares em estradas</h3>
            <span>4 dias restantes • 358% financiado</span>
          </div>
          <div className="project-card">
          <div className="image-placeholder">
            <img src={"/Energia solar.jpeg"} alt="Descrição da imagem" />
            </div>
            <h3>Energia solar</h3>
            <span>4 dias restantes • 358% financiado</span>
          </div>
          <div className="project-card">
          <div className="image-placeholder">
            <img src={"/Energia biomassa.jpeg"} alt="Descrição da imagem" />
            </div>
            <h3>Energia biomassa</h3>
            <span>4 dias restantes • 358% financiado</span>
          </div>
        </div>
      </StyledNovosProjetos>
      <hr />
    </StyledProjetos>
  );
}

export default Projetos;