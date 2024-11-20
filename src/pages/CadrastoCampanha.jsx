import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const PageWrapper = styled.div`
  display: flex;

  font-family: Arial, sans-serif;
`;

const LeftPanel = styled.div`
  flex: 1;
  background-color: #f8f7ec;
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  a {
    text-decoration: none;
  }

  h1 {
    color: #00c851;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  div {
    margin-top: 100px;
    text-align: center;
    h3 {
      color: #666;
    }
    p {
      color: #555;
    }
  }
`;

const RightPanel = styled.div`
  flex: 2;
  background-color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  div {
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;

  &:focus {
    border-color: #00c851;
    outline: none;
  }
`;

const SmallText = styled.div`
  text-align: right;
  margin-top: -10px;
  font-size: 0.9rem;

  a {
    color: #00c851;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 30px;

  &:hover {
    background-color: #333;
  }
`;

function CadrastoCampanha() {
  return (
    <PageWrapper>
      {/* Left Panel */}
      <LeftPanel>
        <NavLink to={"/"}>
          <h1>transfor.me</h1>
        </NavLink>
        <div>
          <h3>Vamos começar sua jornada </h3>
          <p>Cadastre-se para começar a apoiar ou montar sua campanha</p>
        </div>
      </LeftPanel>

      {/* Right Panel */}
      <RightPanel>
        <SmallText>
          Já possui uma conta? <a href="#">Entre aqui</a>
        </SmallText>
        <h2>Pessoal</h2>
        <Form>
          {/* Pessoal Section */}
          <Row>
            <div>
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" type="text" placeholder="Teste exemplo" />
            </div>
            <div>
              <Label htmlFor="dob">Data de nascimento</Label>
              <Input id="dob" type="date" />
            </div>
          </Row>

          <SectionTitle>Conta</SectionTitle>
          {/* Conta Section */}
          <Row>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Teste exemplo" />
            </div>
          </Row>
          <Row>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="********" />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirmar senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="********"
              />
            </div>
          </Row>

          <SectionTitle>Endereço</SectionTitle>
          {/* Endereço Section */}
          <Row>
            <div>
              <Label htmlFor="cep">CEP</Label>
              <Input id="cep" type="text" placeholder="19199-191" />
            </div>
          </Row>
          <Row>
            <div>
              <Label htmlFor="city">Cidade</Label>
              <Input id="city" type="text" placeholder="Teste exemplo" />
            </div>
            <div>
              <Label htmlFor="state">Estado</Label>
              <Input id="state" type="text" placeholder="São Paulo" />
            </div>
          </Row>
          <Row>
            <div>
              <Label htmlFor="street">Rua</Label>
              <Input
                id="street"
                type="text"
                placeholder="José Da Silva Cunha"
              />
            </div>
          </Row>
          <Row>
            <div>
              <Label htmlFor="neighborhood">Bairro</Label>
              <Input id="neighborhood" type="text" placeholder="Bairro" />
            </div>
            <div>
              <Label htmlFor="complement">Complemento</Label>
              <Input id="complement" type="text" placeholder="Vila do Bairro" />
            </div>
          </Row>

          <Row>
            <div>
              <Label htmlFor="street">Número de telefone</Label>
              <Input id="number" type="text" placeholder="Número de telefone" />
            </div>
          </Row>
          <div>
            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </div>
        </Form>
      </RightPanel>
    </PageWrapper>
  );
}

export default CadrastoCampanha;
