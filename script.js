const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");
const app = document.getElementById("app");
const music = document.getElementById("bgMusic");

seal.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(()=>{
    document.getElementById("envelopeSection").style.display="none";
    app.classList.remove("hidden");
    music.play();
  },1500);
});

/* SCENE CONTROL */
let current = 0;
const scenes = document.querySelectorAll(".scene");

/* TAP OR SWIPE DOWN */
document.addEventListener("click", nextScene);

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

function nextScene(){
  scenes[current].classList.remove("active");
  current++;
  if(scenes[current]){
    scenes[current].classList.add("active");
  }
}

/* CARD REVEAL */
function reveal(card){
  card.classList.toggle("open");
}

/* COUNTDOWN */
const countdown = document.getElementById("countdown");
const eventDate = new Date("July 21, 2026 10:00:00").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const gap = eventDate - now;

  const d = Math.floor(gap/(1000*60*60*24));
  const h = Math.floor((gap/(1000*60*60))%24);
  const m = Math.floor((gap/(1000*60))%60);
  const s = Math.floor((gap/1000)%60);

  countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
},1000);
