setTimeout(function() {
  document.querySelector('.notify-alert-box').style.top = '0'
},1000)

document.querySelector('#notify-button').onclick = async () =>{
  localStorage.setItem('notify','true')
  
}

function notifyTrue(){
  if(localStorage.getItem('notify','true')){
    
  }
}