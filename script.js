'use strict';

const form = document.querySelector('.form');

const input = document.querySelectorAll('input');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password= document.getElementById('password');
const showPassword = document.querySelector('i');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  for(let i = 0; i < input.length; i++){
    if(!input[i].value){
      input[i].parentElement.classList.add('error');
     
      if(input[i].type === 'email' || input[i].type === 'password'){
        if(!input[i].value){
          input[i].parentElement.classList.remove('valid-error');
        }
      }
    } 
    else{

        input[i].parentElement.classList.remove('error');
          
      if(input[i].type === 'email'){
        if(!isEmail(input[i].value)){
          input[i].parentElement.classList.add('valid-error');
        }else{
            input[i].parentElement.classList.remove('valid-error');

         }      
        }

      if(input[i].type === 'password'){
       
        if(input[i].value.length < 6){
          input[i].parentElement.classList.add('valid-error');
      
        }else{
          input[i].parentElement.classList.remove('valid-error');
        }
        
      }
    }
  } 
});

const arr =[firstName,lastName,email,password];

for(let k = 0; k < arr.length;k++){
 arr[k].addEventListener('focus',() =>{
  
    arr[k].parentElement.classList.remove('error');
    arr[k].parentElement.classList.remove('valid-error');
    
  });
}

function isEmail(email) { 
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
} 

