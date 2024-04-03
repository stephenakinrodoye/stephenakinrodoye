const home = document.getElementById("home");
const aboutMe = document.getElementById("about-me");
const socialLinks = document.getElementById("social-links");
const homeImgHover = document.getElementById("home-img-hover");
const projectsContainer = document.getElementById("projects-container");

function funcAbout() {
    aboutMe.style.display = "block";
    aboutMe.style.display = "flex";
    home.style.display = "none";
    socialLinks.style.display = "none";
    homeImgHover.style.display = "none";
    projectsContainer.style.display = "none";
}

function myHome() {
    home.style.display = "block";
    home.style.display = "flex";
    aboutMe.style.display = "none";
    socialLinks.style.display = "block";
    homeImgHover.style.display = "block";
    projectsContainer.style.display = "none";
}

function projects() {
    projectsContainer.style.display = "block";
    home.style.display = "none";
    aboutMe.style.display = "none";
    homeImgHover.style.display = "none";
    socialLinks.style.display = "none";
}

const submitBtn = document.getElementById('comments-submit-btn');
const userName = document.getElementById('user_name');
const formComment = document.getElementById('comments-input');
const commentSection = document.querySelector('.comment-section');

let feedbackArr = [];

function submitComment() {
    const userForm = userName.value;
    const commentForm = formComment.value;

    if (userForm && commentForm !== '') {
        // create new feedback object
        const newFeedback = {
            "userName": userForm,
            "userComment": commentForm,
        }
        // add new feedback to array
        feedbackArr.push(newFeedback);

        // Add new feedback to comment section
        addFeedback(newFeedback);

        // Reset form
        resetForm();
    }
}

function addFeedback(item) {
    // create new comment div
    const div = document.createElement('div');
    div.classList.add('comment-section');
    div.innerHTML = `
        <p class="name" id="name" placeholder="User name">${item.userName}</p>
        <p class="comments" id="comments" placeholder="User comment">${item.userComment}</p>`

    commentSection.appendChild(div);
}

function resetForm() {
    userName.value = '';
    formComment.value = '';
}

submitBtn.addEventListener('click', submitComment);

const barsMenu = document.querySelector('#bars-menu');
const closeMenu = document.getElementById('close-menu');
const subscribeBtn = document.getElementById('subscribe-btn');
const menu = document.querySelector('.menu');

//display menu on media queries

function displayMenu() {
    menu.style.display = 'block';
    barsMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    subscribeBtn.style.display = 'none'
}

barsMenu.addEventListener('click', displayMenu);

//close menu on media queries
function shutDownMenu() {
    menu.style.display = 'none';
    barsMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    subscribeBtn.style.display = 'block';
}