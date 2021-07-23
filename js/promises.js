"use strict";

function getLastCommitDate(username) {
    fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': `token ${GITHUB_PA_TOKEN}`
        }
    }).then(response => {
        return response.json();
    }).then(data => console.log('Date of last commit: ', data[0].created_at))
        .catch(error => console.error('Oops, something went wrong: ', error));
}

getLastCommitDate('michaeldavidcoyle');
