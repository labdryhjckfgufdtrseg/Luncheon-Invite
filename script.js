const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");
const app = document.getElementById("app");
const music = document.getElementById("bgMusic");

seal.addEventListener("click", async () => {
  envelope.classList.add("open");

  try {
    await music.play();
  } catch(e){}

  setTimeout(()=>{
    document.getElementById("envelopeSection").style.display="none";
    app.classList.remove("hidden");
    animateScene(0);
  },1500);
});

let current = 0;
const scenes = document.querySelectorAll(".scene");

/* NEXT */
function nextScene(){
  scenes[current].classList.remove("active");

  current++;

  if(scenes[current]){
    scenes[current].classList.add("active");
    animateScene(current);

    window.scrollTo({
      top: window.innerHeight * current,
      behavior: "smooth"
    });
  }
}

/* SWIPE */
let startY=0;
document.addEventListener("touchstart", e=>{
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", e=>{
  let endY = e.changedTouches[0].clientY;
  if(startY - endY > 50){
    nextScene();
  }
});

/* ANIMATION */
function animateScene(i){
  const items = scenes[i].querySelectorAll("*");
  items.forEach((el, index)=>{
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";

    setTimeout(()=>{
      el.style.transition = "0.8s";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, index*150);
  });
}

/* REVEAL */
function reveal(el){
  el.classList.add("open");
  el.nextElementSibling.classList.add("show");

  el.animate([
    {transform:"scale(1)"},
    {transform:"scale(1.6)"},
    {transform:"scale(1.3)"}
  ],{duration:500});
}

/* COUNTDOWN */
const countdown = document.getElementById("countdown");
const eventDate = new Date("July 21, 2026 10:00:00").getTime();

setInterval(()=>{
  if(!countdown) return;
  const now = new Date().getTime();
  const gap = eventDate - now;

  const d = Math.floor(gap/(1000*60*60*24));
  const h = Math.floor((gap/(1000*60*60))%24);
  const m = Math.floor((gap/(1000*60))%60);
  const s = Math.floor((gap/1000)%60);

  countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
},1000);
