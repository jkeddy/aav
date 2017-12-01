/*
Author: Jeff Keddy
Date: 10/23/2017
Description: Basic dialog popping system. Includes scrim creation.
TODO:   Add ajaxing content
        Build smart system for video pop ups
        Make less terrible overall
*/
function createDialogNode(e,i){
    let dialogID = 'dialog',
    d = document.createElement('dialog');

    d.id = dialogID;
    d.classList.add('o-dialog');
    document.body.appendChild(d);

    /* Content Injection */
    // Reevaluate
    let dialog = document.getElementById(dialogID),
    dialogClose = document.createElement('button'),
    dialogInner = document.createElement('div'),
    dialogInnerID = dialogID+'-inner';
    dialogClose.classList.add('o-dialog__close');
    dialogClose.id = 'modal-close';
    dialogInner.classList.add('o-dialog__inner');
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
function listenDialog(){
    /* x = scrim, y = close button, z = class based closures */
    document.getElementById('js-scrim').addEventListener('mouseup',function() {destroyDialog();});
    return console.log('listeners set')
}
function destroyDialog(id,x){
    let d;
    if(id){
        d = document.getElementById(id);
    }else{
        d = document.getElementById('dialog');
    }
    d.parentNode.removeChild(d);
    destroyScrim();
    return console.log('dialog destroyed')
}

function createScrim(){
    let scrim = document.createElement('div');

    scrim.id="js-scrim";
    
    scrim.classList.add('o-scrim');
    document.body.appendChild(scrim);
    document.body.classList.add('scrim-is-open');
    return console.log('scrim created')
}
function destroyScrim(){
    let scrim = document.getElementById('js-scrim');
    scrim.parentNode.removeChild(scrim);
    document.body.classList.remove('scrim-is-open');
    return console.log('scrim destroyed')
}