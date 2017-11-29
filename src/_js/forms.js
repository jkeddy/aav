/*
Author: Jeff Keddy
Date: 11/28/2017
Description: Form validation. Based on https://codepen.io/davatron5000/pen/YErprg by Dave Rupert.
TODO: 
Suppress default browser warnings (unless they get better about it)
*/

const inputs = document.querySelectorAll('input, select, textarea');

for (let input of inputs) {
    let radioWrap = 'js-form__radio-validation';
    let invalid = 'is-invalid';
    // Just before submit, the invalid event will fire, let's apply our class there
    input.addEventListener('invalid', (e) => {
        input.classList.add(invalid);
        if (input.type == 'email')
            if (input.attributes.required)
                input.setCustomValidity('Please enter a valid email address ex. name@domain.com');
            else
                input.setCustomValidity('Please enter a valid email address or leave blank ex. name@domain.com');
        else if (input.type == 'tel')
            if (input.attributes.required)
                input.setCustomValidity('Please enter a valid phone number ex. 555-555-5555');
            else
                input.setCustomValidity('Please enter a valid phone number or leave blank ex. 555-555-5555');
        else if (input.type == 'radio' || input.type == 'checkbox') {
            findAncestor(input,radioWrap).classList.add(invalid);
        }
    }, false);
    // Check validity on blur
    input.addEventListener('blur', (e) => {
        // Reset. Assumes the user is changing the invalid areas.
        input.setCustomValidity('');
        if (input.type == 'radio' || input.type == 'checkbox') {
            let x = findAncestor(input, radioWrap);
            x.classList.remove(invalid);
        }
        input.checkValidity();
    })
}