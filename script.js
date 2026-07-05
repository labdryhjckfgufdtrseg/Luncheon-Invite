const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");

seal.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        document.querySelector(".envelope-section").style.display = "none";
        mainContent.style.display = "block";
        music.play();
    }, 1500);
});

/* COUNTDOWN */
const countdown = document.getElementById("countdown");
const eventDate = new Date("July 21, 2026 10:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const gap = eventDate - now;

    const d = Math.floor(gap / (1000*60*60*24));
    const h = Math.floor((gap % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((gap % (1000*60*60)) / (1000*60));
    const s = Math.floor((gap % (1000*60)) / 1000);

    countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;

}, 1000);
