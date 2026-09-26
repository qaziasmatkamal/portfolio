// Qazi Asmat Kamal | Developer
// Only JavaScript fundamentals currently learned are used here.

let developerName = "Qazi Asmat Kamal";
let currentSemester = 1;

let skills = ["HTML", "CSS", "JavaScript Basics"];

let projects = [
    ["HomeNest Furniture", "Furniture Website"],
    ["Nature Gallery", "Gallery Website"]
];

function portfolioMessage(name) {
    if (name == developerName) {
        return "Welcome to " + name + "'s portfolio.";
    } else {
        return "Welcome to the portfolio.";
    }
}

function getSkillStatus(skill) {
    if (skill == "HTML" || skill == "CSS") {
        return "Completed";
    } else if (skill == "JavaScript Basics") {
        return "Currently Learning";
    } else {
        return "Coming Later";
    }
}

function getSemesterMessage(semester) {
    switch (semester) {
        case 1:
            return "Semester 1 - Web development fundamentals.";
        case 2:
            return "Semester 2 - More development skills.";
        default:
            return "More learning ahead.";
    }
}

for (let i = 0; i < projects.length; i++) {
    console.log("Project " + (i + 1) + ": " + projects[i][0]);
}

let i = 0;
while (i < skills.length) {
    console.log(skills[i] + ": " + getSkillStatus(skills[i]));
    i++;
}

let check = 1;
do {
    console.log("Portfolio loaded.");
    check++;
} while (check <= 1);

console.log(portfolioMessage(developerName));
console.log(getSemesterMessage(currentSemester));



const availability = document.getElementById("availability");
const availabilityText = document.getElementById("availability-text");

const today = new Date().getDay();

if (today === 0) {
    availability.classList.add("sunday");
    availabilityText.textContent = "Not available today";
} else {
    availability.classList.remove("sunday");
    availabilityText.textContent = "Available for work";
}
/* =========================================
   GRAPHIC DESIGN LIGHTBOX
   ========================================= */

function openDesign(imageSrc) {

    const lightbox =
        document.getElementById("designLightbox");

    const lightboxImage =
        document.getElementById("designLightboxImage");

    lightboxImage.src = imageSrc;

    lightbox.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeDesign(event) {

    const lightbox =
        document.getElementById("designLightbox");

    const lightboxImage =
        document.getElementById("designLightboxImage");

    /*
        Agar user actual image par click kare,
        lightbox close nahi hoga.
    */

    if (
        event &&
        event.target === lightboxImage
    ) {
        return;
    }

    lightbox.classList.remove("show");

    lightboxImage.src = "";

    document.body.style.overflow = "";
}


/* ESC key */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeDesign();

    }

});