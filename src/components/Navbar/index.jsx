import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>M&M<img src="./images/svg-1.svg" alt="bug" height={100} /></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='signup'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Quem somos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >MEI</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Trocar de contador</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Serviços</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/contact'>Fale conosco</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
