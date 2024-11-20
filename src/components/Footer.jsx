import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <img src="/Footer.png" alt="" />
    </StyledFooter>
  );
}

export default Footer;
