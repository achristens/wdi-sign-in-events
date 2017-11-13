"use strict";

document.addEventListener('DOMContentLoaded', function(){
  var button = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var close = document.querySelector('.close');
  button.addEventListener('click', function(){
    // button.addEventListener('transitionend', function() {
    // modal.style.transition = 'opacity 1000ms ease-in-out'
      modal.style.display = 'block';
    // });
  });

  close.addEventListener('click', function(){
    modal.style.display = 'none';
  });
});
