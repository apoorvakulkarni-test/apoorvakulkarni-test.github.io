import React from 'react'
import styled from 'styled-components'
import { paraSpace, sectionSpace, headingSpace } from '../consts'
import imagePath from '../utils/imagePath';
import {
    BodyContainer,
    Title,
    Subtitle,
    Para,
    WorkImage,
    Section,
    Heading,
} from '../utils/designComponents'

import {
    SingleLine,
    FlexibleContainer,
    ListItems
} from '../utils/designHelpers'

const SplitScreen = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top: 0;
    margin-bottom: 0;
    @media (max-width: 1500px) {
        flex-direction: column;
    }
`

const SplitContainer = styled.div`
    display: flex;
    flex-basis: 50%;
    position: relative;
    @media (max-width: 1500px) {
        margin-top: 0.7em;
    }
`
const StylelessLink = styled.a`
    text-decoration: underline;
    color: black;
    &:hover {
        color:  #f6927b;
    }
`
export default () => {
    return (
        <BodyContainer>
            <Title>UConn Survive</Title>
            <Subtitle>Web UI Design - Personal Project</Subtitle>
            <FlexibleContainer marginBottom={paraSpace}>
                <Para>
                    <StylelessLink 
                        href="https://www.instagram.com/uconnsurvive"
                        target="__blank">UConn Survive</StylelessLink> is a digital space on Instagram dedicated to empower unheard and ignored stories. The goal of this platform is to create a community where people can express their abuse, assault and/or harassment stories, learn about other’s experiences and know they’re not alone. At UConn Survive, every story matters.   </Para>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={paraSpace}>
                <SingleLine heading="Role: " text="Product Designer"/>
                <SingleLine heading="Timeline: " text="3 weeks" />
                <SingleLine heading="Platform:  " text="Website" />
            </FlexibleContainer>
            <FlexibleContainer marginBottom={sectionSpace}>
                <WorkImage 
                    src={imagePath("usc-1.jpg")}></WorkImage>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={paraSpace}>
                <Section>Challenge</Section>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={sectionSpace}>
                <Para>
                Although UConn Survive is active on Instagram, it is not an efficient system to maintain an organized community. The Instagram account uses the stories and highlights features to share and save resources, facts and other important information. Based on the feedback from UConn Survivors, the current system makes it difficult and strenuous for them to navigate and find exactly what they are looking for especially in times of need. 
                </Para>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={paraSpace}>
                <Section>Research and Insights</Section>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={sectionSpace}>
                <Para>In order to create a more organized and resourceful platform, I needed to gain a deeper understanding of the need of an online safe space focusing on what kinds of principles and sense of community was desired. Using surveys, semi-structured interviews and general feedback, these were the insights I was able to gather:</Para>
                <ListItems items={[
                    "• It is easier for people to talk about mental health when others open up too and when the conversation is anonymous.",
                    "• Due to inaccurate, downplayed and disguised tellings of stories, some people feel as though their stories are too much, out of the “ordinary” and unrelatable. Stories are the most impactful when they feature personal experiences and acknowledge the dark times.",
                    "• Learning that other people have experienced similar events has helped heal.",
                    "• Society stigmatizes assault, abuse and harassment. When you have to fight with people so they can believe you, it feels isolating, invisible. They saw what they wanted to see, not what I was telling them.",
                    "• Many times, survivors are not given a sense of control. They are either ignored and forced to not share their story because if they do, no one would ever believe them. Creating a space where survivors were supported, believed, helped and heard was important and that was the kind of platform I wanted to design."
                ]} />
            </FlexibleContainer>
            <FlexibleContainer marginBottom={paraSpace}>
                <Section>The Solution</Section>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={sectionSpace}>
                <Para>Through a website, survivors and allies have access to all types of resources, from hotlines to organizations. They can also submit their story, view submitted survivor stories and learn more about UConn Survive.</Para>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={paraSpace}>
                <Section>Minium Viable Product</Section>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={paraSpace}>
                <Para>You can checkout the prototype <StylelessLink 
                href ={`https://www.figma.com/proto/8kGN3plMCHeNtMt1SfQUmk/uconn-survive?node-id=181%3A2133&scaling=min-zoom`} target="__blank">here</StylelessLink>!</Para>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={headingSpace}>
                <SplitScreen>
                    <SplitContainer>
                        <WorkImage
                            vertical={true}
                            src={imagePath("usc-1.gif")} />
                    </SplitContainer>
                    <SplitContainer>
                        <FlexibleContainer>
                            <FlexibleContainer marginBottom={paraSpace}>
                                <Heading>Home Page</Heading>
                            </FlexibleContainer>
                            <Para>The primary function of the website was to view and share stories and this was also the first basic feature I built and laid the foundation to the product.Users also have access to more information about UConn Survive. Understanding why and how the platform was created helps survivors gain a more thorough perspective of UConn Survive’s values and beliefs. In addition, I included the “How we helped” section with the hope that survivors who are uncertain about sharing their story are motivated and empowered to share their own story.</Para>
                        </FlexibleContainer>
                    </SplitContainer>
                </SplitScreen>
            </FlexibleContainer>

            <FlexibleContainer marginBottom={headingSpace}>
                <SplitScreen>
                    <SplitContainer>
                            <WorkImage
                                vertical={true}
                                src={imagePath("usc-2.gif")} />
                    </SplitContainer>
                    <SplitContainer>
                        <FlexibleContainer>
                            <FlexibleContainer marginBottom={paraSpace}>
                                <Heading>Need help?</Heading>
                            </FlexibleContainer>
                            <Para>Survivors are often confused and frustrated about how to get help. Providing the appropriate guidance, support and set of resources can be extremely beneficial to their path of recovery.</Para>
                        </FlexibleContainer>
                    </SplitContainer>
                </SplitScreen>
            </FlexibleContainer>

            <FlexibleContainer marginBottom={headingSpace}>
                <SplitScreen>
                    <SplitContainer>
                            <WorkImage
                                vertical={true}
                                src={imagePath("usc-3.gif")} />
                    </SplitContainer>
                    <SplitContainer>
                        <FlexibleContainer>
                            <FlexibleContainer marginBottom={paraSpace}>
                                <Heading>How to help</Heading>
                            </FlexibleContainer>
                            <Para>Being told that someone has been assaulted, abused or harassed can be incredibly scary, emotional and shocking for the one being told as well as the survivor. Many times we are unsure of how to respond and what to do. Even though one might want to ask questions, express outrage and offer advice, these expressions may come across as judgemental and detrimental to the survivor. Hence, it is important to learn and understand how to help survivors the right way.</Para>
                        </FlexibleContainer>
                    </SplitContainer>
                </SplitScreen>
            </FlexibleContainer>
           
            <FlexibleContainer marginBottom={paraSpace}>
                <Section>Visual Language</Section>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={paraSpace}>
                <Para>The main intention of UConn Survive is to encourage, not force, people to share their stories in order to empower others to share their own to spread awareness and educate others on abuse, assault and harassment at UConn. Visual design plays a major role in fostering a sense of approachability and warmth on this platform. I aimed to evoke a sense of compassion, authenticity, and expressiveness, featuring encouraging, friendly illustrations, and calming, empowering colors. </Para>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={sectionSpace}>
                <WorkImage vertical={true} src={imagePath('usc-5.jpg')} />
            </FlexibleContainer>
            <FlexibleContainer marginBottom={paraSpace}>
                <Section>Reflection</Section>
            </FlexibleContainer>
            <FlexibleContainer  marginBottom={paraSpace}>
            <Para>To make UConn Survive’s website functional, I had to wear multiple hats besides design which made me understand the unique challenges and step in the shoes of roles complementary to product design. I designed not only through a survivor’s perspective but also through a marketing, safeguarding and outreach lens to build a safe, resourceful and helpful community. I learned how to design mindfully as I noticed that there is a tension between creative expression and safety. For example, although illustrations provide visual interest, I had to iterate over which designs to use as some may convey a message that can be interpreted as force or aggression. I learned how to put the survivor first and make sure no aspects were too restrictive, alarming or lighthearted.</Para>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={sectionSpace}>
                <Para>Another emphasis of UConn Survive’s brand is inclusivity and that this value must be reflected across the entire design process. As a designer, I have the ability and responsibility to ingrain greater diversity and representation into my designs. I had to consider how to be more inclusive in all aspects, from including people of different ages, ethnicities, and sexual orientations in my research pool and story collection, to the imagery and content categories that I used in this design.</Para>
            </FlexibleContainer>
            <FlexibleContainer marginBottom={paraSpace}>
                <Section>Next Steps</Section>
            </FlexibleContainer>
            <Para>
            I’m putting my designer hat back on to gather more user feedback on the current MVP to improve the design and promote long-term engagement as well as include more features that can benefit survivors and allies.
            </Para>
            

        </BodyContainer>
    )
}