import Project from './components/project'
import About from './components/about'
import Home from './components/home'
import UConnSurvive from './pages/uconnsurvive'
import parkUpConfig from './tilesConfig/parkUp'
import motionGraphicConfig from './tilesConfig/motionGraphic'
import graphicConfig from './tilesConfig/graphic'
import illustrationConfig from './tilesConfig/illustration'
import muralConfig from './tilesConfig/mural'
import riderConfig from './tilesConfig/rider'
import uconnSurviveConfig from './tilesConfig/uconnsurvive'
import arConfig from './tilesConfig/augmented'

export const defaultTopMargin = 'calc(48px + 0.8vw)';
export const halfDefaultTopMargin = 'calc(24px + 0.4vw)';
export const workTiles = [
 { pic: 'tile-uconnsurvive.png', text: 'UConn Survive', link: "/uconnsurvive" },
 { pic: 'tile-rider.png', text: "Rider", link: "/rider" } ,
 { pic: 'tile-parkup.png', text: 'ParkUp', link: "/parkup" },
 { pic: 'tile-ar.png', text: "Augmented Reality", link: "/ar"},
]

export const playTiles = [
    { pic: 'tile-graphic.png', text: 'Posters', link: "/graphic" },
    { pic: 'tile-motiongraphic.jpg', text: 'A Hug For Soup', link: "/motiongraphics" },
    { pic: 'tile-mural.jpg', text: 'AsACC Mural', link: "/mural" },
    { pic: 'tile-moonboat.jpg', text: 'Digital Art', link: "/illustration" },
]

export const navBarItems = [
 { id: "", link:"/" , name:"work"},
 { id: "play", link: "/play", name: "play"},
 { id:"about", link:"/about", name:"about"},
 { id: "resume", link:"/resume", name:"resume"},

]

export const routingItems = [
 { path:"/", component: Home },
 { path:"/play", component: Home },
 { path:"/about", component: About},
 { path:"/graphic", component: Project },
 { path:"/illustration", component: Project },
 { path:"/rider", component: Project }, 
 { path:"/mural", component: Project },
 { path:"/parkup", component: Project },
 { path:"/motiongraphics", component: Project },
 { path:"/uconnsurvive", component: UConnSurvive },
 { path:"/ar", component: Project }
] 
const tagLineString =  "Hello, I'm Apoorva!"
const playTagLineString = "Creative Playground"
export const playTagLine = playTagLineString.split("")
export const firstTagLine = tagLineString.split("")
export const fadeFirstTagLine = "aspiring designer majoring in human-computer interaction with a concentration in user experience design at the university of connecticut."
export const fadeSecondTagLine = "a believer of making visions a reality."
export const aboutPageConfig = {
  quoteOne: "practical in mind",
  quoteTwo: "creative at heart.",
  paragraphs:[
    "I’m currently a Human-Computer Interaction major and a Computer Science minor at the University of Connecticut. Apart from design, I love to dance, travel and wouldn’t mind eating pani puri for all my meals. I am also a professional eyeroller and avid list-maker.",
    "I was born in Boston but I moved to India a few years later and then moved back to the US for college. The constant back and forth move shaped my perspective and the way I adapt to things in life. It made me embrace the different ways people think and interact, shaping me as a designer and the person that I am today.",
    "I’m eager to work with partners and companies that have the same values as I do. If you think that's you, feel free to contact me:"
  ],
  contacts:[
    {
    
      title: "Email", text:"apoorva.kulkarni@uconn.edu", link: "mailto:apoorva.kulkarni@uconn.edu"
    },
    {
      title: "LinkedIn", text:"www.linkedin.com/in/apoorvakulkarni", link:"https://www.linkedin.com/in/apoorvakulkarni/"
    }
  ]
}

export const pagesConfig = {
  "illustration": illustrationConfig,
  "motiongraphics": motionGraphicConfig,
  "mural": muralConfig,
  "graphic": graphicConfig,
  "parkup": parkUpConfig,
  "rider": riderConfig,
  "uconnsurvive": uconnSurviveConfig,
  "ar": arConfig
}