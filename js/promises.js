"use strict";

function getLastCommitDate(username) {
    fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': `token ${GITHUB_PA_TOKEN}`
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        let date = new Date(data[0].created_at);
        console.log('Date of last commit: ', date.toDateString())
    }).catch(error => console.error('Oops, something went wrong: ', error));
}

getLastCommitDate('michaeldavidcoyle');

function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`I always keep my promises. Sorry you had to wait ${ms} milliseconds.`);
        }, ms);
    })
}

let milliseconds = Math.floor(Math.random() * 2001) + 1000;
wait(milliseconds).then(result => console.log(result));
