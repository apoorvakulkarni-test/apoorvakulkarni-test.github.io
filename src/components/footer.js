import React from 'react'

import styled from 'styled-components'

const FooterText = styled.p`
 font-family: JosefinRegular;
 font-size: calc(0.70em + 0.2vw);
 line-height: 1.3;
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export default () => (
    <FooterContainer>
        <FooterText>©2020 - Apoorva Kulkarni</FooterText>
    </FooterContainer>
)