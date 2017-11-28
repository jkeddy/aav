/*
Author: Jeff Keddy
Date: 11/28/2017
Description: Form validation. Based on https://codepen.io/davatron5000/pen/YErprg by Dave Rupert.
TODO: 
Add alerts with better error descriptions wrt required
Suppress default browser warnings (unless they get better about it)
Rename the x variable to something remotely descriptive
*/

const inputs = document.querySelectorAll('input, select, textarea');

for (let input of inputs) {
    let type = input.type;
    let radioWrap = 'o-form__fieldset';
    // Just before submit, the invalid event will fire, let's apply our class there
    input.addEventListener('invalid', (e) => {
        input.classList.add('invalid');
        if (type == 'email')
            input.setCustomValidity('Please enter a valid email address ex. name@domain.com');
        else if (type == 'tel')
            input.setCustomValidity('Please enter a valid phone number ex. 555-555-5555');
        else if (type == 'radio' || type == 'checkbox') {
            let x = findAncestor(input, radioWrap);
            x.classList.add('invalid');
        }
    }, false);
    // Check validity on blur
    input.addEventListener('blur', (e) => {
        // Reset. Assumes the user is changing the invalid areas.
        input.setCustomValidity('');
        if (type == 'radio' || type == 'checkbox') {
            let x = findAncestor(input, radioWrap);
            x.classList.remove('invalid');
        }
        input.checkValidity();
    })
}