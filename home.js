setTimeout(function() {
  document.querySelector('.notify-alert-box').style.top = '0'
},1000)

document.querySelector('#notify-button').onclick = async () =>{
  localStorage.setItem('notify','true');
  notifyTrue();
  notifyOption();
}

function notifyTrue() {
  if(localStorage.getItem('notify','true')){
  document.querySelector('.notify-alert-box').style.display = 'none'
  }
}


document.querySelector('#notify-cancel-button').onclick = async () => {
  localStorage.setItem('notify', 'false');
  notifyFalse();
}

function notifyFalse() {
  if(localStorage.getItem('notify', 'false')) {
    document.querySelector('.notify-alert-box').style.display = 'none'
  }
}


function showNotification() {
  var notificationBody = new Notification('New message for Go program Code Blogs',{
    body:'Go Program Code World'
    
  })
}

function notifyOption(){
  if(localStorage.notify == 'true'){
    if(Notification.permission == 'granted'){
      // showNotification();
      if(localStorage.notifyMessage === undefined){
        localStorage.setItem('notifyMessage', 'true'),
        showNotification();
      }
    } else if(Notification.permission !=='denied'){
      Notification.requestPermission().then(permission => {
        if(permission == 'granted'){
          showNotification();
        }
      })
    }
      
    }
    
    
  }
  notifyOption();