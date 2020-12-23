import React from 'react'
import { FaFacebook, FaLinkedin, FaMedium } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
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
                <FooterLink to='/'>Quem somos</FooterLink>
                <FooterLink to='/'>Fale conosco</FooterLink>
                <FooterLink to='/'>Nossos serviços</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Escritório</FooterLinkTitle>
                <FooterLink to='/'>
                  Av. das Américas, 13733, sala 203
                  Recreio dos Bandeirantes, 22790-701
                  Rio de Janeiro/RJ
                </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contatos</FooterLinkTitle>
                <FooterLink to='/'>(21) 2490-2500</FooterLink>
                <FooterLink to='/'>contato@macedoemuzzio.com.br</FooterLink>
            </FooterLinkItems>
            {/* <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>

                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems> */}
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              M&M
            </SocialLogo>
            <WebsiteRights>© {new Date().getFullYear()} Macedo & Muzzio Contabilidade Gerencial
            </WebsiteRights>
            <WebsiteRights>
            <FooterLink to='/'> Termos de Uso </FooterLink>|
              <FooterLink to='/'> Política de Privacidade</FooterLink>
            </WebsiteRights>
            <SocialIcons>
            <SocialIconLink href='//www.instagram.com/leonardtcomdt/' target='_blank' arial-label='Instagram'>
                <FaMedium />
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/in/leonardtlauenstein/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
