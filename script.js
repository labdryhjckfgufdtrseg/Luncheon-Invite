// SCROLL ANIMATION
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            card.classList.add("show");
        }
    });
});

// MUSIC
const btn = document.getElementById("enter");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
    music.play();
    window.scrollTo({top: window.innerHeight, behavior: "smooth"});
});

// REVEAL
function reveal(el){
    const text = el.nextElementSibling;
    text.classList.add("show");
    el.style.display = "none";
}

// COUNTDOWN
const countdown = document.getElementById("countdown");
const eventDate = new Date("July 21, 2026 10:00:00").getTime();

setInterval(()=>{
    const now = new Date().getTime();
    const gap = eventDate - now;

    const d = Math.floor(gap / (1000*60*60*24));
    const h = Math.floor((gap % (1000*60*60*24))/(1000*60*60));
    const m = Math.floor((gap % (1000*60*60))/(1000*60));
    const s = Math.floor((gap % (1000*60))/1000);

    countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
},1000);
