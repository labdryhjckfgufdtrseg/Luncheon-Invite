const envelope = document.getElementById("envelope");
const btn = document.getElementById("openBtn");
const slider = document.getElementById("main");
const music = document.getElementById("bgMusic");

// OPEN
btn.onclick = () => {
    envelope.classList.add("open");

    setTimeout(()=>{
        document.querySelector(".envelope-section").style.display="none";
        slider.style.display="block";
        music.play();
    },1200);
};

// SCROLL ANIMATION
const slides = document.querySelectorAll(".slide");

window.addEventListener("scroll",()=>{
slides.forEach(s=>{
const top = s.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
s.classList.add("show");
}
});
});

// REVEAL
function reveal(el){
el.nextElementSibling.classList.add("show");
el.style.display="none";
}

// COUNTDOWN
const countdown = document.getElementById("countdown");
const eventDate = new Date("July 21, 2026 10:00:00").getTime();

setInterval(()=>{
const now = new Date().getTime();
const gap = eventDate - now;

const d = Math.floor(gap/(1000*60*60*24));
const h = Math.floor((gap%(1000*60*60*24))/(1000*60*60));
const m = Math.floor((gap%(1000*60*60))/(1000*60));
const s = Math.floor((gap%(1000*60))/1000);

countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
},1000);

// PETALS GENERATOR
const petals = document.querySelector(".petals");
for(let i=0;i<20;i++){
let p=document.createElement("span");
p.style.left=Math.random()*100+"%";
p.style.animationDuration=5+Math.random()*5+"s";
petals.appendChild(p);
}

// SPARKLES
const sparkles = document.querySelector(".sparkles");
for(let i=0;i<30;i++){
let s=document.createElement("span");
s.style.left=Math.random()*100+"%";
s.style.top=Math.random()*100+"%";
sparkles.appendChild(s);
}
