document.getElementById("year").textContent=new Date().getFullYear();
const panic=document.getElementById("panic");
panic.onclick=()=>{document.body.classList.add("shake");panic.textContent="🚨 YOU ACTUALLY CLICKED IT";setTimeout(()=>document.body.classList.remove("shake"),400);setTimeout(()=>panic.textContent="🚨 Do not click",1500)};
const modal=document.getElementById("modal"),title=document.getElementById("modalTitle"),text=document.getElementById("modalText");
const memes=[...document.querySelectorAll(".meme")];
function openMeme(m){title.textContent=m.dataset.title;text.textContent=m.dataset.text;modal.classList.add("show")}
memes.forEach(m=>m.onclick=()=>openMeme(m));
document.getElementById("close").onclick=()=>modal.classList.remove("show");
modal.onclick=e=>{if(e.target===modal)modal.classList.remove("show")};
document.getElementById("again").onclick=()=>openMeme(memes[Math.floor(Math.random()*memes.length)]);
