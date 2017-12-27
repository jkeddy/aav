/*
Author: Jeff Keddy
Date: 11/28/2017
Description: Form validation. Based on https://codepen.io/davatron5000/pen/YErprg by Dave Rupert.
TODO:
Suppress default browser warnings (unless they get better about it)
Build a submit check for invalid scroll to top thing. - let y = findAncestor(input,"o-form").id.scrollIntoView;
*/
const inputs = document.querySelectorAll('input, select, textarea')

for (let i = 0, len = inputs.length; i < len; i++) {
  let radioWrap = 'js-form__radio-validation'
  let invalid = 'is-invalid'
  // Just before submit, the invalid event will fire, let's apply our class there
  inputs[i].addEventListener('invalid', function (e) {
    inputs[i].classList.add(invalid)
    if (inputs[i].type == 'email') {
      if (inputs[i].attributes.required) { inputs[i].setCustomValidity('Please enter a valid email address ex. name@domain.com') } else { inputs[i].setCustomValidity('Please enter a valid email address or leave blank ex. name@domain.com') }
    } else if (inputs[i].type == 'tel') {
      if (inputs[i].attributes.required) { inputs[i].setCustomValidity('Please enter a valid phone number ex. 555-555-5555') } else { inputs[i].setCustomValidity('Please enter a valid phone number or leave blank ex. 555-555-5555') }
    } else if (inputs[i].type == 'radio' || inputs[i].type == 'checkbox') {
      findAncestor(inputs[i], radioWrap).classList.add(invalid)
    }
  }, false)
  // Check validity on blur
  inputs[i].addEventListener('blur', function (e) {
    // Reset. Assumes the user is changing the invalid areas.
    inputs[i].setCustomValidity('')
    if (inputs[i].type == 'radio' || inputs[i].type == 'checkbox') {
      let x = findAncestor(inputs[i], radioWrap)
      x.classList.remove(invalid)
    }
    inputs[i].checkValidity()
  })
}
