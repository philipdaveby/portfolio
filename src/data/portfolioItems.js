import eatsy from '../images/eatsy.png';
import reminders from '../images/reminders.png';
import workouts from '../images/workout.png';
import uberclone from '../images/uberclone.png';
import netflixclone from '../images/netflixclone.png';
import portfolio from '../images/portfolio.png';
import react from '../images/logo/react.png'
import express from '../images/logo/express.png'
import node from '../images/logo/node.png'
import gatsby from '../images/logo/gatsby.png'
import sass from '../images/logo/sass.png'
import docker from '../images/logo/docker.png'
import typescript from '../images/logo/typescript.png'
import tailwind from '../images/logo/tailwind.png'
import heroku from '../images/logo/heroku.png'
import css from '../images/logo/css3.webp'
import graphql from '../images/logo/graphql.png'
import apollo from '../images/logo/apollo.png'
import netlify from '../images/logo/netlify.webp'
import jest from '../images/logo/jest.webp'
import socket from '../images/logo/socket.png'
import firebase from '../images/logo/firebase.png'
import mongoDB from '../images/logo/mongodb.webp'
import javascript from '../images/logo/javascript.webp'
import redux from '../images/logo/redux.webp'

const portfolioItems = [{
    name: 'Eatsy',
    text: ['Eatsy will schedule a meal plan for you, so you know exactly what to cook every meal, day and week. No more planning!',
            'This was the final project of the </salt> bootcamp'
        ],
    imageLink: eatsy,
    imageAlt: 'Eatsy app screenshot',
    webLink: 'https://eatsy.tk',
    gitLink: 'https://github.com/Wppvater/salted-paj-final-project',
    gridArea: 'portfolio-item-1',
    id: 1,
    info: "Eatsy will schedule a meal plan for you, so you know exactly what to cook every meal, day and week. No more planning! This was the graduation project at </salt>.",
    techStack: [react, gatsby, sass, apollo, graphql, node, express, docker, heroku]
},
{
    name: 'Reminders',
    text: ['A simple way to remember everything you have to do and share it with anyone you like.',
            'Built with Typescript, Socket, Firebase and MongoDB'
        ],
    imageLink: reminders,
    imageAlt: 'Reminders app screenshot',
    webLink: 'https://todoreminders.vercel.app/',
    gitLink: 'https://github.com/philipdaveby/reminders',
    gridArea: 'portfolio-item-2',
    id: 2,
    info: "A simple way to remember everything you have to do and share it with anyone you like. Built with Typescript, Socket, Firebase and MongoDB",
    techStack: [typescript, react, tailwind, socket, node, express, docker, jest, mongoDB, firebase, heroku]
},
{
    name: 'Workouts',
    text: ['Workouts was initally created during a hackday at </salt>. ',
            'Create you own workouts, reorder them as you like and check them off'
        ],
    imageLink: workouts,
    imageAlt: 'Workouts screenshot',
    webLink: 'https://musing-mclean-d22dac.netlify.app',
    gitLink: 'https://github.com/philipdaveby/hack-day',
    gridArea: 'portfolio-item-3',
    id: 3,
    info: "Select the exercises you want to include in your workout, give it a name, get started! Reorder inside workouts using drag and drop. Workout app was initially a 'Hack day' project during the </salt>, where I developed an app from scratch in one day.",
    techStack: [javascript, react, sass, netlify, mongoDB, express, node, docker, heroku]
},
{
    name: "Portfolio",
    text: ['A frontend website built to showcase my projects and give you information about me.'
        ],
    imageLink: portfolio,
    imageAlt: 'Portfolio screenshot',
    webLink: 'http://www.philipdaveby.tech',
    gitLink: 'https://github.com/philipdaveby/portfolio',
    gridArea: 'portfolio-item-4',
    id: 4,
    info: "My portfolio showcases my latest projects and their tech stack. The goal was to give a clear presentation of each website and it's features.",
    techStack: [javascript, react, sass, netlify]
},
{
    name: "Uber Clone",
    text: ['A frontend clone of the popular Uber app to showcase React Native'],
    imageLink: uberclone,
    imageAlt: 'Uber app screenshot',
    webLink: 'https://github.com/philipdaveby/uber-clone',
    gitLink: '',
    gridArea: 'portfolio-item-5',
    id: 5,
    info: 'A frontend clone of the popular Uber app to showcase React Native',
    techStack: [javascript, react, redux, css, tailwind]
},
{
    name: "Netflix Clone",
    text: ['A frontend clone of the Netflix website to showcase Typescript and React'],
    imageLink: netflixclone,
    imageAlt: 'Netflix screenshot',
    webLink: 'https://netflix-clone-8485b.web.app/',
    gitLink: 'https://github.com/philipdaveby/netflix-clone',
    gridArea: 'portfolio-item-6',
    id: 6,
    info: 'A frontend clone of the Netflix website to showcase Typescript and React',
    techStack: [javascript, typescript, react, css]
}
// {
//     name: "ToDo",
//     text: ['A todo application to help you remember your tasks and mark them as done',
//         'Built purely as a frontend application'
//         ],
//     imageLink: todo,
//     imageAlt: 'Todo app screenshot',
//     webLink: 'https://zen-morse-86e998.netlify.app',
//     gitLink: 'https://github.com/philipdaveby/todo',
//     gridArea: 'portfolio-item-5',
//     id: 5,
//     info: "Philip's ToDo app let's you write done things and check them off once done, so you won't forget what to do. This application was built during the bootcamp purely as frontend.",
//     techStack: [javascript, react, sass, netlify]
// }
];

export default portfolioItems;
