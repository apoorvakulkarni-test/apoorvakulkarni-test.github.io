import React from 'react'
import styled, { keyframes } from 'styled-components'
import FriendlyPic from '../assets/images/friendly.jpg'
import colors from '../colors'
import uuid from 'uuid'
import { aboutPageConfig } from '../config'
import ReactGA from "react-ga";

const AboutPage = styled.div`
  display:flex;
  flex-direction: column;
  margin-top: calc(1em + 1vw);
`
const ContactLink = styled.a`
    text-decoration: none;
    color: black;
    &:visited {
        color: black;
    }
`
const picFadeIn = keyframes`
  0%{
    background-color: rgba(0,0,0,0.3);
    top: 0;
    left :0;
  }
  100%{
    top: calc(0.19em + 0.12vw);
    left: calc(0.33em + 0.33vw);
    background-color: ${colors.orange};
  }
`
const fadeInLeft = keyframes`
 0%{
   opacity: 0;
   transform: translateX(-60%);
 } 
 100%{
   opacity: 1;
   transform: translateX(0);
 }
`
const fadeInRight = keyframes`
 0%{
   opacity: 0;
   transform: translateX(60%);
 } 
 100%{
   opacity: 1;
   transform: translateX(0);
 }
`
const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  align-items: center;
  justify-content: center;
  @media (max-width: 660px) {
    justify-content: space-around;
  }

`
const ProfilePicContainer = styled.div`
  position: relative;
  width: calc(15em + 15vw);
  &::after {
   content: '';
   position: absolute;
   width: 100%;
   top: 0;
   left: 0;
   height: 100%;
   animation: ${picFadeIn} 1s ease-in-out 600ms forwards;
   z-index:1;
  }
  
`
const HighLighted = styled.span`
  color: ${colors.orange};
`
const ProfileQuote = styled.h2`
  align-self: ${props => props.bottom ? 'flex-end' : 'flex-start'};
  margin: ${props => props.bottom ?'0 0.6em 7% 1.4em' : '7% 1.4em 0 0.6em' };
  text-align: center;
  opacity: 0;
  text-wrap: wrap;
  font-family: Yeseva;
  font-weight: 400;
  font-size: calc(1.5em + 1.8vw);
  line-height: 1.2;

  animation ${props => props.bottom ? fadeInLeft : fadeInRight} 1s ease-out 600ms forwards;
  @media (max-width: 660px) {
    font-size: calc(1.03em + 0.5vw);
    margin: 0 1em;
  }
`
const AboutParaContainer = styled.div`
  margin: 2em calc(6em + 3.5vw) 0 calc(6em + 3.5vw);
  @media (max-width: 660px) {
    margin: 2em;
  }
`
const AboutPara = styled.p`
  font-family: JosefinRegular;
  font-size: calc(0.95em + 0.35vw);
  line-height: 1.3;
`
const ProfilePic = styled.img`
position: relative;
 min-width: 150px;
 width: 100%;
 height: 100%;
 z-index:9;
 object-fit: contain;
`
const ContactInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2em;
`
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 13em;

`
const ContactInfoTitle = styled.h4`
  color: ${colors.orange};
  font-family: JosefinRegular;
  calc(1.1em + 0.40vw);
  margin: 1em;
`
const ContactInfoText = styled.p`
  font-family: JosefinRegular;
  margin: 0;
  calc(0.95em + 0.35vw);
`

const About = () => {
    ReactGA.initialize('UA-178887327-1');
    ReactGA.pageview(window.location.pathname);
  return(
    <AboutPage>
      <AboutPageContainer>
      <ProfileQuote>
        <p><HighLighted>practical</HighLighted> in <br />mind</p>
      </ProfileQuote>
      <ProfilePicContainer>
        <ProfilePic src={FriendlyPic} alt="" />
      </ProfilePicContainer>
      <ProfileQuote bottom>
        <p>creative at <br /><HighLighted>heart</HighLighted></p>
      </ProfileQuote>
    </AboutPageContainer>
    <AboutParaContainer>
    {aboutPageConfig.paragraphs.map(
      each => <AboutPara key={uuid()}>{each}</AboutPara>
    )}
    <ContactInfoContainer>
    {aboutPageConfig.contacts.map(
        each => 
        <ContactInfo key={uuid()}>
          <ContactInfoTitle>
            {each.title}
          </ContactInfoTitle>
          <ContactLink href={each.link} target="__blank">
          <ContactInfoText>
            {each.text}
          </ContactInfoText>
          </ContactLink>

        </ContactInfo>
      )}
    </ContactInfoContainer>
    </AboutParaContainer>  
    </AboutPage>
    
  )

}

export default About