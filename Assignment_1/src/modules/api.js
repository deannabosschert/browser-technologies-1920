const fetch = require('node-fetch')

const endpoint = "https://api.github.com/"
// const course = "/web-app-from-scratch-"
// const year = "1920"
const limit = "50"
// const repo = `${course}${year}`
// const apiLink = `${endpoint}/repos${owner}${repo}?per_page=${limit}`
const Api = {
  get(page, user, repo) {
    const query = getQuery(page, user, repo)
    const apiLink = `${endpoint}${query}?per_page=${limit}`
    console.log(apiLink)
    return fetch(apiLink)
      .then(res => res.json())
      .then((json) => {
        // console.log(json[0])
        // const data = cleanData(json)
        return json
      })
      .catch(err => {
        console.log(err)
      })
  }
}

//
// function getOwner(page) {
//   if (page === "overview") {
//     const owner = "cmda-minor-web"
//     return owner
//   } else if (page === "/") {
//     const owner = "cmda-minor-web"
//     return owner
//   } else {
//     const owner = `${page}`
//     return owner
//   }
// }

function getQuery(page, user, repo) {
  if (page === "home") {
    const query = `users/${user}/repos`
    return query
  } else if (page === "course") {
    const query = `repos/${user}/${repo}/forks`
    // console.log(query)
    return query
  } else if (page === "nerdProfile") {
    const query = `users/${user}/repos`
    // https://api.github.com/users/deannabosschert/repos?per_page=50
    return query
  } else if (page === "nerdRepo") {
    const query = `repos/${user}/${repo}`
    // https://api.github.com/repos/deannabosschert/progressive-web-apps-1920?per_page=50

    return query
  } else {
    console.log(err)
  }
}



//
// function getTag(page) {
//   if (page === "overview") {
//     const tag = "/forks"
//     return tag
//   } else if (page === "/") {
//     const owner = ""
//     return owner
//   } else {
//     const tag = ""
//     return tag
//   }
// }



function cleanData(results) {
  console.log("test")
  const data = results.map(result => ({
    courseName: result.name,
    name: result.owner.login,
    description: result.description,
    avatar: result.owner.avatar_url,
    homepage: result.homepage,
    id: result.id,
    node_id: result.node_id,
    full_name: result.full_name,
    private: result.private,
    owner: result.owner,
    html_url: result.html_url,
    milestones_url: result.milestones_url,
    notifications_url: result.notifications_url,
    labels_url: result.labels_url,
    releases_url: result.releases_url,
    deployments_url: result.deployments_url,
    created_at: result.created_at,
    updated_at: result.updated_at,
    pushed_at: result.pushed_at,
    git_url: result.git_url,
    ssh_url: result.ssh_url,
    clone_url: result.clone_url,
    svn_url: result.svn_url,
    homepage: result.homepage,
    size: result.size,
    stargazers_count: result.stargazers_count,
    watchers_count: result.watchers_count,
    language: result.language,
    has_issues: result.has_issues,
    has_projects: result.has_projects,
    has_downloads: result.has_downloads,
    has_wiki: result.has_wiki,
    has_pages: result.has_pages,
    forks_count: result.forks_count,
    mirror_url: result.mirror_url,
    archived: result.archived,
    disabled: result.disabled,
    open_issues_count: result.open_issues_count
  }))

  return data
}




module.exports = Api