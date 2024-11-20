import styled from "styled-components";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const StyledHeader = styled.header`
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding: 50px 100px;

  a {
    text-decoration: none;
    cursor: pointer;
  }

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
      <a href="/">
        <img src="/Logo.png" alt="" />
      </a>
      <div>
        <input type="text" placeholder="Busque por projetos... " />
        <div>
          <a href="/">
            <button>Inicio</button>
          </a>
          <a href="/explore">
            <button>Explore</button>
          </a>
          <a href="/cadastro">
            <button>Comece sua campanha</button>
          </a>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
