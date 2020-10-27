import { TYPES } from '../consts'
export default [
  {
    type: TYPES.TITLE,
    text: "Park Up"
  }, 
  {
    type: TYPES.SUBTITLE,
    text: "Mobile UI - Personal Project",
    margin: true
  },
  {
    type: TYPES.PARA,
    text:`Park Up is a mobile application that solves the universal issue of chaotic parking on college campuses. Due to the large amount of parking passes issued, students and faculty spend almost an hour trying to find parking every morning. This results in a huge loss of money, gas as well as time. Park Up offers a solution to this issue by allowing parkers to reserve their spot before they park and change the experience of chaotic, stressful parking to a simple, hassle-free daily activity.`,
    
  },
  {
    type: TYPES.SINGLELINE,
    heading: "Role:  ",
    text: "Research, User Flow, Information Architecture, Sketching, Wireframing, Branding UI, Prototyping"
  },
  {
    type: TYPES.SINGLELINE,
    heading: "Users:  ",
    text: "College students and faculty "
  },
  {
    type: TYPES.SINGLELINE,
    heading: "Timeline:  ",
    text: "Five day design challenge",
  },
  {
    type: TYPES.PIC,
    pic: 'parkupFirstPic.png'
  },
  {
    type: TYPES.HEADING,
    text: 'Challenge:'
  },
  {
    type: TYPES.PARA,
    text: `A great majority of my friends who commute absolutely dread parking on campus. It takes up too much of their time to find on-campus parking and the situation gets even worse during exam season. The university’s roads are filled with jammed up traffic which gives rise to frustrated and annoyed drivers. 
    Since this issue is prevalent in most academic institutions primarily universities and colleges, I decided to create a solution for it.`,
    
    
  },
  {
    type: TYPES.HEADING,
    text: "Goals:"
  },
  {
    type: TYPES.PARA,
    text: `Park Up is the ultimate solution to parking as it reduces traffic and makes institutional parking much more efficient. This application aims to save students’ time, money and gas by making parking a more hassle-free and systematic experience.`,
  },
  {
    type: TYPES.SECTION,
    text: "Research",
    
  },
  {
    type: TYPES.HEADING,
    text: "Competitive Analysis:"
  },
  {
    type: TYPES.PIC,
    pic: 'parkupTable.png'
  },
  {
    type: TYPES.HEADING,
    text: "Summary:"
  },
  {
    type: TYPES.PARA,
    text: `Park Up’s closest competitors were Honk and UC San Diego however these applications did not include the three main elements that makes Park Up unique:`
  },
  {
    type: TYPES.LIST,
    items: [
        '• Parking lot information and updates',
        '• Parking mechanism (reserve, park, end/extend)',
        '• Exclusively for college campuses'
    ]
  },
  {
    type: TYPES.HEADING,
    
    text: "User Research:"
  },
  {
    type: TYPES.PARA,
    text: `I started my research process by identifying my audience. I interviewed eight parkers and was able to note down their concerns. Based on the interviews, I got a lot of insight on the potential users as well as noticed what their main concerns were and began brainstorming ideas to solve them.`,
  },
  {
    type: TYPES.PARA,
    text: "After I conducted interviews, I found that there are three types of parkers:",
  },
  {
    type: TYPES.LIST,
    items: [
        '• Daily commuters: Individuals who park for long periods of time, usually from the morning till the night time, on a daily basis',
        '• Non-commuters: Individuals, typically students, who live on-campus but have a parking pass to park their car so they do not need to rely on public transportation and travel home on the weekends',
        '• Rare commuters: Individuals who are part time students or faculty members that park on campus for short periods of time, typically a few hours, for a few days of the week'
    ]
  },
  {
    type: TYPES.CAROUSEL,
    pics: ['parkupUserResearchSlideOne.jpg','parkupUserResearchSlideTwo.jpg','parkupUserResearchSlideThree.jpg'],
    noSlide: true,
    ratio: 0.5626
  },
  {
    type: TYPES.SECTION,
    text: "Features"
  },
  {
    type: TYPES.HEADING,
    text: "Mechanism:",
    
    
  },
  {
    type: TYPES.PARA,
    text: "This application's mechanism comprises of four simple steps:",
  },
  {
    type: TYPES.LIST,
    items: [
        '1. Create an account or sign in',
        '2. Reserve a spot when the user is on the way to his/her destination',
        '3. Park in the selected spot and set the timer.',
        '4. End or extend time duration depending on the situation.'
    ]
  },
  {
    type: TYPES.HEADING,
    text: "Parkers' Form:"
  },
  {
    type: TYPES.PARA,
    text: "As I conducted interviews, I noticed that there were not any methods of communication between the parkers. I noticed that my university uses the Facebook group page to notify one another about events and issues relevant to commuters and happenings occuring in parking lots and on-campus roads. The group page neither practical nor efficient because most of these posts get hidden over the memes, book sales and other UConn related posts. That is why, this additional feature would be a great addition as it creates a community for parkers to discuss issues and notify one another of recent activity on campus. This way, there will not be any missing updates and parkers would not need to search through the hundreds of posts for relevant information.",
  },
  {
    type: TYPES.SECTION,
    text: "User Flow",
    
  },
  {
    type: TYPES.PARA,
    text: "After exploring a few different flows,  I decided to go with one that allows the user to easily reserve the spot because this allows the user to focus on the main focus and intent of this application- to make parking simpler and systematic- and create a sense of community within the parkers who face the same issues but have no place to talk about it.",
},
  {
    type: TYPES.PIC,
    pic: 'parkupUserFlow.jpg'
  },
  {
    type: TYPES.LINEBREAK
  },
  {
    type: TYPES.SECTION,
    text: "Low-fidelity Sketches",
    
  },
  {
    type: TYPES.PARA,
    text: "I used sticky notes to ideate my thought process. After I finished rough sketches on sticky notes, I used InVision to create a mid-fidelity prototype."
  },
  {
    type: TYPES.PIC,
    pic: 'parkupLowFidelity.jpg'
  },
  {
    type: TYPES.SECTION,
    text: "Information Architecture",
    
  },
  {
    type: TYPES.PARA,
    text: "I mapped out the entire application and organized the application in a sequential format. I included sign-up and account pages to allow for user-user interaction and multiple account functionality."
  },
  {
    type: TYPES.PIC,
    pic: 'parkupWireFrame.jpg' 
  },
  {
    type: TYPES.SECTION,
    text: "Prototype",
    
  },
  {
    type: TYPES.PARA,
    text: "Using InVision, I redesigned the mechanism interfaces to account for the emphasis on the search feature and account creation. I also added instructional interfaces to give the user clarity on how this application can be most efficiently used.",
  },
  {
    type: TYPES.PIC,
    pic: 'parkupIsometric.png'
  },
  {
    type: TYPES.SECTION,
    text: "User Testing"
  },
  {
    type: TYPES.PARA,
    text:"I conducted user testing on my mid-fidelity prototype in InVision to see how users would complete certain tasks once they were given some context. I conducted my testing with individuals who belong to the three different categories of parkers. Overall, users appreciated the level of control the application had.",
  },
  {
    type: TYPES.SECTION,
    text:"User Interface",
    
  },
  {
    type: TYPES.HEADING,
    text: "Branding",
    
  },
  {
    type: TYPES.PARA,
    text: "To begin my logo design, I began playing with the letters “P” and “U”. The letters blend into each other to signify easy flow and effortlessness, placing importance on the application’s priority of hassle-free user experience."
  },
  {
    type: TYPES.PIC,
    pic: 'parkupInitialLogo.jpg'
  },
  {
    type: TYPES.CAPTION,
    text: "Initial logo design"
  },
  {
    type: TYPES.ALBUM,
    pics: ['parkupTransparentLogo.png', 'parkupColoredLogo.png']
  },
  {
    type: TYPES.CAPTION,
    text: "Transparent and colored logos"
  },
  {
    type: TYPES.HEADING,
    text: "Style Guide",
    
    
  },
  {
    type: TYPES.PARA,
    text: "I wanted to translate fun and joy into colors. As a result, I chose a vibrant color palette that gave a sense of playfulness and trust. The magenta, turquoise and warm yellow give users a light-hearted and welcoming feel."
  },
  {
    type: TYPES.PARA,
    text: "For typography, I used rounded fonts like Segoe UI and Bahnschrift to make the application look more inviting."
  },
  {
    type: TYPES.PIC,
    pic: 'parkupColors.jpg'
  },
  {
    type: TYPES.SECTION,
    text: "Reflection"
  },
  {
    type: TYPES.PARA,
    text: "This was a five day design sprint that I challenged myself with and as a result, there was only so much I could do. However, I am pretty happy with what I have created as it was my first time working with InVision and indulging into prototyping and wireframing. As of now, I have only designed an iOS version but I plan on creating an android version as well. My next steps are to develop both versions and put it out for the world to use."
  },
  {
    type: TYPES.PARA,
    text:"Overall, this project was a great learning experience. This was my second product design and it reinforced the fact that this is what I want to do with my life.",
  }
]
