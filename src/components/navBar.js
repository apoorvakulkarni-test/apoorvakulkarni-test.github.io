import React, { Component } from 'react'
import styled from 'styled-components'
import { navBarItems } from '../config'
import { Link } from 'react-router-dom'
import Resume from '../assets/images/resume.pdf'
import uuid from 'uuid'
const NavBarContainer = styled.div`
 padding: 0 0.5em;
 display: flex;
 flex-direction: row;
 margin-bottom: 1em;
`
const ResumeLink = styled.a`
 font-family: JosefinRegular;
 text-decoration: none;
 color: black;
 opacity: 0.3;
 margin: 0 0.1em;
 min-width: 4em;
 font-size: calc(0.95em + 0.4vw);
 text-align: center;
 &:hover {
  opacity: 1;
 }
 &:visited {
  color: black;
 }
`
const NavBarLink = styled(Link)`
 font-family: JosefinRegular;
 text-decoration: none;
 opacity: ${props => props.active === "true" ? '1' : '0.3'};
 color: black;
 margin: 0 0.1em;
 min-width: 4em;
 font-size: calc(0.95em + 0.4vw);
 text-align: center;
 &:hover {
  opacity: 1;
 }
 &:visited {
  color: black;
 }
`

class NavBar extends Component {
 state = {
  selected: ""
 }
 changeRoute(newSelected) {
  this.setState({
   selected: newSelected
  })
 }
 componentDidMount() {
  const path = window.location.pathname.slice(1)
  if(path === null) {
      this.changeRoute('')
  } else {
      this.changeRoute(path)
  }
  
 }
 render () {
  return (
   <NavBarContainer>
    {navBarItems.map( item => {
     if(item.id !== 'resume'){
      return <NavBarLink key={uuid()} active={this.state.selected === item.id ? "true" : "false"} to={item.link} onClick={() => this.changeRoute(item.id)}>{item.name}</NavBarLink>
     }else{
      return <ResumeLink href={Resume} target="_blank" key={uuid()}>{item.name}</ResumeLink>
     }
    })
   }
   </NavBarContainer>
  ) 
 }
}


export default NavBar