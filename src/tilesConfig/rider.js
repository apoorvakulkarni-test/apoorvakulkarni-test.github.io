import { TYPES } from '../consts'

export default [
    {
        type: TYPES.TITLE,
        text: "TransLoc Rider"
    },
    {
        type: TYPES.SUBTITLE,
        text: "UI/UX Redesign - Personal Project",
        margin: true
    },
    {
        type: TYPES.PARA,
        text: 'TransLoc Rider is a mobile application that allows users to track transit systems. In this redesign, I will primarily be looking at the college transit service that TransLoc provides at the University of Connecticut. My goal for this redesign is to apply Neilson’s heuristics to critique the user interface designs and functionality of the application in order to improve user experience. Even though Rider is an innovative application, there are definite issues that should be addressed specifically involving the complexity, efficiency and usability of the application.'
    },
    {
        type: TYPES.SECTION,
        text: "Process"
    },
    {
        type: TYPES.PIC,
        pic: "riderThree.png",
        vertical: true
    },
    {
        type: TYPES.SINGLELINE,
        heading: "Phase 1:",
        text:" Understand the application. Complete thorough analysis of the application in order to figure out personal pain points, build empathy for the users and familiarize ourselves with Rider."
    },
    {
        type: TYPES.SINGLELINE,
        heading: "Phase 2:",
        text: " Understanding the target audience and user’s behaviours as well as pain points through surveys."
    },
    {
        type: TYPES.SINGLELINE,
        heading: "Phase 3:",
        text: " Understanding the target audience and user’s behaviours as well as pain points through surveys."
    },
    {
        type: TYPES.SINGLELINE,
        heading: "Phase 4:",
        text: " Ideated designs and created design sketches to solve the issues found in the previous step."
    },
    {
        type: TYPES.SINGLELINE,
        heading: "Phase 5:",
        text: "  Merged design solutions from sketches to create final solutions."
    },
    {
        type: TYPES.SECTION,
        text: "User Behavior"
    }, 
    {
        type: TYPES.HEADING,
        text: "User Profile",
    },
    {
        type: TYPES.PARA,
        text: "Target Demographic College Students and Faculty/Staff",
    },
    {
        type: TYPES.LIST,
        items: [
            '• 18-60 years old',
            '• Has potential to be used by other age groups and demographics such as parents and other adults/elderly visiting their children or coming to see sport games and other events on campus',
            '• Needs to get from one place to another from the closest bus stop through the fastest bus route to the destination.',
            '• Wishes to walk minimum amount of time',
            '•  User is on the UConn Storrs Campus to take the HuskyGo buses'
        ],
    },
    {
        type: TYPES.PARA,
        text: "By conducting surveys, I was able to understand what aspects of the application were painful and what were appreciated by the users. I also immersed myself in competitive research to find Rider was lacking in comparison to its competitors as well as what third party apps are being used to fill in the gaps of Rider’s current functions.",
    },
    {
        type: TYPES.PIC,
        pic: 'riderSeven.png',
        vertical: true
    },
    {
        type: TYPES.CAPTION,
        text: "Survey findings"
    },
    {
        type: TYPES.SECTION,
        text: "Usability Evaluation"
    }, 
    {
        type: TYPES.PARA,
        text: "To evaluate the usability of the Rider application, I used heuristic evaluation. I analysed the application by performing three pre-identified tasks and writing down any usability problems faced while making sure these observations were detailed and meticulous. While thinking from a user’s perspective, I recognized pain points, scored severity and ideated solutions. The three tasks were:",
    },
    {
        type: TYPES.LIST,
        items: [
            '1. Seaching and selecting a bus route',
            '2. Setting a timer notification',
            '3. Using the favorite feature'
        ]
    },
    {
        type: TYPES.SECTION,
        text: "Findings"
    },
    {
        type: TYPES.PARA,
        text: "Most of the confusion was due to the absence of an onboarding process. The application was complicated and users relied on self instruction to navigate the application. The iconography also seemed to be difficult to interpret as some unique and uncommon icons were used. These vague icons did not have any labels to help users understand the meaning and view additional information. The ambiguity of the application harshly affected the user experience which can potentially make users stop using the application. "
    },
    {
        type: TYPES.HEADING,
        text: "Task 1: Searching and selecting a bus route to travel"
    },
    {
        type: TYPES.SINGLELINE,
        heading: "a) Lack of automated result",

    },
    {
        type: TYPES.PARA,
        text: "Severity : 4"
    }, 
    {
        type: TYPES.PARA,
        text: "Heuristic:  Recognition rather than recall, Flexibility and efficiency of us"
    },
    {
        type: TYPES.PARA,
        text:  "Description: Performing task one was extremely time consuming and difficult especially for novice users. When a user wishes to select a bus route to travel from current location to desired destination, the user has to manually click on the available bus routes to find the user’s desired location. Further, the application does not have a search option to look for destinations which causes the user to recursively search through the list of bus routes that stop at the desired destination. Due to the lack of automated results, users must manually search through the numerous bus lines and stops to figure out which buses can take them from their current location to their desired destination. Users must not only calculate the bus stop closest to them but also which bus lines stop at their nearest bus stop. This causes frustration and a sense of overwhelm especially in cases when the user is a novice user or in a hurry to go somewhere."
    },
    {
        type: TYPES.SINGLELINE,
        heading: "b) Ambiguous Icons",
    },
    {
        type: TYPES.PARA,
        text: "Severity : 2"
    }, 
    {
        type: TYPES.PARA,
        text: "Heuristic:  Consistency and standards, Recognition rather than recall"
    },
    {
        type: TYPES.PARA,
        text:  'Description:  Since the bus travelling icon is the same as the current location icon, it creates confusion within the user. Users would have to remember that the icon that moves is the bus and not the current location icon. Further, the bus stop icon used in the menu bar differs from the one on the map. When the user clicks on the bus stop icon on the map, it transforms into the icon used in the menu bar.'
    },
    {
        type: TYPES.PIC,
        pic: "riderEleven.png",
        vertical: true
    },
    {
        type: TYPES.HEADING,
        text: "Task 2: Setting a timer notification"
    },
    {
        type: TYPES.SINGLELINE,
        heading: "a) Limits customisation"
    },
    {
        type: TYPES.PARA,
        text: "Severity: 2"
    },
    {
        type: TYPES.PARA,
        text: "Heuristic evaluation: Flexibility and efficiency of use"
    },
    {
        type: TYPES.PARA,
        text: "Description: When setting a reminder, users are only given the option of times that are in 5 minute intervals. Although this gives the user an opportunity to save time by setting a notification, the user is not given the liberty to customize the amount of time that they would like to be notified. This affected the ease of use, satisfaction of the user and time efficiency negatively."
    },
    {
        type: TYPES.PIC,
        pic: "riderNine.png",
        vertical: true
    },
    {
        type: TYPES.HEADING,
        text: "Task 3: Using the favorite feature"
    },
    {
        type: TYPES.SINGLELINE,
        heading: "a) Insufficient information regarding the favorite feature."
    },
    {
        type: TYPES.PARA,
        text: "Severity: 3"
    },
    {
        type: TYPES.PARA,
        text: "Heuristic evaluation: Help and Documentation"
    },
    {
        type: TYPES.PARA,
        text: "The favorite feature has a lot of scope for improvement. Due to the lack of clarity, users may have to wander through the application to figure out how to use it. When users clicked on the heart icon in the menu bar, they were met with a message saying “Hi, looks like you don’t have any favorites yet. Tap on a heart and give it a try!”. These instructions do not provide what this feature is used for, more specifically what can be favorited: bus line or bus stop, and where the heart can be found."
    },
    {
        type: TYPES.SINGLELINE,
        heading: "b) Icon ambiguity"
    },
    {
        type: TYPES.PARA,
        text: "Severity: 3"
    },
    {
        type: TYPES.PARA,
        text: "Heuristic evaluation: Consistency and Standards, Error prevention"
    },
    {
        type: TYPES.PARA,
        text: "Description: While some users may be unsure which heart the instructions were referring to, other users may struggle to find the heart. Since the heart is a very small icon, it emphasised the ambiguity of whether the heart was an indicator or a clickable button. Additionally, there are other icons surrounding the small heart icon making it easy for users to accidently click the other icons. Overall, the favorite feature needs to be better. "
    },
    {
        type: TYPES.PIC,
        pic: "riderTen.png",
        vertical: true
    },
    {
        type: TYPES.SECTION,
        text: "Design Process"
    },
    {
        type: TYPES.HEADING,
        text: "Indirect Competition"
    },
    {
        type: TYPES.PARA,
        text: "Studying Uber and Transit helped to focus efforts in a target market and analyse where Rider stands in the market."
    },
    {
        type: TYPES.PARA,
        text: "Transit is a real-time transit tracking application."
    },
    {
        type: TYPES.PARA,
        text: "Transit App features: Automated search, real time updates, minimalist and comprehensible UI, online schedule/more departures, bus stops list."
    },
    {
        type: TYPES.PARA,
        text: "Uber is a ride-hailing service that allows users to find rides from nearby drivers."
    },
    {
        type: TYPES.PARA,
        text: "Uber app: automated search, real time updates, clear UI, efficient departure and dropoff times, home address, clear iconography. I noticed that there were many features in the Uber app and in the Transit app that can not only inspire solutions to the issues Rider had but also be helpful to better Rider."
    },
    {
        type: TYPES.HEADING,
        text: "Sketches",
    },
    {
        type: TYPES.PIC,
        pic: 'riderFive.png',
    },
    {
        type: TYPES.HEADING,
        text: "Redesign Features"
    },
    {
        type: TYPES.SINGLELINE,
        heading: "a) Organization"
    },
    {
        type: TYPES.PARA,
        text: "With further inspection, I noticed that the settings tab consisted of a bunch of miscellaneous actions along with actual setting actions. The navigation bar restricted the design to four actions resulting in various other actions being grouped in the settings tab. Transforming the navigation bar into a menu allows for the grouping of more actions in an organized manner and is easier to understand as there are symbols along with the titles. "
    },
    {
        type: TYPES.PIC,
        pic: "riderSix.png",
        vertical: true
    },
    {
        type: TYPES.SINGLELINE,
        heading: "b) Consistent and clear iconography"
    },
    {
        type: TYPES.PARA,
        text: "To make the application clearer, new and improved iconography is needed. I noticed that there were two inconsistent icons: bus stop and current location. By implementing improved icons for the bus stop icon and current location, the application will become more consistent and clear. Furthermore, by adding relevant symbols to the menu options helps users to visually interpret actions as well."
    },
    {
        type: TYPES.SINGLELINE,
        heading: "c) Lack of automated result"
    },
    {
        type: TYPES.PARA,
        text: "By implementing an automated result function the user is provided the nearest bus stop to the user’s destination when the user searches for their desired destination. This reduces time, makes the interaction faster and builds trust between the system and user. It eliminates the painful manual search making the process of finding transits much more efficient. "
    },
    {
        type: TYPES.PARA,
        text: "To make this even more convenient, the transfer feature allows users to choose various routes with or without a transfer option. A transfer route is a route that has one or more bus transfers. There may be times when the user would like to go to a particular destination that does not have a direct route. It may require the user to either walk for a while or hop on an additional bus line to get to the desired location. This provides users with choice and flexibility. Users have the option to choose which route is most suitable for their trip. "
    },
    {
        type: TYPES.PIC,
        pic: "riderTwo.png"
    },
    {
        type: TYPES.PARA,
        text: "In addition, by adding a bus routes feature, it provides the user with necessary information such as the bus stops a particular bus line makes and the route the bus travels in. Users can leisurely view this list by clicking on the bus routes feature in the menu bar or by simply clicking on the icon of a bus line.  "
    },
    {
        type: TYPES.PIC,
        pic: 'riderOne.png'
    },
    {
        type: TYPES.SINGLELINE,
        heading: "d) Notification Feature"
    },
    {
        type: TYPES.PARA,
        text: "The notification feature was redesigned to give the user more control and freedom. This feature enables the user to select a specific amount of time before the user wants to receive the bus arrival notification. In addition, in the case of transfer routes, the user can select which bus line to be notified for, providing the user with ultimate control and customisation over the interaction."
    },
    {
        type: TYPES.PIC,
        pic: 'riderFour.png'
    },
    {
        type: TYPES.SINGLELINE,
        heading: "e) Home Address"
    },
    {
        type: TYPES.PARA,
        text: "Most users did not know how to use the favorite feature due to the lack of instruction."
    },
    {
        type: TYPES.PARA,
        text: "Favoriting a bus line seemed impractical since users were most likely to select a favorite/most visited destination rather than a particular bus line. Users most likely would not travel to and from the same locations, therefore, a home address seemed more fitting."
    },
    {
        type: TYPES.SINGLELINE,
        heading: "f) Rudimentary instructions"
    },
    {
        type: TYPES.PARA,
        text: "Overall, the application does provide enough context and instruction for the user to thoroughly understand all of it’s functionality. The dearth of help and documentation proves to be detrimental to the user experience. Creating an instructional help section and introduction instruction will give first time users more assistance to navigate through the application and an overview of the features available within the application. "
    },
    {
        type: TYPES.SECTION,
        text: "Branding"
    },
    {
        type: TYPES.PARA,
        text: "I decided to stick with Rider’s color palette focusing on the black, white, grey and blue.This color palette allows the colors of the bus lines to shine through while maintaining a minimalistic aesthetic. In my initial design, I used colored bus icons to represent each bus line (blue bus, red bus, etc). However, I soon noticed that UConn actually had icons that they used on flyers at their bus stop to indicate which bus line stops there. I proceeded to use these icons in my final design:"
    },
    {
        type: TYPES.PIC,
        pic: "riderTwelve.png"
    },
    {
        type: TYPES.SECTION,
        text: "Summary"
    },
    {
        type: TYPES.PARA,
        text: "Undoubtedly, the team at TransLoc conducted a lot of research and iterations in order to produce the product that we see today. They created the application based on the amount of data that they had while conducting user research and consequently, the features and how they have been laid out must have been the outcome of that research while prioritising the company’s personal agenda and goals."
    },
    {
        type: TYPES.PARA,
        text: "It would be the height of hubris to say that this redesign has “fixed” all the current issues in TransLoc Rider.The amount of research that has been done by me within a limited period of time is fairly small compared to what the TransLoc Rider team did.  I absolutely think a lot more research, usability testing, and iterations can be done to improve the application’s user experience; after all, design is a continuous process!"
    },
    {
        type: TYPES.PARA,
        text: "As a designer, my main priority was to think from the user’s perspective and address their respective wants and needs. I hope I was able to create a new and more user friendly Rider user interface, and I look forward to new additions from TransLoc that will further make the application open to a broadening population."
    },
    {
        type: TYPES.PIC,
        pic: 'riderEight.png'
    }
]