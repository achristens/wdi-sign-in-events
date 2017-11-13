"use strict";

document.addEventListener('DOMContentLoaded', function(){
  var button = document.querySelector('.signin');
  var modal  = document.querySelector('.modal');
  var close  = document.querySelector('.close');
  var submit = document.querySelector('.submit');
  var inputs = document.querySelectorAll('input');
  var body   = document.querySelector('body');

  body.addEventListener('click', function(e){
    if (e.target.classList.contains('modal') ){ 
      modal.style.display = 'none';
    }
  });

  button.addEventListener('click', function(){
    modal.style.display = 'block';
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
