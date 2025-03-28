
document.querySelector('.main-section').addEventListener('mouseenter', function() {
    this.classList.add('fade-in');
  });

  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

 

document.addEventListener('DOMContentLoaded', () => {
  console.log("Discover and Experience Ghana!");
});
 
window.addEventListener("load",() =>{
const loader = document.querySelector(".loader");

loader.classList.add("loader-hidden");

loader.addEventListener("transitionend",() => {
document.body.removeChild("loader");
})
})

