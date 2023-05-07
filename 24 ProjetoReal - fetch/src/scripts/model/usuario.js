const usuario = {
  avatarUrl: "",
  name: "",
  bio: "",
  username: "",
  repositories: [],
  setInfo(userGithubProfile, userGithubRepos) {
    this.avatarUrl = userGithubProfile.avatar_url;
    this.name = userGithubProfile.name;
    this.bio = userGithubProfile.bio;
    this.username = userGithubProfile.login;
    this.repositories = userGithubRepos;
  },
};

export { usuario };
