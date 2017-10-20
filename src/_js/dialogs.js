/* Basic dialog JS system. */

function destroyScrim(n){
    if(n){
        var scrim = document.getElementById(n);
    }else{
        var scrim = document.getElementById('scrim');
    }
    scrim.parentNode.removeChild(scrim);
    return false;
}
function createScrim(n){
    var scrim = document.createElement('div');
    if(n){
        scrim.id=n;
    }else{
        scrim.id="scrim";
    }
    scrim.classList.add('scrim');
    document.body.appendChild(scrim);
    return scrim;
}
