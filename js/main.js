"use strict";

document.addEventListener('DOMContentLoaded', function(){
  var button = document.querySelector('.signin');
  var modal = document.querySelector('.modal');

  button.addEventListener('click', function(){
    modal.style.display = 'block';
  });
});
