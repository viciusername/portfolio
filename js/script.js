const text="Вітаю зі святом! Гарного дня та успіхів у навчанні!";
let i=0;
function type(){
 if(i<text.length){
  document.getElementById("typeGreeting").textContent+=text[i++];
  setTimeout(type,40);
 }
}
window.onload=()=>type();

document.getElementById("searchInput").addEventListener("input",function(){
 const q=this.value.toLowerCase();
 document.querySelectorAll(".searchable").forEach(el=>{
  el.style.display=el.textContent.toLowerCase().includes(q)?"block":"none";
 });
});

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!name){
    alert("Будь ласка, введіть ім'я.");
    return;
  }
  if(!email || !emailPattern.test(email)){
    alert("Будь ласка, введіть коректний email.");
    return;
  }
  if(!message){
    alert("Будь ласка, введіть повідомлення.");
    return;
  }
  alert("Дякую! Повідомлення надіслано.");
  this.reset();
});

// Simple lightbox for art gallery
(function(){
  const triggers = document.querySelectorAll('.lightbox-trigger');
  const lightbox = document.getElementById('lightbox');
  const lbImage = lightbox ? lightbox.querySelector('.lightbox__image') : null;
  const closeBtn = lightbox ? lightbox.querySelector('.lightbox__close') : null;
  const overlay = lightbox ? lightbox.querySelector('[data-close]') : null;

  function open(src, alt){
    if(!lightbox || !lbImage) return;
    lbImage.src = src;
    lbImage.alt = alt || '';
    lightbox.setAttribute('aria-hidden', 'false');
  }
  function close(){
    if(!lightbox) return;
    lightbox.setAttribute('aria-hidden', 'true');
    lbImage.src = '';
  }

  triggers.forEach(t => t.addEventListener('click', function(e){
    e.preventDefault();
    open(this.href, this.querySelector('img')?.alt);
  }));

  if(closeBtn) closeBtn.addEventListener('click', close);
  if(overlay) overlay.addEventListener('click', close);
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
})();
