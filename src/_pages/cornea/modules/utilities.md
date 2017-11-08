--- 
layout: aav-cornea.html 
title: Utilities
sub-title: A collection of useful context-less classes.
---
## Align Content

### Elem-DIR

.elem-right, .elem-left, .elem-center classes provide an easy way of positioning content in text. They can be provided to any element, but images are being used for example purposes.

<div class="example-box">
    <p><img class="elem-right" src="http://via.placeholder.com/350x150">Nunc congue lorem vel lorem venenatis, eu convallis lorem imperdiet. Nullam rutrum posuere eros a dignissim. Suspendisse non diam et augue ullamcorper fringilla. In vestibulum urna nec luctus iaculis. Curabitur vitae purus sit amet lectus dapibus pharetra. Sed turpis turpis, commodo quis luctus in, sollicitudin in mi. Suspendisse egestas semper odio, eget scelerisque leo mollis in. Vestibulum aliquet mauris arcu. In viverra sapien tempus ipsum placerat pulvinar. Suspendisse a libero gravida, dictum felis id, pulvinar massa. Etiam vitae turpis libero. Maecenas fringilla aliquet augue sed vestibulum. Nulla ac lobortis velit, non consectetur purus.</p>
    <p><img class="elem-left" src="http://via.placeholder.com/350x250">Nunc congue lorem vel lorem venenatis, eu convallis lorem imperdiet. Nullam rutrum posuere eros a dignissim. Suspendisse non diam et augue ullamcorper fringilla. In vestibulum urna nec luctus iaculis. Curabitur vitae purus sit amet lectus dapibus pharetra. Sed turpis turpis, commodo quis luctus in, sollicitudin in mi. Suspendisse egestas semper odio, eget scelerisque leo mollis in. Vestibulum aliquet mauris arcu. In viverra sapien tempus ipsum placerat pulvinar. Suspendisse a libero gravida, dictum felis id, pulvinar massa. Etiam vitae turpis libero. Maecenas fringilla aliquet augue sed vestibulum. Nulla ac lobortis velit, <strong>Watch your widows!</strong></p>
    <p><strong>Center your images around gibberish that I've randomly generated to make a point! No default margins though so
        add those with our m-side-# classes.</strong> eu convallis lorem imperdiet. Nullam rutrum posuere eros a dignissim.
    Suspendisse non diam et augue ullamcorper fringilla.<img class="elem-center m-t-4 m-b-4" src="http://via.placeholder.com/450x250"> In vestibulum urna nec luctus iaculis. Curabitur vitae purus sit amet lectus dapibus pharetra. Sed turpis turpis, commodo quis luctus in, sollicitudin in mi. Suspendisse egestas semper odio, eget scelerisque leo mollis in. Vestibulum aliquet mauris arcu. In viverra sapien tempus ipsum placerat pulvinar. Suspendisse a libero gravida, dictum felis id, pulvinar massa. Etiam vitae turpis libero. Maecenas fringilla aliquet augue sed vestibulum. Nulla ac lobortis velit, non consectetur purus.</p>
</div>

### Text Colors

<div class="example-box">
    <p>This text exists to demonstrate the text controls available.<br>See
        <span class="text-danger">your</span>
        <span class="text-orange">text</span>
        <span class="text-secondary">in</span>
        <span class="text-success">various</span>
        <span class="text-info">colors</span>
        <span class="text-primary">or...</span>
    </p>
</div>

### Text Alignment

*.text-left*, *.text-right*, and *.text-center* classes provide easy alignment.

<div class="example-box">
    <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id scelerisque metus. Mauris felis justo, aliquet id ipsum at, mattis dapibus sapien. Donec mauris mauris, fermentum quis enim eu, dictum hendrerit dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sodales leo. Mauris hendrerit risus dolor, vel pretium ex molestie commodo. Quisque ac magna est.</p>
    <p class="text-right">Duis cursus sem sit amet nibh ornare tempor. Nunc eu lacus magna. In elementum, odio in finibus bibendum, risus velit condimentum augue, at iaculis magna massa sed velit. Donec faucibus nulla et diam blandit, et imperdiet diam rutrum. Sed porta in nisi id porta. Cras tristique condimentum tempus. Nulla vitae magna tristique, dignissim magna quis, suscipit lacus. Donec pharetra, lorem placerat dapibus faucibus, ligula sapien tristique erat, id eleifend tellus libero vel magna. Donec rutrum velit lectus.</p>
    <p class="text-center">Nullam hendrerit nunc quis odio faucibus ultrices. Donec non ante turpis. Praesent efficitur sed ligula gravida porta. Nulla ut ipsum quis est vulputate tempor. Ut porta dictum erat non dignissim. Etiam tempus ultrices diam a malesuada. Donec viverra at enim ut imperdiet. Pellentesque a sapien mattis urna accumsan vulputate. Morbi at ipsum pretium, scelerisque ex ac, tincidunt lorem. Donec laoreet est nibh, dictum interdum eros elementum eu. Sed ullamcorper lorem vitae diam elementum facilisis.</p>
</div>

### Text Sizing

*.text-xs*, *.text-sm*, *.text-lg*, *.text-xl* provide easy resizing.

<div class="example-box">
    <p>Consider making your text <span class="text-lg">various sizes</span> that <span class="text-xs">scale</span> to the container they're in! Meaning they'll always be <span class="text-sm">reasonably close</span> to the original font size <span class="text-xl">no matter what</span>.</p>
</div>

### Backgrounds

Background colors are different than alerts. Backgrounds like this to not provide context, padding, margin, or any styling except a background color.

<div class="example-box">
    <p class="bg-warning p-1">Put your text on a background if you want!</p>
    <p class="bg-primary p-1">Just be careful of your font color</p>
    <p class="bg-success text-white">And your padding</p>
</div>

## Additional classes
### Margin/Padding

Add consistent margin to any element with margin classes. 

#### All Around

*.m-(1-5)*

#### Left

*.m-l-(1-5)*

#### Right

*.m-r-(1-5)*

#### Top

*.m-t-(1-5)*

#### Bottom

*.m-b-(1-5)*