import Image from "next/image";
import { InstagramLogo, LinkedinLogo, FacebookLogo } from "phosphor-react";

import { Contact, Contacts, Container, ImageContainer, NavBar, NavBarItem, SocialMedia } from "./styles";

import logo from '../../assets/logo.svg'

export function Header() {

  const NavBarItems: string[] = [
    'Sobre nós', 'Nossas Empresas', 'Insights', 'Seja um Colab'
  ]

  return (
    <Container>
      <ImageContainer>
        <Image 
          src={logo} 
          width={216}
          height={25}
          alt="coaktion" 
        />
      </ImageContainer>
      <NavBar>
        {NavBarItems.map(item => {
          return (
            <NavBarItem key={item}>{item}</NavBarItem>
          )
        })}
      </NavBar>
      <Contacts>
        <Contact href={''}>Contato</Contact>
        <SocialMedia href={'https://www.instagram.com/coaktion/'}>
          <InstagramLogo size={18} weight={'bold'}/>
        </SocialMedia>

        <SocialMedia href={'https://www.facebook.com/Coaktion/?_rdc=1&_rdr'}>
          <FacebookLogo size={18} weight={'bold'}/>
        </SocialMedia>

        <SocialMedia href={'https://www.linkedin.com/company/coaktion/mycompany/'}>
          <LinkedinLogo size={18} weight={'bold'}/>
        </SocialMedia>
      </Contacts>
    </Container>
  )
}