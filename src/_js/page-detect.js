/*
Author: Jeff Keddy
Date: 10/19/2017
Description: Adds page name and directory to body tag of Allaboutvision.com
If page name is index (eg over40/index.htm) it will not be added. This will only be used until a switch to Metalsmith.
*/
detectPage()

function detectPage () {
  var b = document.body
  var path = window.location.pathname.split('/')
  var l = path.length
  var fileName
  var directory
  var addClass
  if (l >= 3) {
    fileName = path[l - 1].replace('.htm', '') // Hacky, but fine for our purposes.
    directory = path[l - 2]
    addClass = ' ' + fileName + ' ' + directory
    b.className += addClass
  } else if (path.length < 3) {
    fileName = path[l - 1].replace('.htm', '')
    addClass = ' ' + fileName
    b.className += addClass
  } else {
    b.className += ' home'
  }
}
