import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {/* <SidebarLink to='about' onClick={toggle}>MEI</SidebarLink> */}
          <SidebarLink to='discover' onClick={toggle}>Trocar de contador</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>Nossos serviços</SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>Quem somos</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/contact'>Fale conosco</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
