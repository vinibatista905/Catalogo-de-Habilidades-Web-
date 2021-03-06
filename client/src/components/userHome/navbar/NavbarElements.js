import styled from "styled-components";
import {
  bgAmarelo,
  bgAzul,
  btnAmarelo,
  btnAzul,
  txBranco,
  txPreto,
} from "../../UI/variaveis";
import { IoLogoOctocat } from "react-icons/io";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background: ${bgAzul};
  padding: 0 2rem;
  box-shadow: 0 12px 10px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 720px) {
    padding: 0 0.8rem;
    gap: 0.5rem;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoLink = styled.a`
  text-decoration: none;
  color: ${txBranco};
  transition: ease 0.2s;

  :hover {
    color: ${bgAmarelo};
    transition: ease-in-out 0.3s;
  }
`;

export const LogoTitle = styled.h1`
  font-size: 3rem;

  @media only screen and (max-width: 720px) {
    font-size: 1.3rem;
  }
`;

export const LogoIcon = styled(IoLogoOctocat)`
  font-size: 3rem;
  margin-left: 0.5rem;
  margin-top: 0.1rem;

  @media only screen and (max-width: 720px) {
    font-size: 1.4rem;
    margin-left: 0.4rem;
    margin-bottom: 0.2rem;
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 3rem;
  box-shadow: inset 0 0 0 0 ${txBranco};
  transition: ease 0.3s;
  color: ${txPreto};
  border: none;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    box-shadow: inset 8rem 0 0 0 ${bgAmarelo};
    border: 2px ${bgAmarelo} solid;
    font-weight: 700;
  }

  @media only screen and (max-width: 720px) {
    width: 4.5rem;
    height: 2rem;
    font-size: 0.6rem;
  }
`;

export const UserInfoWrap = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${txBranco};
  transition: ease 0.2s;
  position: relative;
  padding: 0 0.5rem;

  :hover {
    background: ${btnAzul};
    color: ${btnAmarelo};
    cursor: pointer;
  }

  .userImg {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    border-radius: 50%;
  }

  @media only screen and (max-width: 720px) {
    gap: 0.5rem;

    .userImg {
      width: 2.2rem;
      height: 2.2rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

export const UserName = styled.h3`
  font-size: 1.5rem;

  @media only screen and (max-width: 720px) {
    font-size: 0.8rem;
  }
`;
