/*
Author: Jeff Keddy
Date: 10/23/2017
Description: Mobile navigation functions.
TODO:   Add accessibility        
*/
function toggleNav(){
    var mainNav = document.getElementById('main-nav');
    var navOpen = mainNav.classList.contains('active');
    var scrim = 'nav-scrim';
    if(navOpen){
        destroyScrim(scrim);
        document.body.classList.remove('nav-active');
        mainNav.classList.remove('active');
    }else{
        createScrim(scrim);
        document.body.classList.add('nav-active');
        mainNav.classList.add('active');
        /* Click the scrim we made to close the nav */
        document.getElementById(scrim).addEventListener('mouseup',toggleNav);
    }
}
function toggleSubNav(){
    var t = this;
    var icon = t.firstElementChild;
    var subNav = t.nextElementSibling;
    var subNavOpen = subNav.classList.contains('active');
    var parent = t.parentElement;
    if(subNavOpen){
        parent.classList.remove('active');
        t.classList.remove('active');
        icon.classList.remove('fa-caret-down');
        icon.classList.add('fa-caret-right');
        subNav.classList.remove('active');
    }else{
        parent.classList.add('active');
        t.classList.add('active');
        icon.classList.add('fa-caret-down');
        icon.classList.remove('fa-caret-right');
        subNav.classList.add('active');
    }
}
var navToggle=document.getElementsByClassName('main-nav__toggle');
for (var i = 0; i < navToggle.length; i++) {
    navToggle[i].addEventListener('mouseup',toggleNav);
}
var subNavToggle=document.getElementsByClassName('main-nav__sub-nav-toggle');
for (var j = 0; j < subNavToggle.length; j++) {
    subNavToggle[j].addEventListener('click',toggleSubNav);
}