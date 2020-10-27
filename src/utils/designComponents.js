
import styled from 'styled-components'
const defaultTopMargin = 'calc(48px + 0.8vw)';

export const TempContainer = styled.div`
    width: 100%;
`

export const Title = styled.h1`
 font-family: "Yeseva";
 font-size: calc(1.8em + 1.6vw);
 font-weight: 400;
 margin: ${defaultTopMargin} 0 ${props => props.margin ? defaultTopMargin : 0} 0;
`

export const Subtitle = styled.p`
 color: gray;
 font-family: "Yeseva";
 font-size: calc(0.6em + 0.5vw);
 font-weight: 400;  
 margin: 0 0 calc(41px + 0.8vw) 0;
`

export const Section = styled.h2`
 margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
 margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
 font-family: "JosefinRegular";
 font-size: calc(1.15em + 1.2vw);
 font-weight: 800;
`

export const Heading = styled.h3`
 font-weight:800;
 font-family: JosefinRegular;
 font-size: calc(1em + 0.6vw);
 line-height: 1.3;
 margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
 margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`
export const Para = styled.p`
 font-family: JosefinRegular;
 font-size: calc(0.95em + 0.3vw);
 line-height: 1.3;
 margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
 margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`
export const BodyContainer = styled.div`
  margin-left: calc(6em + 3.5vw);
  margin-right: calc(6em + 3.5vw);
  margin-top: 2em; 
  margin-bottom: 6em;
  @media (max-width: 660px) {
    margin: 2em;
  }
`

export const WorkImageContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: ${props => props.marginTop};
 margin-bottom: ${props => props.marginBottom};
`


export const WorkImage = styled.img`
 display: block;
 margin: 0 auto;
 object-fit: contain;
 width: ${props => props.vertical ? 'calc(16em + 19vw)' : '70vw'};
 min-width: ${props => props.vertical ? 'auto' : 'calc(16em + 19vw)'};
`
export const WorkImageCap = styled.p`
 font-family: JosefinRegular;
 font-size: calc(0.70em + 0.25vw);
 opacity: 0.8;
 margin: 0;
 text-align: center;
`
export const StudyCasePic = styled.img`
 display: block;
 margin: 0 auto;
 width: 65%;
 @media (max-width: 750px) {
   width: 85%;
 }
`

export const AlbumPics = styled.div`
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 margin: calc(0.5em + 0.4vw) auto;
`
export const AlbumPic = styled.img`
  height: calc(8.5em + 11vw);
  object-fit: contain;
  margin: 0.3em 1em;
`