import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projetos from "../components/Projetos";
import QuemSomos from "../components/QuemSomos";
import FaleConosco from "../components/FaleConosco";

const StyledHomePage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 80px auto;
  .MainTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 640px;
    flex-direction: column;
    text-align: center;

    h1 {
      font-size: 56px;
    }
    p {
      color: #6c6c6c;
      margin: 20px 0;
    }

    button {
      margin: 0 10px;
      padding: 0 10px;
      border: 1px solid #d9d9d9;
      padding: 10px 20px;
      border-radius: 10px;
      background-color: transparent;
    }
  }

  .vector1 {
    position: absolute;
    top: 0;
    left: 0;
  }
  .vector2 {
    position: absolute;
    top: 230px;
    right: 0;
  }
`;

function HomePage() {
  return (
    <>
      <Header />
      <StyledHomePage>
        <img className="vector1" src="/Vector1.png" alt="" />
        <section className="MainTitle">
          <h1>Apoie projetos e impulsione um Brasil mais sustentável</h1>
          <p>Somos uma plataforma que impulsiona projetos sustentáveis.</p>
          <button>Assistir video pitch</button>
        </section>
        <img className="vector2" src="/Vector2.png" alt="" />
      </StyledHomePage>
      <Projetos />
      <QuemSomos />
      <FaleConosco />
      <Footer />
    </>
  );
}

export default HomePage;
