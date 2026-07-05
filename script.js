const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");
const content = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

/* OPEN ENVELOPE */
seal.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    document.getElementById("envelopeSection").style.display = "none";
    content.classList.remove("hidden");
    music.play();
  }, 1600);
});

/* CARD FLIP */
function flipCard(card){
  card.classList.toggle("flipped");
}

/* COUNTDOWN */
const countdown = document.getElementById("countdown");
const eventDate = new Date("July 21, 2026 10:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = eventDate - now;

  const d = Math.floor(gap / (1000*60*60*24));
  const h = Math.floor((gap/(1000*60*60))%24);
  const m = Math.floor((gap/(1000*60))%60);
  const s = Math.floor((gap/1000)%60);

  countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

/* PETALS GENERATOR */
const petals = document.querySelector(".petals");

for(let i=0;i<20;i++){
  let span = document.createElement("span");
  span.innerHTML = "🌸";
  span.style.left = Math.random()*100+"vw";
  span.style.animationDuration = (5 + Math.random()*5)+"s";
  petals.appendChild(span);
}

/* SPARKLES */
const sparkles = document.querySelector(".sparkles");

for(let i=0;i<30;i++){
  let s = document.createElement("span");
  s.style.left = Math.random()*100+"vw";
  s.style.top = Math.random()*100+"vh";
  sparkles.appendChild(s);
}
