const mobile_nav= document.querySelector(".mobile-nav-button");
const nav_headr= document.querySelector(".header");

const toggleNavbar= ()=>{

    nav_headr.classList.toggle("active")

};

mobile_nav.addEventListener("click",()=>toggleNavbar());


/*Accordion */
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )