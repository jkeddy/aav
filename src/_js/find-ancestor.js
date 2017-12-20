/* Consider swapping to 'closest()' */
/* exported findAncestor */
function findAncestor (el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el
}
