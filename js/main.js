"use strict";

document.addEventListener('DOMContentLoaded', function(){
  var button = document.querySelector('.signin');
  var modal  = document.querySelector('.modal');
  var close  = document.querySelector('.close');
  var submit = document.querySelector('.submit');
  var inputs  = document.querySelectorAll('input');

  button.addEventListener('click', function(){
    // modal.style.animation = 'opac 1s';
    modal.style.display = 'block';
    return 'transitionstart';
    // modal.style.transform = translate(0,0);
  });

  close.addEventListener('click', function(){
    modal.style.display = 'none';
  });

  submit.addEventListener('click', function(){
    inputs.forEach(function(input){
      if (input.value === ""){
        input.classList.add('error');
        input.addEventListener('mousemove', function(){
          input.classList.toggle('error');
        });
      }
    });
  });
});
