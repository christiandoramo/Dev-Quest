const usuario = {
  avatarUrl: '',
  name: '',
  bio: '',
  username: '',
  followers: '',
  following: '',
  repositories: [],
  eventos: [],
  setInfo(userGithubProfile, userGithubRepos,userGithubEvents) {
    this.avatarUrl = userGithubProfile.avatar_url
    this.name = userGithubProfile.name
    this.bio = userGithubProfile.bio
    this.username = userGithubProfile.login
    this.repositories = userGithubRepos
    this.followers = userGithubProfile.followers
    this.following = userGithubProfile.following
    this.eventos = userGithubEvents
  },
}

export { usuario }
