"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanuageUsers = users.filter(user => user.languages.length >= 3);
console.log('Users with at least 3 languages: ', threeLanuageUsers);

const user_emails = users.map(user => user.email);
console.log('User emails: ', user_emails);

const totalExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
const averageExperience = totalExperience / users.length;
console.log(`Total experience: ${totalExperience} years`);
console.log(`Average experience: ${averageExperience} years`);