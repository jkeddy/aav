--- 
layout: aav-cornea.html 
title: Forms
sub-title: 
--- 

## Forms

<div class="example-box">
<form action="#form-default" class="form" id="form-default">
    <label class="form__label" for="form-default-full-name">Full Name</label>
    <input class="form__input" id="form-default-full-name" name="full-name" placeholder="eg. Jerry Smith" required type="text">
    <label class="form__label" for="form-default-email">Email</label>
    <input class="form__input" id="form-default-email" name="email" placeholder="jerry@blarp.com" required type="email" value="">
    <label class="form__label" for="form-default-tel">Phone</label>
    <input class="form__input" id="form-default-tel" name="phone" placeholder="555-555-5555" type="tel" value="">
    <fieldset class="form__fieldset">
        <legend class="form__legend">Click a Button</legend>
        <div class="form__inline form__inline--radio">
        <input class="form__radio" id="form-default-radio-1" name="radio-1" required type="radio" value="Option 1">
        <label class="form__label" for="form-default-radio-1">Option 1</label>
        </div>
        <div class="form__inline form__inline--radio">
        <input class="form__radio" id="form-default-radio-2" name="radio-1" type="radio" value="Option 2">
        <label class="form__label" for="form-default-radio-2">Option 2</label>
        </div>
        <div class="form__inline form__inline--radio">
        <input class="form__radio" id="form-default-radio-3" name="radio-1" type="radio" value="Option 3">
        <label class="form__label" for="form-default-radio-3">Option 3</label>
        </div>
    </fieldset>
    <fieldset class="form__fieldset">
        <legend class="form__legend">Check a Box</legend>
        <div class="form__inline form__inline--checkbox">
        <input class="form__checkbox" id="form-default-check-1" name="check-1" type="checkbox" value="Choice 1">
        <label class="form__label" for="form-default-check-1">Choice 1</label>
        </div>
        <div class="form__inline form__inline--checkbox">
        <input class="form__checkbox" id="form-default-check-2" name="check-2" type="checkbox" value="Choice 2">
        <label class="form__label" for="form-default-check-2">Choice 2</label>
        </div>
        <div class="form__inline form__inline--checkbox">
        <input class="form__checkbox" id="form-default-check-3" name="check-3" type="checkbox" value="Choice 3">
        <label class="form__label" for="form-default-check-3">Choice 3</label>
        </div>
        <div class="form__inline">
    </fieldset>
    <label class="form__label" for="form-default-select">Dropdown</label>
    <select class="form__select" id="form-default-select" name="dropdown">
        <option disabled selected value="null">Please Select</option>
        <option value="option-1">Make</option>
        <option value="option-2">A</option>
        <option value="option-3">Choice</option>
        <option value="option-4">Friend</option>
    </select>
    <label class="form__label" for="form-default-textarea">Let us know what's good</label>
    <textarea class="form__textarea" id="form-default-textarea" placeholder="You guys rock!" value=""></textarea>
    <input class="button button--submit form__submit" type="submit" value="Send">
</form>
</div>
### Build your form fancy like with the grid system!

<div class="example-box">
<form action="#form-fancy" class="form" id="form-fancy">
    <div class="row row--justify-center">
        <div class="col col-4">
        <label class="form__label" for="form-fancy-first-name">First Name</label>
        <input class="form__input" id="form-fancy-first-name" name="first-name" placeholder="eg. Jerry" required pattern="[a-zA-Z0-9]+" type="text">
        </div>
        <div class="col col-4">
        <label class="form__label" for="form-fancy-m-initial">Middle Initial</label>
        <input class="form__input" id="form-fancy-m-initial" name="m-initial" placeholder="I" required pattern="[a-zA-Z0-9]+" type="text">
        </div>
        <div class="col col-4">
        <label class="form__label" for="form-fancy-last-name">First Name</label>
        <input class="form__input" id="form-fancy-last-name" name="last-name" placeholder="eg. Smith" required pattern="[a-zA-Z0-9]+"
            type="text">
        </div>
        <div class="col col-6">
        <label class="form__label" for="form-fancy-email">Email</label>
        <input class="form__input" id="form-fancy-email" name="email" placeholder="jerry@blarp.com" required type="email" value="">
        </div>
        <div class="col col-6">
        <label class="form__label" for="form-fancy-tel">Phone</label>
        <input class="form__input" id="form-fancy-tel" name="phone" placeholder="555-555-5555" type="tel" value="">
        </div>
        <div class="col col-6">
        <fieldset class="form__fieldset">
            <legend class="form__legend">Click a Button</legend>
            <label class="form__label" for="form-fancy-radio-1">Option 1</label>
            <input class="form__radio" id="form-fancy-radio-1" name="radio-1" required type="radio" value="Option 1">
            <label class="form__label" for="form-fancy-radio-2">Option 2</label>
            <input class="form__radio" id="form-fancy-radio-2" name="radio-1" type="radio" value="Option 2">
            <label class="form__label" for="form-fancy-radio-3">Option 3</label>
            <input class="form__radio" id="form-fancy-radio-3" name="radio-1" type="radio" value="Option 3">
        </fieldset>
        </div>
        <div class="col col-6">
        <fieldset class="form__fieldset">
            <legend class="form__legend">Check a Box</legend>
            <label class="form__label" for="form-fancy-check-1">Choice 1</label>
            <input class="form__checkbox" id="form-fancy-check-1" name="check-1" type="checkbox" value="Choice 1">
            <label class="form__label" for="form-fancy-check-2">Choice 2</label>
            <input class="form__checkbox" id="form-fancy-check-2" name="check-2" type="checkbox" value="Choice 2">
            <label class="form__label" for="form-fancy-check-3">Choice 3</label>
            <input class="form__checkbox" id="form-fancy-check-3" name="check-3" type="checkbox" value="Choice 3">
        </fieldset>
        </div>
        <div class="col col-12">
        <label class="form__label" for="form-fancy-select">Dropdown</label>
        <select class="form__select" id="form-fancy-select" name="dropdown">
            <option disabled selected value="null">Please Select</option>
            <option value="option-1">Make</option>
            <option value="option-2">A</option>
            <option value="option-3">Choice</option>
            <option value="option-4">Friend</option>
        </select>
        </div>
    </div>
    <div class="row row--align-center">
        <div class="col col-6">
        <label class="form__label" for="form-fancy-textarea">Let us know what's good</label>
        <textarea class="form__textarea" id="form-fancy-textarea" placeholder="You guys rock!" value=""></textarea>
        </div>
        <div class="col col-4">
        <input class="button form__submit" type="submit" value="Send">
        </div>
    </div>
</form>
</div>