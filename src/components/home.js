import React from 'react'
import styled , { keyframes, css } from 'styled-components'
import { firstTagLine, workTiles, playTiles, playTagLine } from '../config'
import { withLastLocation } from 'react-router-last-location'
import Work from './work'
import uuid from 'uuid'
const HomePage = styled.div`
  margin: 0 calc(1.2em + 0.3vw);
`
const HomePageContainer = styled.div`
 margin-top: calc(3em + 0.5vw);
 margin-bottom: calc(4.5em + 1.7vw);
`
const fadeInTop = keyframes`
 0% {
  transform: translateY(-35px);
  opacity: 0;
 }
 100% {
  transform: translateY(0px);
  opacity: 1;
 }
`
const fadeIn = keyframes`
0% {
 opacity: 0;
}
100% {
 opacity: 1;
}
`
const TagLineWrapper = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
`
const TagLineContainer = styled.div`

 display:flex;
 width: 100%;
 margin: 0 auto;
 overflow: visible;
 justify-content: center;
 aligns-item: center;
 flex-direction: column;
`
const TagSpaceBlock = styled.span`
 display: block;
 width: calc(0.7em + 0.2vw);
`
const FadeInTagLine = styled.div`
 display: block;
 width: 100%;
 margin: 0 auto;
 text-align: center;
 opacity: 0;
 animation: ${fadeIn} 800ms linear ${props => props.delay}ms forwards;
 ${props => props.lastLocation !== null && css`
  opacity: 1;
  animation: none;
 `}
`
const FadeInTagLineText = styled.p`
 font-weight: 400;
 margin: 0.5em;
 font-size: calc(0.6em + 1vw);
 font-family: "JosefinRegular";
`
const HighLighted = styled.span`
 color: #f6927b;
`

const TagLine = styled.span`
 font-family: "Yeseva";
 font-size: calc(1.5em + 1.5vw);
 opacity: 0;
 font-weight: 400;
 font-family: 
 display: inline-block;
 text-align: center;
 padding: 0.001em;
 animation: ${fadeInTop} 200ms ease-out ${props => props.delay * 90}ms forwards;
 ${props => props.lastLocation !== null && css`
  opacity: 1;
  animation: none;
 `}
`
const HomeTagLines = (props) => {
    const { animatedFirstTagLine, lastLocation } = props
    return (
    <React.Fragment>
        <FadeInTagLine delay={animatedFirstTagLine.length * 90 + 110} lastLocation={lastLocation}>
            <FadeInTagLineText>
                <HighLighted>UI/UX designer</HighLighted> passionate about creating digital experiences to <HighLighted>empower</HighLighted> and make an <HighLighted>impact</HighLighted> on people's lives.
            </FadeInTagLineText>
        </FadeInTagLine>  
        <FadeInTagLine delay={animatedFirstTagLine.length * 90 + 110 + 400} lastLocation={lastLocation}>
            <FadeInTagLineText>
                A firm <HighLighted>believer</HighLighted> of making visions a reality.
            </FadeInTagLineText>
        </FadeInTagLine> 
    </React.Fragment>
    )
}

const PlayTagLines = (props) => {
    const { animatedFirstTagLine, lastLocation } = props
    return (
        <FadeInTagLine delay={animatedFirstTagLine.length * 90 + 110} lastLocation={lastLocation}>
            <FadeInTagLineText>
                A miscellaneous <HighLighted>collection</HighLighted> of my creative interests and explorations.
            </FadeInTagLineText>
        </FadeInTagLine>  
    )
}

const Home = ({ lastLocation}) => {
        const isHome = window.location.pathname === "/"
        const tagLines = isHome ? firstTagLine : playTagLine
        const animatedFirstTagLine = tagLines.map((el,index) =>  {
            if(el !== " "){
             return <TagLine lastLocation={lastLocation} key={uuid()} delay={index}>{el}</TagLine>
            }else{
             return <TagSpaceBlock key={uuid()} />
            }
           })
           return (
            <HomePage>
             <HomePageContainer>
              <TagLineContainer>
               <TagLineWrapper>
               {animatedFirstTagLine}
               </TagLineWrapper>
              </TagLineContainer>
           { isHome ? <HomeTagLines animatedFirstTagLine={animatedFirstTagLine} lastLocation={lastLocation} /> : <PlayTagLines animatedFirstTagLine={animatedFirstTagLine} lastLocation={lastLocation} /> }
             </HomePageContainer>
             <Work lastLocation={lastLocation} tagLines={tagLines} tiles={ isHome ? workTiles : playTiles }/>
            </HomePage>
           )
}

export default withLastLocation(Home)