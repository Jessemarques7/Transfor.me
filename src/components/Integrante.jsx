import styled from "styled-components";

const StyledIntegrante = styled.div`
  .integrante-card {
    background: white;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    .image-placeholder {
      background: #d3d3d3;
      height: 240px;
      border-radius: 15px;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
      }
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

function Integrante({ integrante }) {
  return (
    <StyledIntegrante>
      <div className="integrante-card">
        <div className="image-placeholder">
          <img src={integrante.Image} alt="" />
        </div>
        <h3>{integrante.name}</h3>
        {/* <span>{integrante.description}</span> */}
      </div>
    </StyledIntegrante>
  );
}

export default Integrante;
