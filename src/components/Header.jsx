import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding: 50px 100px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      border: 0;
      background-color: #f0f0f0;
      padding: 10px 30px;
      border-radius: 10px;
      width: 500px;
    }

    button {
      margin: 0 10px;
      padding: 0 10px;
      border: 0;
      background-color: transparent;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src="/Logo.png" alt="" />
      <div>
        <input type="text" placeholder="Busque por projetos... " />
        <div>
          <button>Inicio</button>
          <button>Explore</button>
          <a href="/cadastro">
            <button>Comece sua campanha</button>
          </a>
          <button>Entrar</button>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
