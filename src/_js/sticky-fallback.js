/*
Author: Aurelio De Rosa
Edited by: Jeff Keddy
Date: 12/06/2017
Description: A falback method for browsers that do not support CSS sticky. See article: http://www.sitepoint.com/css-position-sticky-introduction-polyfills/
TODO:   Add throttling to scroll event. Will require lodash so not a priority.
        Must be a better way to call this on all fallback events.
*/

function posStickySupported () {
  let e = document.createElement('div')
  e.style.cssText = 'position:sticky'
  if (e.style.position.match('sticky')) return true
  return false
}
function posStickyFallback (elem) {
  let elemStuck = document.querySelector(elem)
  let elemPos = elemStuck.getBoundingClientRect()
  let placeholder = document.createElement('div')
  placeholder.style.width = elemPos.width + 'px'
  placeholder.style.height = elemPos.height + 'px'
  let isAdded = false
  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= elemPos.top && !isAdded) {
      elemStuck.classList.add('_sticky')
      elemStuck.parentNode.insertBefore(placeholder, elemStuck)
      isAdded = true
    } else if (window.pageYOffset < elemPos.top && isAdded) {
      elemStuck.classList.remove('_sticky')
      elemStuck.parentNode.removeChild(placeholder)
      isAdded = false
    }
  })
  return true
}
if (!posStickySupported()) {
  // Side content >=layout
  if (window.matchMedia('(min-width: 850px)').matches) {
    posStickyFallback('.c-side-content__inner.js-sticky-fallback')
    console.log('side')
  }
  // Nav <=tablet","height>=600px"
  if (window.matchMedia('(max-width: 768px) and (min-width: 550px) and (min-height: 600px)').matches) {
    posStickyFallback('.c-main-nav__inner.js-sticky-fallback')
    console.log('nav')
  }
  // Header <=screen-sm
  if (window.matchMedia('(max-width: 550px)').matches) {
    posStickyFallback('.c-header.js-sticky-fallback')
    console.log('header')
  }
}
