import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Link } from 'react-router-dom'
import imagePath from '../utils/imagePath'
import uuid from 'uuid'
const fadeIn = keyframes`
0% {
 opacity: 0;
}
100% {
 opacity: 1;
}
`
const WorkLink = styled(Link)`
  flex: 1 1 50%;
  box-sizing: border-box;
  padding: 0.5em;
  min-width: 25em;
  position: relative;
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
` 
const ImageContainer = styled.div`
 opacity: 0;
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 width: 100%;
 animation: ${fadeIn} 400ms ease-out ${props => props.delay}ms forwards;
 ${props => props.lastLocation !== null && css`
  animation: ${fadeIn} 400ms ease-out 600ms forwards;
 `}
`
const OverLayBox = styled.div`

 &::after {
  content: '${props => props.text}';
  white-space: pre;
  font-family: JosefinLight;
  font-weight: 300;
  font-size: calc(3em + 0.8vw);
  position: absolute;
  background-color: rgba(255,255,255,0.6);
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
 }
 &:hover {
   &::after {
     display: flex;
   }
 }
`
const Image = styled.img`
 position: relative;
 width: 100%;
 object-fit: contain;
`

const Work = (props) => {
 const workTiles = props.tiles.map(each => 
  <WorkLink to={each.link} key={uuid()}>
  <OverLayBox text={each.text}  >
      <Image src={imagePath(each.pic)} alt={each.text} />
   </OverLayBox>
  </WorkLink>
   ) 
    return (
  <ImageContainer lastLocation={props.lastLocation} delay={props.tagLines.length * 90 + 1000}>
   {workTiles}
  </ImageContainer>  
 )
}
export default Work