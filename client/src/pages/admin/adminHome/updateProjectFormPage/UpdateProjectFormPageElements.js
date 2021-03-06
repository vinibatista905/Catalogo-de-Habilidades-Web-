import styled from "styled-components";
import {
  bgAmarelo,
  bgAzul,
  txBranco,
  txCinza,
  txCinzaEscuro,
} from "../../../../components/UI/variaveis";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${txCinza};
`;

export const FormCard = styled.div`
  width: 95rem;
  height: 50rem;
  margin-bottom: 4.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${txBranco};
  border-radius: 12px;
  border: 1.5px ${bgAmarelo} solid;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
`;

export const BannerSection = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${bgAzul};
  border-radius: 12px;
`;

export const BannerImg = styled.img`
  width: 80%;
`;

export const FormSection = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const CardTitle = styled.h2`
  font-size: 2.5rem;
  color: ${txCinzaEscuro};
  margin: 0;
  position: relative;
  bottom: 10rem;
  text-align: center;
`;