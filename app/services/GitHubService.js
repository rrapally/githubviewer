const BASE_GITHUB_URL = 'https://api.github.com/'

export const getGitHubRepositoryCommits = (repo) => {
    const fetchURL = BASE_GITHUB_URL + repo + "/commits";
    console.log('Fetching commits for : ' + fetchURL);
    return fetch(fetchURL)
        .then(res => res.json());
}