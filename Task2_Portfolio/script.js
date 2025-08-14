// mobile menu
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
if (toggle) toggle.addEventListener("click", () => menu.classList.toggle("open"));

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click", e=>{
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:"smooth", block:"start"});
      menu?.classList.remove("open");
    }
  })
});

// fake contact submit
const form = document.getElementById("contactForm");
if(form){
  form.addEventListener("submit", e=>{
    e.preventDefault();
    alert("Thanks, your message is noted (demo).");
    form.reset();
  });
}
