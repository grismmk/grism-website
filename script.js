const year=document.getElementById("year");
year.textContent=new Date().getFullYear();

const panic=document.getElementById("panic");
panic.addEventListener("click",()=>{
  document.body.classList.add("shake");
  panic.textContent="🚨 YOU CLICKED IT.";
  setTimeout(()=>document.body.classList.remove("shake"),400);
  setTimeout(()=>panic.textContent="🚨 Do not click",1400);
});

document.getElementById("surprise").addEventListener("click",function(){
  const compliments=[
    "You have excellent taste in websites.",
    "Honestly? 10/10 clicking skills.",
    "You survived the whole website. Respect.",
    "Your browser is proud of you.",
    "This website officially approves of you."
  ];
  this.textContent=compliments[Math.floor(Math.random()*compliments.length)];
});
