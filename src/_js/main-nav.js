/*
Author: Jeff Keddy
Date: 10/23/2017
Description: Navigation functions.
TODO:   improve accessibility
Add toggle buttons programmatically
*/
const mainNav = document.getElementById('main-nav')
const mainNavItem = document.querySelectorAll('.c-main-nav__item')
const navToggle = document.querySelectorAll('.c-main-nav__toggle')
const subNavToggle = document.querySelectorAll('.c-sub-nav__toggle')
// >=screen-sm
if (window.matchMedia('(min-width: 550px)').matches) {
  for (let i = 0, len = mainNavItem.length; i < len; i++) {
    mainNavItem[i].addEventListener('mouseenter', function () {
      let overflowItem = this.querySelector('.c-sub-nav')
      overflowItem.style.top = '-1rem' // default css top value
      let bound = overflowItem.getBoundingClientRect()
      if (bound.bottom >= (window.innerHeight || document.documentElement.clientHeight)) {
        let y = Math.round((bound.bottom - (window.innerHeight || document.documentElement.clientHeight)) + 20) // 20 pixel addition for padding/boxshadow
        overflowItem.style.top = '-' + y + 'px'
      }
    })
  }
}
// <=screen-sm
if (window.matchMedia('(max-width: 550px)').matches) {
  for (let i = 0; i < navToggle.length; i++) {
    navToggle[i].addEventListener('mouseup', toggleNav)
  }
  for (let i = 0; i < subNavToggle.length; i++) {
    subNavToggle[i].addEventListener('click', toggleSubNav)
  }
}
function toggleNav () {
  let navOpen = mainNav.classList.contains('is-open')
  let currentFocus = document.activeElement
  if (navOpen) {
    destroyScrim()
    document.body.classList.remove('main-nav-is-anim')
    mainNav.classList.remove('is-anim')
    setTimeout(function () {
      document.body.classList.remove('main-nav-is-open')
      mainNav.classList.remove('is-open')
    }, 200)
    currentFocus.focus()
    document.getElementById('js-scrim').removeEventListener('mouseup', toggleNav, true)
  } else {
    createScrim()
    document.body.classList.add('main-nav-is-open')
    mainNav.classList.add('is-open')

    setTimeout(function () {
      mainNav.classList.add('is-anim')
      document.body.classList.add('main-nav-is-anim')
    }, 50)

    let newFocus = document.querySelector('.c-main-nav__title')
    if (!newFocus.getAttribute('tabindex')) {
      newFocus.setAttribute('tabindex', '-1')
    }
    newFocus.focus()
    /* Click the scrim we made to close the nav */
    document.getElementById('js-scrim').addEventListener('mouseup', toggleNav, true)
  }
}

function toggleSubNav () {
  let t = this
  let subNav = this.nextElementSibling
  let parent = t.parentElement
  let subNavOpen = subNav.classList.contains('is-open')
  let currentFocus = document.activeElement

  if (subNavOpen) {
    parent.classList.remove('is-open')
    t.classList.remove('is-open')
    subNav.classList.remove('is-anim')
    setTimeout(function () {
      subNav.classList.remove('is-open')
    }, 200)
    currentFocus.focus()
  } else {
    let newFocus = subNav.querySelectorAll('.c-sub-nav__link')[1]
    // Not sure if this is needed.
    // if (!newFocus.getAttribute('tabindex'))
    //    newFocus.setAttribute('tabindex', '-1');
    newFocus.focus()
    parent.classList.add('is-open')
    t.classList.add('is-open')
    subNav.classList.add('is-open')
    setTimeout(function () {
      subNav.classList.add('is-anim')
    }, 50)
  }
}
