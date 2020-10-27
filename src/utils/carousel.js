import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid'
import colors from '../colors'
import imagePath from './imagePath'

const verticalPicRatio = (800/ 565).toString();
const horizontalPicRatio = (656 / 1500).toString();
const defaultWidth = '16em + 19vw';
const verticalPicWidth =  'calc(' + defaultWidth + ')'
const verticalPicHeight = ratio => 'calc((' + defaultWidth + ') *' + (ratio ? ratio : verticalPicRatio) + ')'
const maxHorizontalHeight = ratio => 'calc((' + defaultWidth + ') *' + (ratio ? ratio : horizontalPicRatio) + ')' 
const horziontalPicWidth = '70vw'
const horziontalPicHeight = ratio => 'calc(' + horziontalPicWidth + '*' +  (ratio ? ratio : horizontalPicRatio) + ')'
const CarouselContainer = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 margin: 0 auto; 
`

const CarouselOuter = styled.div`
 position: relative;
 overflow:hidden;
 width: ${props => props.vertical === 'true' ? verticalPicWidth : horziontalPicWidth};
 min-width: ${props => props.vertical === 'true' ? 'auto' : verticalPicWidth };
 min-height ${props => props.vertical === 'true' ? 'auto' : maxHorizontalHeight(props.ratio)};
 height: ${props => props.vertical === 'true' ? verticalPicHeight(props.ratio)  : horziontalPicHeight(props.ratio) };
 margin: auto;
`
const Circle = styled.span`
 background-color:${props => props.turned ? colors.orange : "rgba(0,0,0,0.3)"};
 width: 8px;
 margin: 0 0.3em;
 height: 8px;
 border-radius: 50%;
 cursor: pointer;
`
const CircleContainer = styled.div`
 margin-top: 1em;
 display: flex;
 margin: 1em auto;

`
const CarouselInner = styled.div`
 position: absolute;
 display:block;
 height: 100%;
 width: 100%;
 transition: 0.5s ease-in-out;
 transform: translateX(${props => props.index * 100*-1}%);
 white-space: nowrap;
`
const CarouselPic = styled.img`
 display: inline-block;
 width: 100%;
`

class Carousel extends React.Component{
 constructor(props) {
  super(props)

  this.state = {
   cur: 0,
   picLength: this.props.pics.length
  }
 }

 componentDidMount () {
    const picLength = this.props.pics.length
    if(!this.props.noSlide) {
        window.setInterval(() => {
            this.setState({
             cur: (this.state.cur + 1) % picLength
            })
           },2300)
    }
 }

 setIndex = (index) => {
  this.setState({
   cur: index % this.state.picLength
  })
 }

 createCircles = () => {
  const returnArray = []
  for(var i =0 ; i < this.state.picLength;i++){
   returnArray.push(i)  
  }
  
 return returnArray
}

 render(){
  const circlesArray = this.createCircles()
  return(
   <CarouselContainer>
   <CarouselOuter ratio={this.props.ratio ? this.props.ratio : null} vertical={this.props.vertical ? 'true' : 'false'}>
   <CarouselInner index={this.state.cur}>
    {this.props.pics.map(eachPic => <CarouselPic key={uuid()} src={imagePath(eachPic)}></CarouselPic>)}
   </CarouselInner>
   </CarouselOuter>
   <CircleContainer>
    {circlesArray.map(each => {
     if(each === this.state.cur){
      return <Circle key={uuid()} turned onClick={() => this.setIndex(each)}/>
   }else{
    return <Circle key={uuid()} onClick={() => this.setIndex(each)}/>
   }
   })}
   </CircleContainer>
   </CarouselContainer>
  )
 }
}
export default Carousel