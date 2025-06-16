const button = document.querySelector('button');
const div = document.querySelector('#root')

function eventHandlerButton(event){
  console.log('Hi button');
}

 function eventHandlerBody(event){
  console.log('HI body')
 }
 button.addEventListener('click',eventHandlerButton,{capture: true});
//  div.addEventListener('click',eventHandler,{capture: true});
 document.body.addEventListener('click', eventHandlerBody,{capture: true});
//  window.addEventListener('click', eventHandler,{capture: true});
