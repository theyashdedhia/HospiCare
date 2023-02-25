const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})

const seeMore = document.querySelectorAll('[data-see-more]');

seeMore.forEach(button =>{
    button.addEventListener('click', ()=>{
        button.parentElement.nextElementSibling.classList.toggle('active');
    })
})