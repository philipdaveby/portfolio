import eatsy from '../images/eatsy.png';
import workoutApp from '../images/workoutApp.png';
import todo from '../images/todo.png';

const portfolioItems = [{
    name: 'Eatsy',
    text: ['Eatsy will schedule a meal plan for you, so you know exactly what to cook every meal, day and week. No more planning!',
            'This was the final project of the </salt> bootcamp'
        ],
    imageLink: eatsy,
    imageAlt: 'Eatsy app screenshot',
    liveLink: 'https://eatsy.tk',
    codeLink: 'https://github.com/Wppvater/salted-paj-final-project',
    gridArea: 'portfolio-item-1'
},
{
    name: 'Workout app',
    text: ['Workout app was initally created during a hackday at </salt>. ',
            'Create you own workouts, reorder them as you like and check them off'
        ],
    imageLink: workoutApp,
    imageAlt: 'Workout app screenshot',
    liveLink: 'https://musing-mclean-d22dac.netlify.app',
    codeLink: 'https://github.com/philipdaveby/hack-day',
    gridArea: 'portfolio-item-2'
},
{
    name: "Philip's ToDo!",
    text: ['A todo application to help you remember your tasks and mark them as done',
        'Built purely as a frontend application'
        ],
    imageLink: todo,
    imageAlt: 'Todo app screenshot',
    liveLink: 'https://zen-morse-86e998.netlify.app',
    codeLink: 'https://github.com/philipdaveby/todo',
    gridArea: 'portfolio-item-3 '
}];

export default portfolioItems;
