// adding a click event to the card-container to open pop up card
const projectCards = document.querySelectorAll('.card-container');
for (let card of projectCards) {
    card.addEventListener('click', function() {
        card.nextElementSibling.classList.add('active');
    })
}

// Adding an a click event to the 'x' button of pop up card
const popupCloseButtons = document.querySelectorAll('.popup-x-btn');
for (let button of popupCloseButtons) {
    button.addEventListener('click', function() {
        button.parentElement.parentElement.offsetParent.classList.remove('active');      
    })
}


function toggleSidebar() {
    let sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('active');
    if(!document.getElementById("overlay").style.display || document.getElementById("overlay").style.display === 'none') {
        document.getElementById("overlay").style.display = "block"
    } else {
        document.getElementById("overlay").style.display = 'none';
    }
}
function toggleSidebarBtn() {
    let sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('active');
    document.getElementById("overlay").style.display = "none";
}

// Overlay Effect
function on() {
}
function off() {
    let sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('active');
    document.getElementById("overlay").style.display = "none";
}

// Card Pop up effect
function openCardPopUp() {
    console.log(this);
    let card = document.querySelector('.card');
    document.querySelector('.card').lastElementChild.style.top = '0';
    document.querySelector('.card').lastElementChild.style.cursor = 'auto';
}

function closeCardPopUp() {
    let card = document.querySelector('.card');
    document.querySelector('.card').lastElementChild.style.top = '400px'
}


// Smooth Scrolling
const scroll = new SmoothScroll('#sidebar a[href*="#"], #navbar a[href*="#"]', {
    speed: 500
});


// Intro H1 Parallax
let introText = document.querySelector('#intro-text');
window.addEventListener('scroll', function() {
    const value = window.pageYOffset;
    introText.style.top = value * 0.55 + 'px';
})