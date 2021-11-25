import styled from "styled-components";
import {
  bgAmarelo,
  bgAzul,
  bgCinza,
  btnAmarelo,
  btnAzul,
  txBranco,
  txCinza,
  txCinzaEscuro,
  txPreto,
} from "../../UI/variaveis";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: auto;
  background: ${txBranco};
  border-radius: 12px;
  border: 1.5px ${bgAmarelo} solid;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 720px) {
    height: auto;
  }

  .paginationBtn {
    width: 0%;
    height: 3.5rem;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
  }

  .paginationBtn a {
    padding: 0.8rem;
    margin: 0.5rem;
    border-radius: 5px;
    border: 1px solid ${bgAzul};
    color: ${bgAzul};
    cursor: pointer;

    @media only screen and (max-width: 720px) {
      padding: 0.5rem;
    }
  }

  .paginationBtn a:hover {
    color: ${txBranco};
    background-color: ${bgAzul};
    transition: ease 0.3s;
  }

  .paginationActive a {
    color: ${txBranco};
    background-color: ${bgAzul};
  }
`;

export const TableTitle = styled.h2`
  font-size: 2.5rem;
  color: ${txCinzaEscuro};
  text-align: center;
  padding-top: 2rem;
  padding: 2rem 0;

  @media only screen and (max-width: 720px) {
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const SearchField = styled.input`
  font-size: 1.2rem;
  width: 15rem;
  height: 3rem;
  padding: 0.7rem;
  border-radius: 10px;
  border: 2px solid ${bgAmarelo};
  outline: none;

  :focus {
    box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.3);
    border: 2px solid ${btnAzul};
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;

  @media only screen and (max-width: 720px) {
    align-items: center;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 1.6rem 0;
  width: 80%;
  font-size: 1rem;
  min-width: 25rem;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media only screen and (max-width: 720px) {
    display: block;
    width: 95%;
    min-width: 0;
    box-shadow: 0;
  }
`;

export const TableHead = styled.thead`
  background-color: ${bgAzul};
  color: ${txBranco};
  text-align: left;
  font-weight: bold;
  text-align: center;

  @media only screen and (max-width: 720px) {
    display: none;
    color: ${txCinzaEscuro};

    .data-label {
      padding: 0;
      font-size: 1.2rem;
      color: ${txCinzaEscuro};
    }
  }
`;

export const TableBody = styled.tbody`
  width: 100%;

  @media only screen and (max-width: 720px) {
    display: block;
    width: 100%;
    right: 0;
    left: 0;
  }
`;

export const TableTR = styled.tr`
  border-bottom: 1px solid ${bgCinza};
  transition: ease 0.2s;

  @media only screen and (max-width: 720px) {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${bgAzul};
    border-radius: 12px;
  }

  :hover {
    background: ${bgCinza};
  }
`;

export const TableTH = styled.th`
  padding: 12px 15px;
  font-size: 1.4rem;
`;

export const TableTHName = styled.th`
  padding: 12px 15px;
  font-size: 1.4rem;
  cursor: pointer;

  :hover {
    color: ${bgAmarelo};
    background: ${btnAzul};
    transition: ease 0.3s;
  }
`;

export const TableTHEmail = styled.th`
  padding: 12px 15px;
  font-size: 1.4rem;
  cursor: pointer;

  :hover {
    color: ${bgAmarelo};
    background: ${btnAzul};
    transition: ease 0.3s;
  }
`;

export const TableTD = styled.td`
  padding: 12px 15px;
  font-size: 1.2rem;

  @media only screen and (max-width: 720px) {
    display: block;
    width: 100%;
    text-align: right;
    font-size: 1rem;
    padding-right: 1rem;
    padding-left: 40%;
    position: relative;
    border-bottom: 1px solid ${txCinza};

    :before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 1rem;
      font-weight: bold;
      font-size: 1rem;
      text-align: left;
      color: ${txCinzaEscuro};
    }
  }

  .user-link {
    text-decoration: none;
    color: ${txPreto};

    :hover {
      color: ${btnAzul};
    }
  }

  .tdButton {
    width: 6rem;
    height: 2.5rem;
    border-radius: 10px;
    background: ${btnAmarelo};
    border: none;
    transition: ease-out 0.3s;
    box-shadow: inset 0 0 0 0 ${btnAmarelo};
    outline: none;
    cursor: pointer;
    font-size: 1.1rem;

    @media only screen and (max-width: 720px) {
      width: 5rem;
      font-size: 0.9rem;
    }

    :hover {
      box-shadow: inset 8rem 0 0 0 #f24b43;
      font-weight: bold;
    }

    .btnLink {
      text-decoration: none;
      color: ${txPreto};
    }
  }
`;
