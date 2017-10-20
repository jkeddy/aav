function toggleNav(){
    var mainNav = document.getElementById('main-nav');
    var check = mainNav.classList.contains('active');
    var scrim = 'nav-scrim';
    if(check){
        destroyScrim(scrim);
        document.body.classList.remove('nav-active');
        mainNav.classList.remove('active');
    }
    else{
        createScrim(scrim);
        document.body.classList.add('nav-active');
        mainNav.classList.add('active');
        /* Click the scrim we made to close the nav */
        document.getElementById(scrim).addEventListener('mouseup',toggleNav);
    }
}
var navToggle=document.getElementsByClassName('main-nav__toggle');
for (var i = 0; i < navToggle.length; i++) {
    navToggle[i].addEventListener('mouseup',toggleNav);
}