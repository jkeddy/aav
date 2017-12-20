/*
Description: Legacy js polyfills and fall backs.
TODO:   Add accessibility
*/

function hasClass (element, c) {
  return (' ' + element.className + ' ').indexOf(' ' + c + ' ') > -1
}
// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove () {
        if (this.parentNode !== null) { this.parentNode.removeChild(this) }
      }
    })
  })
})([Element.prototype, CharacterData.prototype, DocumentType.prototype])
