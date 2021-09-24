import eatsy from '../images/eatsy.png';
import workouts from '../images/workout.png';
import todo from '../images/todo2.png';
import portfolio from '../images/portfolio.png';
import react from '../images/logo/react.png'
import express from '../images/logo/express.png'
import node from '../images/logo/node.png'
import gatsby from '../images/logo/gatsby.png'
import sass from '../images/logo/sass.png'
import docker from '../images/logo/docker.png'
import heroku from '../images/logo/heroku.png'
import graphql from '../images/logo/graphql.png'
import apollo from '../images/logo/apollo.png'
import netlify from '../images/logo/netlify.webp'
import mongoDB from '../images/logo/mongodb.webp'
import javascript from '../images/logo/javascript.webp'

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
    name: 'Workouts',
    text: ['Workouts was initally created during a hackday at </salt>. ',
            'Create you own workouts, reorder them as you like and check them off'
        ],
    imageLink: workouts,
    imageAlt: 'Workouts screenshot',
    webLink: 'https://musing-mclean-d22dac.netlify.app',
    gitLink: 'https://github.com/philipdaveby/hack-day',
    gridArea: 'portfolio-item-2',
    id: 2,
    info: "Select the exercises you want to include in your workout, give it a name, get started! Reorder inside workouts using drag and drop. Workout app was initially a 'Hack day' project during the </salt>, where I developed an app from scratch in one day.",
    techStack: [javascript, react, sass, netlify, mongoDB, express, node, docker, heroku]
},
{
    name: "Portfolio",
    text: ['A frontend website built to showcase my projects and give you information about me.'
        ],
    imageLink: portfolio,
    imageAlt: 'Portfolio screenshot',
    webLink: 'https://hardcore-hoover-0417ae.netlify.app',
    gitLink: 'https://github.com/philipdaveby/portfolio',
    gridArea: 'portfolio-item-3',
    id: 3,
    info: "My portfolio showcases my latest projects and their tech stack. The goal was to give a clear presentation of each website and it's features.",
    techStack: [javascript, react, sass, netlify]
},
{
    name: "ToDo",
    text: ['A todo application to help you remember your tasks and mark them as done',
        'Built purely as a frontend application'
        ],
    imageLink: todo,
    imageAlt: 'Todo app screenshot',
    webLink: 'https://zen-morse-86e998.netlify.app',
    gitLink: 'https://github.com/philipdaveby/todo',
    gridArea: 'portfolio-item-4',
    id: 4,
    info: "Philip's ToDo app let's you write done things and check them off once done, so you won't forget what to do. This application was built during the bootcamp purely as frontend.",
    techStack: [javascript, react, sass, netlify]
}
];

export default portfolioItems;
