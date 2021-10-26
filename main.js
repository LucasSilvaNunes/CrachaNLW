const links = {
  github: "LucasSilvaNunes",
  youtube: "channel/UCv9K3EC0nxK3o7uupKZi0uw",
  facebook: "lucasryruu",
  instagram: "lucassz_rj",
  twitter: "lucasnuneix"
}

function changeSocialMediaLinks(){
  // document.getElementById ('userName'). textContent = "Olivia" 
  // userName.textContent = "Leandro" Mesma coisa que o de cima, mas só funciona pq é Id
  for (let li of socialLinks.children){
    const social = li.getAttribute ('class')

    li.children[0].href = `https://${social}.com/${links[social]}`

  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()