import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaMedium, FaWhatsapp } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, FooterLinkP, FooterLinkMap, FooterLinkMapx } from './FooterElements'
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
              <FooterLinkTitle>Macedo &amp; Muzzio</FooterLinkTitle>
              <FooterLinkP to='signup'
                smooth={true} duration={500} spy={true} exact='true' offset={-80}>Quem somos</FooterLinkP>
              {/* <FooterLink to='/contact'>Fale conosco</FooterLink> */}
              <FooterLinkP to='services'smooth={true} duration={500} spy={true} exact='true' offset={-80}>Nossos serviços</FooterLinkP>
              <FooterLink to='/uso' > Termos de Uso </FooterLink>
              <FooterLink to='/privacidade'> Política de Privacidade</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Escritório</FooterLinkTitle>
              <FooterLinkMap href='//www.google.com/maps/place/Macedo+%26+Muzzio+Contabilidade+Gerencial/@-23.0096265,-43.4477423,17z/data=!3m1!4b1!4m5!3m4!1s0x9bdd26a7eceb15:0x2c6c1f2ac5c2de59!8m2!3d-23.0096265!4d-43.4455536' target='_blank' >
                Av. das Américas, 13733<br/>
                sala 203 - Recreio<br/>
                Rio de Janeiro/RJ<br/>
                22790-701
              </FooterLinkMap>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contatos</FooterLinkTitle>
              <FooterLink to='/'>(21) 2490-2500</FooterLink>
              <FooterLinkMapx href='https://wa.link/r3b8fp' target='_blank' >WhatsApp <FaWhatsapp /> </FooterLinkMapx>
              <FooterLinkMapx href={`mailto:contato@macedoemuzzio.com.br`}>contato@macedoemuzzio.com.br</FooterLinkMapx>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Siga-nos</FooterLinkTitle>
                <FooterLinkMapx href='https://medium.com/@macedoemuzzio' target='_blank' arial-label='Instagram'>Blog</FooterLinkMapx>
                <FooterLinkMapx href='https://www.facebook.com/macedoemuzzio/' target='_blank' arial-label='Facebook'>Facebook</FooterLinkMapx>
                <FooterLinkMapx href='https://www.linkedin.com/company/macedoemuzzio/' target='_blank' arial-label='Linkedin'>Linkedin</FooterLinkMapx>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            <img src="./images/MM_Logo_M_Branco.svg" alt="logo" height={60} />
            </SocialLogo>
            <WebsiteRights>© {new Date().getFullYear()} Macedo &amp; Muzzio Contabilidade Gerencial</WebsiteRights>
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