import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StyledExplore = styled.main`
  hr {
    border: none; /* Removes the default border */
    height: 2px; /* Sets the thickness */

    background-color: #f0f0f0;
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

    .image-placeholder img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
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

function Explore() {
  return (
    <StyledExplore>
      <Header />
      <hr />
      <StyledNovosProjetos>
        <div className="recommended-projects">
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
          <div className="project-card">
            <div className="image-placeholder">
              <img src={"/Energia eolica.jpeg"} alt="Descrição da imagem" />
            </div>
            <h3>Energia eolica</h3>
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
              <img
                src={"/Energia hidroeletrica.jpeg"}
                alt="Descrição da imagem"
              />
            </div>
            <h3>Energia hidroeletrica</h3>
            <span>4 dias restantes • 358% financiado</span>
          </div>

          <div className="project-card">
            <div className="image-placeholder">
              <img
                src={"/Bateria a base de sódio.jpeg"}
                alt="Descrição da imagem"
              />
            </div>
            <h3>Bateria a base de sódio</h3>
            <span>4 dias restantes • 358% financiado</span>
          </div>
          <div className="project-card">
            <div className="image-placeholder">
              <img
                src={"/painel solar em estradas.jpeg"}
                alt="Descrição da imagem"
              />
            </div>
            <h3>Paineis solares em estradas</h3>
            <span>4 dias restantes • 358% financiado</span>
          </div>
          <div className="project-card">
            <div className="image-placeholder">
              <img
                src={"/energia eolica flutuante offshore.jpeg"}
                alt="Descrição da imagem"
              />
            </div>
            <h3>energia eolica flutuante offshore</h3>
            <span>4 dias restantes • 358% financiado</span>
          </div>
          <div className="project-card">
            <div className="image-placeholder">
              <img
                src={"/Energia Hidrelétrica de Pequeno Porte.jpeg"}
                alt="Descrição da imagem"
              />
            </div>
            <h3>Energia Hidrelétrica de Pequeno Porte</h3>
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
              <img
                src={"/motor energia solar.jpeg"}
                alt="Descrição da imagem"
              />
            </div>
            <h3>motor energia solar</h3>
            <span>4 dias restantes • 358% financiado</span>
          </div>
        </div>
      </StyledNovosProjetos>
      <hr />
      <Footer />
    </StyledExplore>
  );
}

export default Explore;
