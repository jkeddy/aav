/*
Author: Jeff Keddy
Date: 01/08/2018
Description: At certain screen size, grab right hand "Recommended" content and shove it into the body

TODO:
reevaluate on screen rotation
*/

// Hacky Firefox srcset fix
const recArticles = document.querySelector('.js-recommended-articles')
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  let resize = recArticles.querySelectorAll('.o-media-block__img')
  for (let i = 0; i < resize.length; i++) {
    const element = resize[i]
    element.setAttribute('style', 'max-width:40px')
  }
}
// Side content <=layout
if (window.matchMedia('(max-width: 850px)').matches) {
  let mobileRecArticles = document.querySelector('.js-recommended-articles-sm')
  let recArticlesInner = recArticles.innerHTML
  recArticles.setAttribute('aria-hidden', 'true')
  recArticles.setAttribute('style', 'display:none')
  if (mobileRecArticles) {
      console.log('target found')
    mobileRecArticles.innerHTML = recArticlesInner
    resizeRecArticleText(mobileRecArticles)
  } else {
    mobileRecArticles = document.createElement('div')
    mobileRecArticles.classList.add('js-recommended-articles-sm')
    mobileRecArticles.innerHTML = recArticlesInner
    resizeRecArticleText(mobileRecArticles)
    let articleContentHeader = document.querySelectorAll('.c-main-content__article h2')[1]
    let parent = articleContentHeader.parentNode
    parent.insertBefore(mobileRecArticles, articleContentHeader)
  }
}

function resizeRecArticleText (e) {
  let element = e.querySelectorAll('.o-media-block__body')
  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove('u-text--sm')
  }
}
