--- 
layout: aav-cornea.html 
title: Grid
sub-title: 12 Column Grid Run by Flexbox (for now)
---
<style>
    .example-box .col{
        background: #aaa;
        min-height: 50px;   
    }
</style>

## 12 Columns

Use a row class and fill with columns:

<div class="example-box">
    <div class="row">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="col">3</div>
        <div class="col">4</div>
        <div class="col">5</div>
        <div class="col">6</div>
        <div class="col">7</div>
        <div class="col">8</div>
        <div class="col">9</div>
        <div class="col">10</div>
        <div class="col">11</div>
        <div class="col">12</div>
    </div>
</div>

### Mix and match column sizes:

<div class="example-box">
    <div class="row">
        <div class="col col-2">col-2</div>
        <div class="col col-4">col-4</div>
        <div class="col col-3">col-3</div>
        <div class="col col-2">col-2</div>
        <div class="col col-1">col-1</div>
    </div>
</div>

## Horizontal Alignment

### Left

<div class="example-box">
    <div class="row row--justify-start">
        <div class="col col-3">1</div>
        <div class="col col-3">2</div>
        <div class="col col-3">3</div>
        <div class="col col-3">4</div>
    </div>
</div>

### Center

<div class="example-box">
    <div class="row row--justify-center">
        <div class="col col-3">1</div>
        <div class="col col-3">2</div>
        <div class="col col-3">3</div>
        <div class="col col-3">4</div>
    </div>
</div>

### Right

<div class="example-box">
    <div class="row row--justify-end">
        <div class="col col-3">1</div>
        <div class="col col-3">2</div>
        <div class="col col-3">3</div>
        <div class="col col-3">4</div>
    </div>
</div>

## Vertical Alignment

### Top

<div class="example-box">
    <div class="row row--justify-center row--align-top">
        <div class="col col-3">1</div>
        <div class="col col-3">2</div>
        <div class="col col-3">3</div>
        <div class="col col-3">4</div>
    </div>
</div>

### Center

<div class="example-box">
    <div class="row row--justify-center row--align-center">
        <div class="col col-3">1</div>
        <div class="col col-3">2</div>
        <div class="col col-3">3</div>
        <div class="col col-3">4</div>
    </div>
</div>

### Bottom

<div class="example-box">
    <div class="row row--justify-center row--align-bottom">
        <div class="col col-3">1</div>
        <div class="col col-3">2</div>
        <div class="col col-3">3</div>
        <div class="col col-3">4</div>
    </div>
</div>