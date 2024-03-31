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
}

function myHome() {
    home.style.display = "block";
    home.style.display = "flex";
    aboutMe.style.display = "none";
    socialLinks.style.display = "block";
    homeImgHover.style.display = "block";

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
const name = document.getElementById('name');
const comments = document.getElementById('comments');
const commentSection = document.querySelector('.comment-section');

feedbackArr = [];

function submitComment(e) {
    const userForm = userName.value;
    const commentForm = formComment.value;

    if (userForm && commentForm !== '') {
        // create new feedback section
        newFeedback = {
            "userName": userForm,
            "userComment": commentForm,
        }
        // add new feedback to array
        feedbackArr.push(newFeedback);
    }
    e.preventDefault();
}

function resetForm() {
    userName.value = '';
    formComment.value = '';
}

function addFeedback(item) {
    // create new div
    const div = document.createElement('div');
    div.classList = 'comment-section'
    div.innerHTML = `
        <div class="comment-section">
            <p class="name" id="name" placeholder="User name">${item.userName}</p>
            <p class="comments" id="comments" placeholder="User comment">${item.userComment}</p>
        </div>`

    commentSection.insertAdjacentElement('beforeend', div);
}

