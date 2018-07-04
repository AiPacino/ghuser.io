The database is here to cache GitHub's data.

During the prototyping phrase, it's just a [JSON file](db.json) that we update once per day by
running

```bash
$ npm install
$ export GITHUB_CLIENT_ID=0123456789abcdef0123
$ export GITHUB_CLIENT_SECRET=0123456789abcdef0123456789abcdef01234567
$ export GITHUB_USERNAME=AurelienLourot
$ export GITHUB_PASSWORD=********
$ ./fetch.js
```

> **NOTE**: API keys can be created [here](https://github.com/settings/developers).

To serve one more user, run:

```bash
$ ./addUser.js newGreatUser
$ ./fetch.js
```
