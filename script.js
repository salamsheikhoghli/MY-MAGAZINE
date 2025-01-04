const mobileButton = document.querySelector("#mobile-toggle");
const navItems = document.querySelector(".nav-items");
const navlinks = document.querySelectorAll(".nav-link");

mobileButton.addEventListener('click' , () => {
 navItems.classList.toggle("active");
});
navlinks.forEach((navlink) =>{
    navlink.addEventListener("click", () =>{
        navItems.classList.toggle("active");
    });
});

