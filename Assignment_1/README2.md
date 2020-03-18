# Class of 2020
## Browser Technologies @cmda-minor-web 1920
https://browsertechnologies.netlify.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/e56a09e1-89a2-48f3-bd77-6247d77caa09/deploy-status)](https://app.netlify.com/sites/browsertechnologies/deploys)


**Web-app with regular internet**

![gif of web app- regular internet]()

**Web-app with slow 3G-internet**

![gif of web app- slow 3g internet]()

![screenshot of web app]()


<details>
  <summary><strong>Table of Contents</strong> (click to expand)</summary>

<!-- toc -->

- [✅ To-do](#--to-do)
- [📋 Concept](#---concept)
- [⚙️ Installation](#---installation)
    + [Helpers](#helpers)
- [🧑🏼‍ Actor Diagram](#------actor-diagram)
- [↔️ Interaction diagram](#---interaction-diagram)
- [🌍 Design patterns](#---design-patterns)
- [👍🏽 Best practices](#-----best-practices)
- [🗃 Data](#---data)
  * [🐒 Github API](#---github-api)
    + [Properties](#properties)
    + [Rate limiting](#rate-limiting)
  * [💽 Data cleaning](#---data-cleaning)
    + [Filtering the data using array.filter](#filtering-the-data-using-arrayfilter)
    + [Rendering the data to html-representation using array.map](#rendering-the-data-to-html-representation-using-arraymap)
- [👯🏿‍ Features (+ wishlist)](#------features----wishlist-)
- [🏫 Assignment](#---assignment)
  * [Learning goals](#learning-goals)
  * [Week 1 - Server Side Rendering 📡](#week-1---server-side-rendering---)
  * [Week 2 - Progressive Web App 🚀](#week-2---progressive-web-app---)
  * [Week 3 - Critical Rendering Path 📉](#week-3---critical-rendering-path---)
  * [Rubric](#rubric)
- [ℹ️ Resources](#---resources)
  * [Credits](#credits)
  * [Small inspiration sources](#small-inspiration-sources)
- [🗺️ License](#----license)

<!-- tocstop -->

</details>

## ✅ To-do
- [ ] Add search
- [ ] Add CSS, implement CSS grid
- [ ] Add division between homepage and overview per course


## 📋 Concept
_What does your app do, what is the goal? (passing butter)_

This app is for keeping track of the current participants of the any course of the class in the minor Webdevelopment (2020).

## ⚙️ Installation
Clone this repository to your own device:
```bash
$ git clone https://github.com/deannabosschert/browser-technologies-1920.git
```
Then, navigate to that folder and run:

```bash
npm run start
```

#### Helpers
The used external packages are located in the 'helpers'-folder as a static file.
Used helpers and their sources:
- [node-fetch](https://www.npmjs.com/package/node-fetch)


## 🧑🏼‍ Actor Diagram
_Which actors are there in your application? (actor diagram)_
![actor diagram](https://github.com/deannabosschert/browser-technologies-1920/blob/master/src/img/actordiagram-01.png)


## ↔️ Interaction diagram
_How does flowed interaction through the application? (interaction diagram)_
![interaction diagram](https://github.com/deannabosschert/browser-technologies-1920/blob/master/src/img/interactiondiagram.png)

- Homepage
- Overview
- Detail page

## 🌍 Design patterns
Not sure, but I think those count:
- The usage of Modules?
- The usage of .map .filter .reduce?
- My 'filterArray'-function?

## 👍🏽 Best practices
- Work in branches, even if it's a one-man project. It helps staying focused on one feature until it's finished, and keeps your from doing 10 different things at the same time. Saves you merge conflicts, too.
- ^ also helps with 'closing' a feature, so you are more likely to move on to the next. Too little time, too much ideas.
- Commit early, commit often.
- Make single-purpose commits.
- Always fix your .gitignore-contents asap; node_modules or the like won't ever be pushed that way.
- Styling comes last. It's gonna change anyways so most of the time, it's better to fix the technical stuff first.
- Don't use declarations in the global scope.
- Start your project with writing down the future function names (pre-actors, basically).
- Make your own template for your readme
- Google, google, google. 99% of the time, it'll get you to the solution of your problem.
- Set timers for solving problems that aren't super relevant in the current sprint but you do would like to work on; 25 mins tops, otherwise you'll be stuck with this for too long.
- Make an actor diagram halfway through, it's a great reminder to refactor the code.
- Explicitly limit the scope of your functions
- Remember that most problems/features that have to do with the UI, can be fixed with mainly CSS.
- Do not use .innerHTML
- If there's an error, walk through your code from the top/beginning; explain it to your rubber ducky and state where certain data is passed.
- Implement useful error handling.

## 🗃 Data

### 🐒 Github API
_What external data source is featured in your project and what are its properties?_
The API I've used is [Github's](https://api.github.com).

I'm using this API to fetch data of the repositories that are forked from _cmda-minor-web/browser-technologies-1920_.

#### Properties
The endpoint I'm using on the overview page is the following:
`https://api.github.com/repos/cmda-minor-web/browser-technologies-1920/forks?per_page=50`

Base URL: `${endpoint}/repos${minor}${course}${year}${tag}?per_page=${limit}`


#### Rate limiting
For API requests using Basic Authentication or OAuth, you can make up to 5000 requests per hour. Authenticated requests are associated with the authenticated user, regardless of whether Basic Authentication or an OAuth token was used. This means that all OAuth applications authorized by a user share the same quota of 5000 requests per hour when they authenticate with different tokens owned by the same user.

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

So, if you aren't an authenticated user, your rate limit is 60 requests per hour.

If you do exceed this limit, you'll see the following error message and it's probably a better idea to request as an Authenticated user:
``` js
HTTP/1.1 403 Forbidden
Date: Tue, 20 Aug 2013 14:50:41 GMT
Status: 403 Forbidden
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1377013266
{
   "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
   "documentation_url": "https://developer.github.com/v3/#rate-limiting"
}
```

If you *are* authenticated, you should be able to receive the following data:
```json
(49) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```
<details>
  <summary><strong>Individual data object:</strong> (click to expand)</summary>

```json
{
  id: 237659708
node_id: "MDEwOlJlcG9zaXRvcnkyMzc2NTk3MDg="
name: "browser-technologies-1920"
full_name: "deannabosschert/browser-technologies-1920"
private: false
owner:
login: "deannabosschert"
id: 36165810
node_id: "MDQ6VXNlcjM2MTY1ODEw"
avatar_url: "https://avatars1.githubusercontent.com/u/36165810?v=4"
gravatar_id: ""
url: "https://api.github.com/users/deannabosschert"
html_url: "https://github.com/deannabosschert"
followers_url: "https://api.github.com/users/deannabosschert/followers"
following_url: "https://api.github.com/users/deannabosschert/following{/other_user}"
gists_url: "https://api.github.com/users/deannabosschert/gists{/gist_id}"
starred_url: "https://api.github.com/users/deannabosschert/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/deannabosschert/subscriptions"
organizations_url: "https://api.github.com/users/deannabosschert/orgs"
repos_url: "https://api.github.com/users/deannabosschert/repos"
events_url: "https://api.github.com/users/deannabosschert/events{/privacy}"
received_events_url: "https://api.github.com/users/deannabosschert/received_events"
type: "User"
site_admin: false
__proto__: Object
html_url: "https://github.com/deannabosschert/browser-technologies-1920"
description: "Progressive Web Apps @cmda-minor-web 1920"
fork: true
url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920"
forks_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/forks"
keys_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/keys{/key_id}"
collaborators_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/collaborators{/collaborator}"
teams_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/teams"
hooks_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/hooks"
issue_events_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/issues/events{/number}"
events_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/events"
assignees_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/assignees{/user}"
branches_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/branches{/branch}"
tags_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/tags"
blobs_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/git/blobs{/sha}"
git_tags_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/git/tags{/sha}"
git_refs_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/git/refs{/sha}"
trees_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/git/trees{/sha}"
statuses_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/statuses/{sha}"
languages_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/languages"
stargazers_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/stargazers"
contributors_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/contributors"
subscribers_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/subscribers"
subscription_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/subscription"
commits_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/commits{/sha}"
git_commits_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/git/commits{/sha}"
comments_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/comments{/number}"
issue_comment_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/issues/comments{/number}"
contents_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/contents/{+path}"
compare_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/compare/{base}...{head}"
merges_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/merges"
archive_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/{archive_format}{/ref}"
downloads_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/downloads"
issues_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/issues{/number}"
pulls_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/pulls{/number}"
milestones_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/milestones{/number}"
notifications_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/notifications{?since,all,participating}"
labels_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/labels{/name}"
releases_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/releases{/id}"
deployments_url: "https://api.github.com/repos/deannabosschert/browser-technologies-1920/deployments"
created_at: "2020-02-01T18:36:35Z"
updated_at: "2020-02-26T23:46:05Z"
pushed_at: "2020-02-26T23:54:29Z"
git_url: "git://github.com/deannabosschert/browser-technologies-1920.git"
ssh_url: "git@github.com:deannabosschert/browser-technologies-1920.git"
clone_url: "https://github.com/deannabosschert/browser-technologies-1920.git"
svn_url: "https://github.com/deannabosschert/browser-technologies-1920"
homepage: "https://deannabosschert.github.io/browser-technologies-1920/src"
size: 4070
stargazers_count: 0
watchers_count: 0
language: "JavaScript"
has_issues: true
has_projects: true
has_downloads: true
has_wiki: true
has_pages: true
forks_count: 0
mirror_url: null
archived: false
disabled: false
open_issues_count: 1
license: {key: "mit", name: "MIT License", spdx_id: "MIT", url: "https://api.github.com/licenses/mit", node_id: "MDc6TGljZW5zZTEz"}
forks: 0
open_issues: 1
watchers: 0
default_branch: "master"
}
```
</details>


### 💽 Data cleaning
_What has been done with the fetched data?_
#### Filtering the data using array.filter

```js
function filterArray(array) {
  return array.filter(results => {
    return {
      name: results.owner.login,
      description: results.description,
      avatar: results.owner.avatar_url,
      homepage: results.homepage,
      id: results.id,
      ding: results.ding,
      id: results.id
      }
   }
}
```

Result:
```json
{
name: "browser-technologies-1920", description: "Progressive Web Apps @cmda-minor-web 1920", avatar: "https://avatars1.githubusercontent.com/u/36165810?v=4", homepage: "https://deannabosschert.github.io/browser-technologies-1920/src", id: 237659708, …}
name: "browser-technologies-1920"
description: "Progressive Web Apps @cmda-minor-web 1920"
avatar: "https://avatars1.githubusercontent.com/u/36165810?v=4"
homepage: "https://deannabosschert.github.io/browser-technologies-1920/src"
id: 237659708
node_id: "MDEwOlJlcG9zaXRvcnkyMzc2NTk3MDg="
full_name: "deannabosschert/browser-technologies-1920"
private: false
owner: {login: "deannabosschert", id: 36165810, node_id: "MDQ6VXNlcjM2MTY1ODEw", avatar_url: "https://avatars1.githubusercontent.com/u/36165810?v=4", gravatar_id: "", …}
html_url: "https://github.com/deannabosschert/browser-technologies-1920"
__proto__: Object
}
```

#### Rendering the data to html-representation using array.map

```html
   <article class="student">
            <h3 class="projectName"></h3>
            <p class="description"></p>
            <a class="html_url">
              <div class="avatarWrapper">
                <img class="avatar">
              </div>
              <p class="homepage"></p>
            </a>
            <p class="id"></p>
            <p class="node_id"></p>
            <p class="name"></p>
            <p class="full_name"></p>
            <p class="private"></p>
            <p class="owner"></p>
          </article>
```


## 👯🏿‍ Features (+ wishlist)
_What would you like to add (feature wishlist / backlog)?_
- [ ] Showing the latest commits per student
- [ ] Showing a 'nerd-leaderboard' based on the amount of lines/commits, fixed issues, open issues etc
- [ ] Showing stats about the implementation of certain things (who uses branches, pushes enough commits, has a wiki, has a license added etc)
- [ ] Who's where in the curriculum? (check presence of 'routing', 'templating', 'modules' etc.)
- [ ] Who uses micro libraries, and who's a supernerd and e.g. writes their own virtual DOM or router?
- [ ] Run audits and generate stats per website based on this? Does Google have an option for this maybe, some kind of Lighthouse API?

## 🏫 Assignment
<details>
  <summary></strong> (click to expand)</summary>
  In this course I learned to convert the client side web application previously made at [WAFS](https://github.com/deannabosschert/web-app-from-scratch-1920) into a server side rendered application. I also added functionalities based on the Service Worker and turned the application into a Progressive Web App. Ultimately I implemented a series of optimisations to improve the performance of the application.


### Learning goals
- _You understand the difference between client side and server side rendering and you can apply server side rendering in your application_
- _You understand how a Service Worker works and you can implement it in your application._
- _|You understand how the critical render path works and how you can optimize it for a better runtime and / or perceived performance._

### Week 1 - Server Side Rendering 📡
Goal: Render web pages server side

### Week 2 - Progressive Web App 🚀
Goal: Convert application to a Progressive Web App

### Week 3 - Critical Rendering Path 📉
Goal: Optimize the Critical Rendering Path

</details>

### [Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vSc48v1nrjcwH0llcTd68xyK7f2fDC2UL4d6h4ZNW3DU8ucez6ZOHiId1XSX0RP5ByvLC8p5pVUGZT4/pubhtml)

[Rubric- detailed rating of my project](https://github.com/deannabosschert/browser-technologies-1920/wiki/Rubric)
![screenshot of rubric](https://paper-attachments.dropbox.com/s_A55BA87DF43E0052AB57F649BA137E30CE3E70844B24A22C6154EAF552B93169_1583836131204_Screenshot+2020-03-10+at+11.28.29.png)


## ℹ️ Resources
https://developer.github.com/v3/

### Credits
- Our superamazingteachers at the [minor WebDev @CMD](https://github.com/cmda-minor-web/browser-technologies-1920)
-

### Small inspiration sources

## 🗺️ License

Author: [Deanna Bosschert](https://github.com/deannabosschert) , license by
[MIT](https://github.com/deannabosschert/browser-technologies-1920/blob/master/LICENSE)
