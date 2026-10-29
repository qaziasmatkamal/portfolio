// Qazi Asmat Kamal | Portfolio JavaScript


/* ==========================================================
   PART 1: PRACTICE CODE
   These lines only print to the browser console (press F12).
   They are kept as JavaScript practice: variables, arrays,
   functions, if/else, switch and loops.
========================================================== */

// Portfolio owner ka naam.
let developerName = "Qazi Asmat Kamal";

// Current semester.
let currentSemester = 1;

// Portfolio skills ki list.
let skills = ["HTML", "CSS", "JavaScript", "Bootstrap", "Canva Pro", "Git & GitHub"];

// Portfolio projects ki list.
let projects = [
    ["HomeNest Furniture", "Furniture Website"],
    ["MediNova Hospital", "Hospital Website"]
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
    if (skill === "HTML" || skill === "CSS" || skill === "Bootstrap") {
        return "Completed";
    } else if (skill === "JavaScript") {
        return "Fundamentals completed";
    } else if (skill === "Canva Pro") {
        return "Graphic design";
    } else if (skill === "Git & GitHub") {
        return "Currently learning";
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


/* ==========================================================
   PART 2: AVAILABILITY BADGE
   Shows "Not available today" on Sundays, otherwise
   "Available for work".
========================================================== */

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


/* ==========================================================
   PART 3: NAVIGATION
   - Highlights the link of the section you are viewing.
   - Closes the mobile menu after you tap a link.
========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = Array.from(document.querySelectorAll(".navbar .nav-link"));
    const menu = document.getElementById("mainNav");

    // Highlight the link that matches the section in view.
    function setActiveLink(id) {
        navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
        });
    }

    const sections = navLinks
        .map(function (link) { return document.querySelector(link.getAttribute("href")); })
        .filter(Boolean);

    if ("IntersectionObserver" in window) {
        // A thin band across the middle of the screen decides the current section.
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) setActiveLink(entry.target.id);
            });
        }, { rootMargin: "-45% 0px -50% 0px" });

        sections.forEach(function (section) { observer.observe(section); });
    }

    // At the very bottom of the page, Contact is always the active link.
    window.addEventListener("scroll", function () {
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        if (atBottom) setActiveLink("contact");
    }, { passive: true });

    // Close the hamburger menu after choosing a link (small screens).
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (menu && menu.classList.contains("show") && window.bootstrap) {
                window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });
});


/* ==========================================================
   PART 4: GRAPHIC DESIGN LIGHTBOX
   Click a design to see it full size.
   Close: X button, click outside the image, or Esc.
   Browse: arrow buttons, Left/Right keys, or swipe.
========================================================== */

const lightbox = document.getElementById("designLightbox");
const lightboxImage = document.getElementById("designLightboxImage");
const lightboxCaption = document.getElementById("designLightboxCaption");
const designThumbs = Array.from(document.querySelectorAll(".design-thumb"));

let currentDesign = 0;      // index of the design being shown
let lastFocused = null;     // element to focus again when the lightbox closes
let touchStartX = 0;        // where a swipe started

// Show the design at a given position (loops around at both ends).
function showDesign(index) {
    if (!lightbox || !lightboxImage || designThumbs.length === 0) return;

    currentDesign = (index + designThumbs.length) % designThumbs.length;

    const thumb = designThumbs[currentDesign];
    lightboxImage.src = thumb.dataset.full;
    lightboxImage.alt = thumb.querySelector("img").alt;
    lightboxCaption.textContent =
        thumb.dataset.title + " (" + (currentDesign + 1) + " of " + designThumbs.length + ")";

    // Load the neighbouring designs in the background so browsing feels instant.
    [currentDesign - 1, currentDesign + 1].forEach(function (i) {
        const next = designThumbs[(i + designThumbs.length) % designThumbs.length];
        new Image().src = next.dataset.full;
    });
}

// Open the lightbox on the chosen design.
function openDesign(index) {
    if (!lightbox) return;

    lastFocused = document.activeElement;
    showDesign(index);

    lightbox.classList.add("show");
    lightbox.setAttribute("aria-hidden", "false");

    // Background page ki scrolling rok do.
    document.body.style.overflow = "hidden";

    lightbox.querySelector(".lb-close").focus();
}

// Close the lightbox and give focus back to the design that was clicked.
function closeDesign() {
    if (!lightbox) return;

    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocused) lastFocused.focus();
}

function lightboxIsOpen() {
    return lightbox && lightbox.classList.contains("show");
}

if (lightbox) {
    // Open: click on any design thumbnail.
    designThumbs.forEach(function (thumb, index) {
        thumb.addEventListener("click", function () { openDesign(index); });
    });

    // Buttons inside the lightbox.
    lightbox.querySelector(".lb-close").addEventListener("click", closeDesign);
    lightbox.querySelector(".lb-prev").addEventListener("click", function () { showDesign(currentDesign - 1); });
    lightbox.querySelector(".lb-next").addEventListener("click", function () { showDesign(currentDesign + 1); });

    // Click on the dark background (not on the image) closes it.
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) closeDesign();
    });

    // Swipe left/right on touch screens.
    lightbox.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    lightbox.addEventListener("touchend", function (event) {
        const distance = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(distance) > 50) {
            showDesign(distance > 0 ? currentDesign - 1 : currentDesign + 1);
        }
    }, { passive: true });
}

// Keyboard: Esc closes, arrows browse, Tab stays inside the lightbox.
document.addEventListener("keydown", function (event) {
    if (!lightboxIsOpen()) return;

    if (event.key === "Escape") {
        closeDesign();
    } else if (event.key === "ArrowLeft") {
        showDesign(currentDesign - 1);
    } else if (event.key === "ArrowRight") {
        showDesign(currentDesign + 1);
    } else if (event.key === "Tab") {
        const buttons = Array.from(lightbox.querySelectorAll("button"));
        const first = buttons[0];
        const last = buttons[buttons.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
});
