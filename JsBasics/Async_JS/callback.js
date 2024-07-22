console.log('Before')
getUser(1, (user) => {
    console.log('user: ', user)
    getRepositories(user.gitHubUserName, (repos) => {
        console.log('name', repos)
    })
})
// getRepositories(username, (repos) => {
//     console.log('name', repos)
// })
console.log('After')

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...')
        callback({ id: id, gitHubUserName: 'vikas'})
    }, 1000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Returning Repos...')
        callback({ name: username, repos: ['repo1', 'repo2', 'repo3']})
    }, 1000);
}