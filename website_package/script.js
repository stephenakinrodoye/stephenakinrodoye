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

// document.addEventListener("click", funcAbout);

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

// function submitComment() {
//     const name = document.getElementById("name").value;
//     const user_name = document.getElementById("user_name").value;

//     let commentSection = [{}];

//     let 
// }