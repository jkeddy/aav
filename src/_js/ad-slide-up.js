/*
Author: Jeff Keddy
Date: 12/15/2017
Description: Slides AAV slide up ad into view when scrolled 5% down screen
*/
window.onload = function () {
  const adBottom = document.getElementById('sLd_exp')
  let path = window.location.pathname.split('/')
  let l = path.length
  let fileName = path[l - 2]
  let slideCookie = getCookie(fileName)
  if (!slideCookie && adBottom) {
    let e = document.createElement('button')
    e.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
    e.classList.add('aavd__close')
    adBottom.appendChild(e)
    e.addEventListener('click', function () {
      createCookie(fileName, 'allaboutvision.com', 30)
      adBottom.parentNode.removeChild(adBottom)
    })
    window.addEventListener('scroll', function () {
      let body = document.body.offsetHeight
      let offset = Math.round(body * 0.05) // Open after 5% scroll
      if (window.pageYOffset >= offset) {
        adBottom.classList.add('is-open')
      } else if (window.pageYOffset < offset) {
        adBottom.classList.remove('is-open')
      }
    })
  }
}
