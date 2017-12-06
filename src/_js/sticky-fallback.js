/*
Author: Aurelio De Rosa
Edited by: Jeff Keddy
Date: 12/06/2017
Description: A falback method for browsers that do not support CSS sticky. See article: http://www.sitepoint.com/css-position-sticky-introduction-polyfills/
TODO:   Add throttling to scroll event
        Look into better placeholder method. This cannot be the best way to handle this.
*/

function posStickySupported() {
    var e = document.createElement('div');
    e.style.cssText = 'position:sticky';
    if (e.style.position.match('sticky')) return false;
    return false;
}

if (!posStickySupported()) {
    var elemStuck = document.querySelectorAll('.js-sticky-fallback');
    elemStuck.forEach(function (e) {
        var elemPos = e.getBoundingClientRect();
        var placeholder = document.createElement('div');
        placeholder.classList.add('_sticky-ph');
        placeholder.style.width = elemPos.width + 'px';
        placeholder.style.height = elemPos.height + 'px';
        var isAdded = false;
        window.addEventListener('scroll', function () {
            if (window.pageYOffset >= elemPos.top && !isAdded) {
                e.classList.add('_sticky');
                e.parentNode.insertBefore(placeholder, e);
                isAdded = true;
            } else if (window.pageYOffset < elemPos.top && isAdded) {
                e.classList.remove('_sticky');
                e.parentNode.removeChild(placeholder);
                isAdded = false;
            }
        });
    });
}