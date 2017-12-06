/*
Author: Jeff Keddy
Date: 11/20/2017
Description: Smooth scrolls to internal page links.
TODO: Maybe add fallbacks
*/

function filterPath(string) {
  return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
}

const locPath = filterPath(location.pathname);
const links = document.querySelectorAll('a[href*="#"]');
links.forEach(function (e) {
  let thisPath = filterPath(e.pathname) || locPath;
  let hashTag = e.hash;
  let hash = hashTag.replace(/#/, '');
  let t = document.getElementById(hash);
  // if target and the location path stuff works out and theres a valid hash then kick in the scroll jacking
  if (t && (locPath == thisPath && (location.hostname == e.hostname || !e.hostname))) {
    e.addEventListener('click', function (evt) {
      // Might need 'if scrollintoview is valid' logic
      evt.preventDefault();
      /* Preserve location on screen for a11y purposes */
      let x = window.scrollX;
      let y = window.scrollY;
      // Focus must come after hashing path
      location.hash = hashTag;
      if (!t.getAttribute('tabindex')) {
        t.setAttribute('tabindex', '-1');
      }
      t.focus();
      window.scrollTo(x, y);
      t.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});