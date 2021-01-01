import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaMedium, FaWhatsapp } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, FooterLinkP, FooterLinkMap } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Macedo & Muzzio</FooterLinkTitle>
                <FooterLinkP to='signup'
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Quem somos</FooterLinkP>
                <FooterLink to='/contact'>Fale conosco</FooterLink>
                <FooterLinkP to='services'smooth={true} duration={500} spy={true} exact='true' offset={-80}>Nossos serviços</FooterLinkP>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Escritório</FooterLinkTitle>
                <FooterLinkMap href='//www.google.com/maps/place/Macedo+%26+Muzzio+Contabilidade+Gerencial/@-23.0096265,-43.4477423,17z/data=!3m1!4b1!4m5!3m4!1s0x9bdd26a7eceb15:0x2c6c1f2ac5c2de59!8m2!3d-23.0096265!4d-43.4455536'>
                  Av. das Américas, 13733, sala 203
                  Recreio dos Bandeirantes, 22790-701
                  Rio de Janeiro/RJ
                </FooterLinkMap>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contatos</FooterLinkTitle>
                <FooterLink to='/'>(21) 2490-2500</FooterLink>
                <FooterLinkMap href='https://wa.link/c4ijlu'>WhatsApp <FaWhatsapp /> </FooterLinkMap>
                <FooterLink to='/'>contato@macedoemuzzio.com.br</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            <img src="./images/MM_Logo_M_Branco.svg" alt="logo" height={65} />
            </SocialLogo>
            <WebsiteRights>© {new Date().getFullYear()} Macedo & Muzzio Contabilidade Gerencial
            </WebsiteRights>
            <WebsiteRights>
            <FooterLink to='/'> Termos de Uso </FooterLink>|
              <FooterLink to='/'> Política de Privacidade</FooterLink>
            </WebsiteRights>
            <SocialIcons>
            <SocialIconLink href='//medium.com/@macedoemuzzio' target='_blank' arial-label='Instagram'>
                <FaMedium />
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/company/macedoemuzzio/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='//www.facebook.com/macedoemuzzio/' target='_blank' arial-label='Facebook'>
                <FaFacebookSquare/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer