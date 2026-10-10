
// Qazi Asmat Kamal | Portfolio JavaScript

// Portfolio owner ka naam.
let developerName = "Qazi Asmat Kamal";

// Current semester.
let currentSemester = 1;

// Portfolio skills ki list.
let skills = ["HTML", "CSS", "JavaScript", "Bootstrap", "Canva Pro"];

// Portfolio projects ki list.
let projects = [
    ["HomeNest Furniture", "Furniture Website"],
    ["Nature Gallery", "Gallery Website"]
];

// Welcome message return karne wala function.
function portfolioMessage(name) {
    if (name === developerName) {
        return "Welcome to " + name + "'s portfolio.";
    } else {
        return "Welcome to the portfolio.";
    }
}

// Har skill ka status batane wala function.
function getSkillStatus(skill) {
    if (skill === "HTML" || skill === "CSS") {
        return "Completed";
    } else if (skill === "JavaScript") {
        return "Fundamentals completed";
    } else if (skill === "Bootstrap") {
        return "Currently learning";
    } else if (skill === "Canva Pro") {
        return "Graphic design";
    } else {
        return "Coming later";
    }
}

// Semester ke mutabiq message return karta hai.
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

// For loop se projects console mein show karo.
for (let i = 0; i < projects.length; i++) {
    console.log("Project " + (i + 1) + ": " + projects[i][0]);
}

// While loop se har skill ka status check karo.
let skillIndex = 0;

while (skillIndex < skills.length) {
    console.log(
        skills[skillIndex] + ": " + getSkillStatus(skills[skillIndex])
    );

    skillIndex++;
}

// Do-while loop kam az kam ek baar chalta hai.
let loadCheck = 1;

do {
    console.log("Portfolio loaded.");
    loadCheck++;
} while (loadCheck <= 1);

// Welcome aur semester messages console mein show karo.
console.log(portfolioMessage(developerName));
console.log(getSemesterMessage(currentSemester));

// HTML load hone ke baad availability update karo.
document.addEventListener("DOMContentLoaded", function () {
    const availability = document.getElementById("availability");
    const availabilityText = document.getElementById("availability-text");

    // Check karo ke required HTML elements mojood hain.
    if (availability && availabilityText) {
        // Sunday ka number 0 hota hai.
        const today = new Date().getDay();

        if (today === 0) {
            availability.classList.add("sunday");
            availabilityText.textContent = "Not available today";
        } else {
            availability.classList.remove("sunday");
            availabilityText.textContent = "Available for work";
        }
    }
});

// Graphic-design image ko full screen lightbox mein kholo.
function openDesign(imageSrc) {
    const lightbox = document.getElementById("designLightbox");
    const lightboxImage = document.getElementById("designLightboxImage");

    // Elements na milne par error se bachao.
    if (!lightbox || !lightboxImage) return;

    // Selected image show karo.
    lightboxImage.src = imageSrc;
    lightbox.classList.add("show");

    // Background page ki scrolling rok do.
    document.body.style.overflow = "hidden";
}

// Lightbox ko band karne wala function.
function closeDesign(event) {
    const lightbox = document.getElementById("designLightbox");
    const lightboxImage = document.getElementById("designLightboxImage");

    // Elements na hon to function rok do.
    if (!lightbox || !lightboxImage) return;

    // Image par click karne se lightbox band na ho.
    if (event && event.target === lightboxImage) return;

    // Lightbox hide karo aur scrolling restore karo.
    lightbox.classList.remove("show");
    lightboxImage.removeAttribute("src");
    document.body.style.overflow = "";
}

// Escape key dabane se lightbox band karo.
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeDesign();
    }
});
