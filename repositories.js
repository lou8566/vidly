console.log("Before");


// Promse Based approach
// getUser(1)
//     .then(user => getRepositories(user.gutHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => displayCommits(commits))
//     .catch(err => console.log(err.message));
displayCommits();

console.log("After");

// ASYNC and Await Approach
async function displayCommits(){
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gutHubUsername);
        const commits = await getCommits(repos[0]);
        console.log("Commits:", commits);
    }   
    catch(err) {
        console.log("Error:", err);
    }
}


function getCommits(repo){
    return new Promise((resolve, reject) => {
        console.log(`Getting Commits for ${repo}...`);
        setTimeout(()=>{
            resolve(["Commit1","Commit2"]);
        },2000);
    });
}

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: id, gutHubUsername: "Anthony"});
        }, 4000);
    });
}

function getRepositories(userName){
    return new Promise((resolve, reject) => {
        console.log(`Getting Repositories for ${userName}...`);
        setTimeout(() =>{
            resolve(["repo1", "repo2", "repo3"]);
        },4000);
    });
}