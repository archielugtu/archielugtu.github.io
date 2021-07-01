// List of sentences
var _CONTENT = [
    "Hi, I'm Rchi Lugtu.",
    "I'm a Software Engineer.",
    "I like to create things.",
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#intro-text");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
    // Get substring with 1 characater added
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_PART]) {
        // Hide the cursor
        _CURSOR.style.display = "none";

        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

// Implements deleting effect
function Delete() {
    // Get substring with 1 characater deleted
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === "") {
        clearInterval(_INTERVAL_VAL);

        // If current sentence was last then display the first one, else move to the next
        if (_PART == _CONTENT.length - 1) _PART = 0;
        else _PART++;

        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function () {
            _CURSOR.style.display = "inline-block";
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

// adding a click event to the card-container to open pop up card
const projectCards = document.querySelectorAll(".card-container");
for (let card of projectCards) {
    card.addEventListener("click", function () {
        card.nextElementSibling.classList.add("active");
    });
}

// Adding a click event to the 'x' button of pop up card
const popupCloseButtons = document.querySelectorAll(".popup-x-btn");
for (let button of popupCloseButtons) {
    button.addEventListener("click", function () {
        button.parentElement.parentElement.offsetParent.classList.remove(
            "active"
        );
    });
}

function toggleSidebar() {
    let sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("active");
    if (
        !document.getElementById("overlay").style.display ||
        document.getElementById("overlay").style.display === "none"
    ) {
        document.getElementById("overlay").style.display = "block";
    } else {
        document.getElementById("overlay").style.display = "none";
    }
}
function toggleSidebarBtn() {
    let sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("active");
    document.getElementById("overlay").style.display = "none";
}

// Overlay Effect
function on() {}
function off() {
    let sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("active");
    document.getElementById("overlay").style.display = "none";
}

// Card Pop up effect
function openCardPopUp() {
    console.log(this);
    let card = document.querySelector(".card");
    document.querySelector(".card").lastElementChild.style.top = "0";
    document.querySelector(".card").lastElementChild.style.cursor = "auto";
}

function closeCardPopUp() {
    let card = document.querySelector(".card");
    document.querySelector(".card").lastElementChild.style.top = "400px";
}

// Smooth Scrolling
const scroll = new SmoothScroll('#sidebar a[href*="#"], #navbar a[href*="#"]', {
    speed: 500,
});

// Sidebar item selected
const navbarName = document.querySelector(".nav-title")
const sidebarName = document.querySelector("#sidebar-name")
const sidebarSubtitle = document.querySelector("#sidebar-subtitle")
const about = document.querySelector("#about-link")
const experiences = document.querySelector("#experiences-link")
const projects = document.querySelector("#projects-link")
const contact = document.querySelector("#contact-link")

navbarName.addEventListener('click', removeItemSelected)
sidebarName.addEventListener('click', removeItemSelected)
sidebarSubtitle.addEventListener('click', removeItemSelected)

about.addEventListener('click', () => {
    about.classList.add("selected")
    experiences.classList.remove("selected")
    projects.classList.remove("selected")
    contact.classList.remove("selected")
})

experiences.addEventListener('click', () => {
    experiences.classList.add("selected")
    about.classList.remove("selected")
    projects.classList.remove("selected")
    contact.classList.remove("selected")
})

projects.addEventListener('click', () => {
    projects.classList.add("selected")
    experiences.classList.remove("selected")
    about.classList.remove("selected")
    contact.classList.remove("selected")
    
})

contact.addEventListener('click', () => {
    contact.classList.add("selected")
    experiences.classList.remove("selected")
    projects.classList.remove("selected")
    about.classList.remove("selected")
})

function removeItemSelected() {
    about.classList.remove("selected")
    experiences.classList.remove("selected")
    projects.classList.remove("selected")
    contact.classList.remove("selected")
}