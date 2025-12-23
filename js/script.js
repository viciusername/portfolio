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
