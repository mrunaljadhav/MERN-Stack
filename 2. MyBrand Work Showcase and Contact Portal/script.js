const toggleBtn= document.getElementById("themeToggle");
toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("light-theme");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("light-theme" ? "light":"dark")
    );
    const isLight = document.body.classList.contains("light-theme");
 toggleBtn.textContent = isLight ? "🌙" : "🌞";
});

const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Software Engineer", "Writer", "Chess Player", "Fashion Enthusiast"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;