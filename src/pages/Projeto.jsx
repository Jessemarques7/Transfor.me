import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StyledProjeto = styled.main`
  hr {
    border: none; /* Removes the default border */
    height: 2px; /* Sets the thickness */

    background-color: #f0f0f0;
  }

  .firstpart {
    display: flex;
  }

  img {
    max-width: 680px;
    margin-right: 50px;
  }

  .secondpart {
    max-width: 680px;
  }
`;

// Styled Components
const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;

  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 46px;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #555;
  margin-bottom: 20px;
`;

const FundingSection = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  margin-bottom: 30px;
`;

const ProgressBar = styled.div`
  background: #e0e0e0;
  border-radius: 10px;
  height: 10px;
  overflow: hidden;
  margin-top: 10px;

  div {
    background: #4caf50;
    height: 100%;
    width: ${(props) => props.progress || "0%"};
  }
`;

const FundingDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15px;
  font-weight: bold;
`;

const Section = styled.section`
  margin-bottom: 30px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    line-height: 1.6;
    color: #555;
  }

  img {
    width: 100%;
    margin-top: 15px;
    border-radius: 8px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 30px;

  button {
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;

    &:hover {
      background: #222;
    }
  }
`;

function Projeto() {
  return (
    <StyledProjeto>
      <Header />
      <hr />
      <PageWrapper>
        {/* Header Section */}
        <header>
          <Title>Bateria a base de sódio</Title>
          <Subtitle>
            Bateria inovadora, acessível e sustentável, feita com sódio – um
            recurso abundante e ecológico. Junte-se a nós para impulsionar a
            transição para um futuro mais verde!
          </Subtitle>
        </header>
        {/* History Section */}
        <Section>
          <div className="firstpart">
            <img src="/Frame1.png" alt="Bateria a base de sódio" />

            {/* Funding Section */}
            <FundingSection>
              <h2>Arrecadação</h2>

              <ProgressBar progress="80%">
                <div />
              </ProgressBar>
              <FundingDetails>
                <p>Arrecadado R$ 1.557.300</p>
                <p>Meta R$ 100.000</p>

                <p>Tempo restante: 4 dias 22 horas</p>
                <CallToAction>
                  <button>Apoie este projeto</button>
                </CallToAction>
              </FundingDetails>
            </FundingSection>
          </div>
          <div className="secondpart">
            <h2>História</h2>
            <p>
              Apresentamos nossa solução revolucionária em armazenamento de
              energia: a Bateria de Sódio. Desenvolvida com base em tecnologia
              avançada, ela utiliza sódio, um elemento abundante e acessível,
              como alternativa sustentável ao lítio. Nossa bateria é projetada
              para oferecer alto desempenho, custo reduzido e menor impacto
              ambiental. Ideal para aplicações domésticas, industriais e até
              mesmo em veículos elétricos, ela representa um passo importante na
              busca por fontes de energia mais limpas e responsáveis. Tanto o
              calor quanto o frio extremos são inimigos das baterias de
              íon-lítio. No frio extremo, os processos químicos dentro de uma
              célula ficam mais lentos, pois os íons de lítio não podem se mover
              tão livremente quanto em temperaturas normais. Da mesma forma que
              a água tem dificuldade para fluir através de canos congelados, a
              energia elétrica em uma bateria fria enfrenta mais resistência.
              Isso resulta em menor autonomia de condução, tempos de
              carregamento mais longos e a exposição prolongada a temperaturas
              extremas pode até mesmo afetar a saúde da bateria a longo prazo.
              Pelo menos em teoria, os íons de sódio resolvem esse problema,
              pois são muito mais resistentes.
            </p>
            <img src="/Frame2.png" alt="Bateria a base de sódio" />
            <p>
              As baterias de íons de sódio já entraram em produção na China.
              Entre os carros que as utilizam estão o Yiwei EV, produzido pela
              JAC, apoiada pela Volkswagen, e o JMEV EV3. Falando na Cúpula
              Mundial de Jovens Cientistas, o cientista-chefe da CATL, Wu Kai,
              disse que suas células de íons de sódio de segunda geração podem
              descarregar normalmente mesmo a -40 graus Celsius, conforme vários
              relatos da mídia local chinesa. Isso significa que os EVs com
              essas baterias não perderão a autonomia sob temperaturas gélidas,
              o que poderia ajudar a resolver algumas das preocupações
              persistentes com relação ao desempenho das baterias em condições
              climáticas extremas. Elas serão lançadas em 2025 na China, e a
              produção em massa deverá começar em 2027.
            </p>
            <img src="/Frame3.png" alt="Bateria produção" />
            <p>
              Ao apoiar este projeto, você estará investindo em inovação
              tecnológica e contribuindo para democratizar o acesso a soluções
              sustentáveis no Brasil e no mundo. Vamos juntos transformar o
              futuro da energia!
            </p>
          </div>
        </Section>

        {/* Call to Action */}
        <CallToAction>
          <button>Apoie este projeto</button>
        </CallToAction>
      </PageWrapper>
      <hr />
      <Footer />
    </StyledProjeto>
  );
}

export default Projeto;
