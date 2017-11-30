/*
Author: Jeff Keddy
Date: 10/23/2017
Description: Mobile navigation functions.
TODO:   Add accessibility      
Add buttons programmatically at certain breakpoint
Clean up subnav code.
*/
const mainNav = document.getElementById('main-nav');
const navToggle = document.querySelectorAll('.c-main-nav__toggle');
const subNavToggle = document.querySelectorAll('.c-sub-nav__toggle');
for (let i = 0; i < navToggle.length; i++) {
    navToggle[i].addEventListener('mouseup',toggleNav);
}
for (let i = 0; i < subNavToggle.length; i++) {
    subNavToggle[i].addEventListener('click',toggleSubNav);
}
function toggleNav(){
    let navOpen = mainNav.classList.contains('is-open');
    let currentFocus = document.activeElement;
    if(navOpen){
        destroyScrim();
        document.body.classList.remove('main-nav-is-open');
        mainNav.classList.remove('is-open');
        currentFocus.focus();
        document.getElementById('js-scrim').removeEventListener('mouseup',toggleNav,true);
    }else{
        createScrim();
        document.body.classList.add('main-nav-is-open');
        mainNav.classList.add('is-open');
        let newFocus = document.querySelector('.c-main-nav__title');
        if (!newFocus.getAttribute('tabindex'))
            newFocus.setAttribute('tabindex', '-1');
        newFocus.focus();
        /* Click the scrim we made to close the nav */
        document.getElementById('js-scrim').addEventListener('mouseup',toggleNav,true);
    }
}
function toggleSubNav(){
    let t = this;
    let subNav = this.nextElementSibling;
    let parent = t.parentElement;
    let subNavOpen = subNav.classList.contains('is-open');
    let currentFocus = document.activeElement;

    if(subNavOpen){
        parent.classList.remove('is-open');
        t.classList.remove('is-open');
        subNav.classList.remove('is-open');
        currentFocus.focus();
    }else{
        let newFocus = subNav.getElementsByClassName('c-sub-nav__link')[1];
        // Not sure if this is needed.
        //if (!newFocus.getAttribute('tabindex'))
        //    newFocus.setAttribute('tabindex', '-1');
        newFocus.focus();
        parent.classList.add('is-open');
        t.classList.add('is-open');
        subNav.classList.add('is-open');
    }
}