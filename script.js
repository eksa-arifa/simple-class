const fa = document.querySelector('.navbar .padding i');
const navbar = document.querySelector('.navbar .padding .navigator');


fa.onclick = ()=>{
  navbar.classList.toggle('active');
}

function copytextarea(){
  var textarea = document.getElementById('textarea');
  
  textarea.select();
  
  document.execCommand('copy');
  
  alert('Berhasil di copy,sekarang pastekan pada code editor anda');
}
