const LinksSocialMidia = {
  github: 'f3l1p3f3',
  youtube: 'channel/UC4oK1pMpRTGhi_c46xZYuzA',
  instagram: 'felipeferreira.jj',
  facebook: 'profile.php?id=100008003748230',
  twitter: 'FelipeF75391660'
}
function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
  }
}

changeSocialMidiaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMidia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
