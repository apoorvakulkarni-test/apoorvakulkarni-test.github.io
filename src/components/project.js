import React, { Component } from 'react'
import { pagesConfig } from '../config'
import { TYPES, paraSpace, headingSpace, sectionSpace } from '../consts'
import imagePath from '../utils/imagePath';
import { Heading, 
    Title, 
    Para, 
    BodyContainer, 
    WorkImage, 
    Section,
    WorkImageCap, 
    AlbumPics, 
    AlbumPic, 
    StudyCasePic, 
    Subtitle } from '../utils/designComponents'
import Carousel from '../utils/carousel'
import { SingleLine, ListItems, FlexibleContainer } from '../utils/designHelpers'
import uuid from 'uuid'
import ReactPlayer from 'react-player'
import ReactGA from "react-ga";

const generateComponent = (each) => {
    switch(each.type){
        case TYPES.VIMEO:
          return <ReactPlayer 
                    height="40vw"
                    width="100%" 
                    url={each.url} />

        case TYPES.TITLE:
          return <Title>{each.text}</Title>
        case TYPES.SUBTITLE:
          return <Subtitle>{each.text}</Subtitle>
        case TYPES.HEADING:
          return <Heading {...each}>{each.text}</Heading>
        case TYPES.PARA:
          return <Para  {...each}>{each.text}</Para>
        case TYPES.PIC:
          return <WorkImage 
          src={imagePath(each.pic)} 
          {...each} ></WorkImage>
        case TYPES.CAPTION:
          return <WorkImageCap>{each.text}</WorkImageCap>
        case TYPES.ALBUM:
          return(
            <AlbumPics>
              {each.pics.map(eachPic => <AlbumPic key={uuid()} src={imagePath(eachPic)} />)}
            </AlbumPics>
         )
        case TYPES.SINGLELINE:
            return <SingleLine {...each} />
        case TYPES.CAROUSEL:
            return <Carousel vertical={each.vertical} {...each} pics={each.pics} />
        case TYPES.STUDYCASE:
            return <StudyCasePic src={imagePath(each.pic)} />
        case TYPES.LINEBREAK:
            return <br />
        case TYPES.SECTION:
            return <Section {...each}>{each.text}</Section>
        case TYPES.LIST:
            return <ListItems {...each}/>
        default:
          return null
      }
}
class Project extends Component {
 state = {
  pageConfig: null
 }
 componentWillMount() {
  window.scroll(0,0)
  const urlPath = this.props.location.pathname.split("/").pop()
  this.setState({
   pageConfig: pagesConfig[urlPath]
  })
 }

 componentDidMount() {
    ReactGA.initialize('UA-178887327-1');
    ReactGA.pageview(window.location.pathname);
 }

 getMargin = (index,cur) => {
    const pageConfigs = this.state.pageConfig;

    if(index === 0 || index === pageConfigs.length - 1) {
        return '0px';
    } else {
        switch(pageConfigs[index + 1].type) {
            case TYPES.SECTION:
                return sectionSpace
            case TYPES.HEADING:
                if(cur.type === TYPES.SECTION) {
                    return paraSpace
                } else {
                    return headingSpace
                }
            case TYPES.SINGLELINE:
                if(cur.type === TYPES.SINGLELINE) {
                    return '0px'
                } else {
                    return paraSpace
                }
            case TYPES.LIST:
                return '0px'
            case TYPES.CAPTION:
                if(cur.type === TYPES.CAROUSEL) {
                    return '0px'
                } else {
                    return paraSpace;
                }
            case TYPES.CAROUSEL:
                if(cur.type === TYPES.CAPTION) {
                    return headingSpace;
                } else {
                    return paraSpace
                }
            case TYPES.ALBUM:
                if(cur.type === TYPES.CAPTION) {
                    return headingSpace;
                } else {
                    return paraSpace
                }
            default:
                return paraSpace
        }
    }

 }
 render() {
   
  return(
   <BodyContainer>
     { this.state.pageConfig.map((each, index) => {
       const marginBottom = this.getMargin(index,each);
       return (
       <FlexibleContainer key={uuid()} marginBottom={marginBottom}>
           {generateComponent(each)}
       </FlexibleContainer>)
     })}
   </BodyContainer>
  )
 }
 
}
export default Project
