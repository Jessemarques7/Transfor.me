import styled from "styled-components";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

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
      <NavLink to={"/"}>
        <img src="/Logo.png" alt="" />
      </NavLink>
      <div>
        <input type="text" placeholder="Busque por projetos... " />
        <div>
          <NavLink to={"/"}>
            <button>Inicio</button>
          </NavLink>
          <NavLink to={"/explore"}>
            <button>Explore</button>
          </NavLink>
          <NavLink to={"/cadastro"}>
            <button>Comece sua campanha</button>
          </NavLink>

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
