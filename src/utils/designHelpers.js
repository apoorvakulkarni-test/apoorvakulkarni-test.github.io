import React from 'react'
import styled from 'styled-components'
import { Para } from './designComponents'
import imagePath from './imagePath'
import uuid from 'uuid'


const PicContainer = styled.div`
 display: flex;
 justify-content: center;
`

const Item = styled(Para)`
  margin-top: 8px;
`
const InlineHeading = styled.span`
 font-weight:${props => !props.underline ? 800 : 0};
 text-decoration: ${props => props.underline ? 'underline': ''};
 font-family: JosefinRegular;
 font-size: calc(0.8em + 0.6vw);
 line-height: 1.3;
 margin-top: ${props => props.marginTop };
 margin-bottom: ${props => props.marginBottom};
`
const InlinePara = styled(Para)`
 display: inline;
`
const Pic = styled.img`
 height: 300px;
`
export const FlexibleContainer = styled.div`
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
`
const ItemContainer = styled.ul`
    margin: 0;
`
export const AlbumContainer = (props) => {
 return(
 <PicContainer>
  {props.pics.map(each => <Pic src={imagePath(each.pic)} key={uuid()} /> )}
 </PicContainer>
 )
}
export const ListItems = (props) => {
    return <ItemContainer>
        {props.items.map(item => <Item key={item}>{item}</Item>)}
    </ItemContainer>

}
export const SingleLine = (props) => {
    return(
        <FlexibleContainer 
            marginTop={props.marginTop} 
            marginBottom={props.marginBottom}>
            <InlineHeading underline={props.underline}>{props.heading}</InlineHeading>
            <InlinePara>{props.text}</InlinePara>
        </FlexibleContainer>
    )
}

