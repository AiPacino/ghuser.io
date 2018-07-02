> Work in progress

<p align="center">
  <a href="https://ghuser.io">
    <img src="https://rawgit.com/AurelienLourot/ghuser.io/master/docs/logo.png"
         width="400" height="108" />
  </a>
</p>
<p align="center">
  <b>Better GitHub profiles</b>
</p>
<br />

# What we are building

Better profile pages for **all** GitHub users:

* Accessible at https://ghuser.io/github-username .
* UI/layout as close as possible from the official profiles.
* Shows **all** repos the user has pushed to since the beginning of time, even if they aren't
  affiliated in any way to these repos.
* These repos are sorted by a combination of how active the project is, how much the user has
  contributed to it, how popular it is, etc. For each user we want to see first the latest greatest
  repos they have most contributed to.
* For each repo, it is clear how much the user has contributed. And if they have contributed 23% of
  a 145 stars repo, they earn 33 stars and you should see "☆ 33 / 145".
* Shows the user's total amount of stars.
* Shows not only programming languages but also technologies/frameworks, e.g. "react", "docker",
  etc. Can be achieved with a config file on each repo
  named https://github.com/org-or-user/project/.ghuser.io.json
* Can be filtered by language/tech/framework.
* Each user can tweak their profile by creating the config file
  https://github.com/user/ghuser.io.settings/ghuser.io.json
* Repos can have a logo.

## Contributing

[ghuser.io](https://ghuser.io) is a [Reframe](https://github.com/reframejs/reframe) web app. To run
your local changes:

```bash
$ cd reframe/
$ npm install
$ npm run local
...
 ✔ Server running (for development)
     http://localhost:3000/ -> LandingPage
     http://localhost:3000/:username -> ProfilePage
     http://localhost:3000/logo -> LogoPage
```

## Team

This project is maintained by the following person(s) and a bunch of
[awesome contributors](https://github.com/AurelienLourot/ghuser.io/graphs/contributors).

[![AurelienLourot](https://avatars0.githubusercontent.com/u/11795312?v=4&s=70)](https://github.com/AurelienLourot) | [![brillout](https://avatars0.githubusercontent.com/u/1005638?v=4&s=70)](https://github.com/brillout) |
--- | --- |
[Aurelien Lourot](https://github.com/AurelienLourot) | [Romuald Brillout](https://github.com/brillout) |
