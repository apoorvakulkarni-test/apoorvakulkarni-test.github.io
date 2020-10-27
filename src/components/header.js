import React from 'react'
import styled from 'styled-components'
import NavBar from './navBar'
import LogoPicture from '../assets/images/logo.png'
const LogoContainer = styled.img`
 object-fit: contain;
 width: calc(4.5em + 1vw);
`
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Header = () => {
 return (
  <HeaderContainer>
   <LogoContainer src={LogoPicture} alt="logo" />
   <NavBar />
  </HeaderContainer>
 )
}
export default Header