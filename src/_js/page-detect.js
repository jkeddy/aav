/*
Author: Jeff Keddy
Date: 10/19/2017
Description: Adds page name and directory to body tag of Allaboutvision.com
If page name is index (eg over40/index.htm) it will not be added.
*/
detectPage()

function detectPage () {
  let b = document.body
  let path = window.location.pathname.split('/')
  let l = path.length
  let fileName
  let directory
  if (l >= 3) {
    fileName = path[l - 1].substring(0, path[l - 1].indexOf('.')) // Hacky, but fine for our purposes.
    directory = path[l - 2]
    // Twice for ie10
    b.classList.add(fileName)
    b.classList.add(directory)
  } else if (path.length < 3) {
    fileName = path[l - 1].substring(0, path[l - 1].indexOf('.'))
    b.classList.add(fileName)
  } else {
    b.classList.add('home')
  }
}
