/*
Author: Jeff Keddy
Date: 10/23/2017
Description: Basic dialog popping system. Includes scrim creation.
TODO:   Add ajaxing content
        Build smart system for video pop ups
        Make less terrible overall
*/
function createDialog(e,i){
    var dialogID = 'dialog',
    d = document.createElement('dialog');

    d.id = dialogID;
    d.classList.add('dialog');
    document.body.appendChild(d);

    /* Content Injection */
    // Reevaluate
    var dialog = document.getElementById(dialogID),
    dialogClose = document.createElement('button'),
    dialogInner = document.createElement('div'),
    dialogInnerID = dialogID+'-inner';
    dialogClose.classList.add('dialog__close');
    dialogClose.id = 'modal-close';
    dialogInner.classList.add('dialog__inner');
    dialogInner.id = dialogInnerID;
    if(e){
        dialog.appendChild(dialogClose);
        dialog.appendChild(dialogInner);
        document.getElementById(dialogInnerID).innerHTML=e;
    }else{
        dialog.appendChild(dialogClose);
        dialog.appendChild(dialogInner);
        document.getElementById(dialogInnerID).innerHTML='Put something in me';
    }
    createScrim();
    listenDialog();
    console.log('dialog created')
    return dialogID;
}
function openDialog(){

}
function listenDialog(){
    /* x = scrim, y = close button, z = class based closures */
    document.getElementById('js-scrim').addEventListener('mouseup',function() {destroyDialog();});
    return console.log('listeners set')
}
function destroyDialog(id,x){
    if(id){
        var d = document.getElementById(id);
    }else{
        var d = document.getElementById('dialog');
    }
    d.parentNode.removeChild(d);
    destroyScrim();
    return console.log('dialog destroyed')
}

function createScrim(n){
    var scrim = document.createElement('div');
    if(n){
        scrim.id=n;
    }else{
        scrim.id="js-scrim";
    }
    scrim.classList.add('scrim');
    document.body.appendChild(scrim);
    document.body.classList.add('scrim-active');
    return console.log('scrim created')
}
function destroyScrim(){
    var scrim = document.getElementById('js-scrim');
    scrim.parentNode.removeChild(scrim);
    document.body.classList.remove('scrim-active');
    return console.log('scrim destroyed')
}