import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  padding: 16px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.div``

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const NavBarItem = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text.gray};
  transition: all 0.2s;

  cursor: pointer;

  &:hover{
    opacity: 0.75;
  }
`

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Contact= styled(Link)`
  min-width: 11rem;
  max-width: 12rem;
  height: 2rem;

  margin-left: 6rem;
  margin-right: 0.5em;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.875rem;

  background-color: ${({theme}) => theme.colors.brand};
  color: ${({theme}) => theme.colors.text.white};

  border-radius: 25px;

  cursor: pointer;
`

export const SocialMedia = styled(Link)`
  padding: 0.35rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.brand};
  color: ${({theme}) => theme.colors.text.white};

  border-radius: 9999px;

  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors.card["purple-dark"]};
  }

`


