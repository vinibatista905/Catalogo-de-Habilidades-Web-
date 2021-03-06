import styled from "styled-components";
import {
  btnAmarelo,
  btnAzul,
  btnAzulEscuro,
  txBranco,
  txCinzaEscuro,
} from "../../UI/variaveis";

export const SkillFormWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 8rem;

  .skillField {
    width: 16rem;
    padding: 0.6rem 0.5rem;
    font-size: 1.2rem;
    border-radius: 12px;
    outline: none;
    border: 1px ${btnAmarelo} solid;

    :hover {
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.25);
    }

    :focus {
      border: 1px ${btnAzul} solid;
    }
  }

  .form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    gap: 2rem;
  }
`;


export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
`;

export const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldDesc = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${txCinzaEscuro};
  padding-bottom: 1rem;
`;
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;


export const FormBtn = styled.button`
  width: 6rem;
  height: 3rem;
  background: ${btnAzul};
  color: ${txBranco};
  border: none;
  border-radius: 12px;
  cursor: pointer;

  :hover {
    background: ${btnAzulEscuro};
    transition: all 0.2s linear;
    color: ${btnAmarelo};
    font-weight: bold;
  }
`;

export const CheckSkillsLink = styled.a`
  text-decoration: none;

  .linkBtn {
    width: 8rem;
    height: 3.4rem;
    border-radius: 10px;
    background: ${btnAmarelo};
    border: none;
    transition: ease-out 0.3s;
    box-shadow: inset 0 0 0 0 ${btnAmarelo};
    outline: none;
    cursor: pointer;

    :hover {
      box-shadow: inset 8rem 0 0 0 #f24b43;
      font-weight: bold;
    }
  }
`;
