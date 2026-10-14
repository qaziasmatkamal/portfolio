# Qazi Asmat Kamal — Portfolio

## What's updated
- Kept the original dark/navy + neon-green portfolio theme.
- Fixed graphic-design image paths so they match the actual filenames in `images/`.
- Added the second logo, social post, and product-ad concept cards.
- Added a **Download CV** button in the Home section. It downloads `files/Qazi_Asmat_Kamal_CV.pdf`.
- Graphic designs are described as personal/concept work, not fake client work.

## How to run
Open `index.html` in a browser. For publishing, upload the contents of this folder to your GitHub repository. Keep `images/`, `files/`, `index.html`, `style.css`, and `script.js` in their current relative locations.

## HTML — explanation of the main lines/blocks
- `<!DOCTYPE html>` tells the browser to use modern HTML.
- `<html lang="en">` starts the page and identifies its language.
- `<head>` contains page settings, title, CSS links, and icon library link; it does not display the portfolio content itself.
- `<meta charset="UTF-8">` enables standard characters and symbols.
- `<meta name="viewport" ...>` makes the page adapt to mobile screen width.
- `<title>...</title>` sets the browser tab title.
- Bootstrap `<link>` loads the Bootstrap CSS framework from its CDN.
- `<link rel="stylesheet" href="style.css">` loads your own design rules.
- Font Awesome `<link>` loads the icons used for social links and the download button.
- `<body>` begins all visible page content.
- `<header>` contains the top navigation.
- `.container` centers content and limits its width.
- `<a href="#home">` jumps to the section whose `id="home"`. Other navigation links work the same way for their matching section IDs.
- `<main>` groups the main portfolio content.
- `<section id="home">` is the hero/intro section. Its heading introduces you; the buttons link to work, contact, and your downloadable CV.
- `<a href="files/Qazi_Asmat_Kamal_CV.pdf" download>` points to the CV file. The `download` attribute asks the browser to download it instead of navigating to it.
- `<img src="images/profile.jpg" ...>` loads your profile photo; `alt` describes the image for accessibility.
- `<section id="about">` contains your introduction and current learning status.
- `<section id="skills">` contains skill cards. Each `<article>` is one skill card; `.bar` and its inline width style show the decorative progress bar.
- The Graphic Design section uses `.design-card` for each design. Each image opens the lightbox through `onclick="openDesign('...')"`; make sure the path inside `openDesign()` matches the image path in `src`.
- The lightbox `<div id="designLightbox">` is the overlay used to view a design larger. The close button calls `closeDesign()`.
- The Web Projects section contains HomeNest and Nature Gallery cards. Each live-project `<a>` opens the deployed website.
- The Services section lists the types of work you can offer.
- The Journey section summarizes completed topics and the topic currently being learned.
- The Contact section contains email, GitHub, LinkedIn, WhatsApp, Instagram, and Facebook links. Replace these URLs if your accounts change.
- `<footer>` displays the copyright/name line at the bottom.
- The Bootstrap `<script>` loads Bootstrap's JavaScript bundle; the final `<script src="script.js">` loads your own JavaScript.

## CSS — explanation of common line types
- `/* ... */` is a comment; the browser ignores it. It labels a section or explains a rule.
- `:root { --bg: ...; }` defines reusable CSS variables. For example, `var(--bg)` reuses the background color without repeating its hex value.
- `* { box-sizing: border-box; }` makes width/height calculations include padding and borders.
- `margin` controls outside spacing; `padding` controls inside spacing.
- `color` sets text color; `background`/`background-color` sets the background.
- `font-size`, `font-weight`, and `line-height` control text size, boldness, and line spacing.
- `display: flex` arranges children in a flexible row/column; `align-items` aligns them on the cross-axis; `justify-content` distributes space along the main axis.
- `display: grid` creates a grid layout; `grid-template-columns` controls its columns.
- `gap` sets spacing between flex/grid items.
- `width: min(92%, var(--max))` uses the smaller of 92% width or the maximum width variable.
- `position: sticky; top: 0` keeps the navigation near the top while scrolling.
- `transition` smooths property changes; `:hover` rules apply while the pointer is over an element.
- `border-radius` rounds corners; `box-shadow` creates a shadow/glow; `object-fit: cover` crops an image neatly inside its box.
- `@media (...)` contains responsive rules that apply at particular screen widths.
- The added `.download-cv` rules align the download icon and text, and highlight the button on hover.

## JavaScript — line-by-line concepts
- `let developerName = ...` stores the portfolio owner's name in a variable.
- `let currentSemester = 1` stores a number for the current semester value used by the demo message.
- `let skills = [...]` stores skill names in an array.
- `let projects = [[...], [...]]` stores project data in a two-dimensional array; each inner array contains a project name and type.
- `function portfolioMessage(name)` defines a reusable function with a `name` parameter.
- `if (...) { ... } else { ... }` chooses a message based on whether the supplied name matches the saved name.
- `return` sends a value back from a function.
- `function getSkillStatus(skill)` returns different status text using `if / else if`.
- `switch (semester)` selects a message based on a specific value; `case` names a matching value and `default` is the fallback.
- `for (let i = 0; i < projects.length; i++)` loops through the projects array; `i++` increases the index after each pass.
- `console.log(...)` prints debugging/practice output in the browser developer console; it does not add text to the visible webpage.
- `while (skillIndex < skills.length)` repeats while the condition is true. The `skillIndex++` line prevents an endless loop by moving to the next skill.
- `do { ... } while (...)` runs the block once before checking its condition.
- `document.addEventListener("DOMContentLoaded", ...)` waits until the HTML has been parsed before looking up page elements.
- `document.getElementById(...)` finds an element by its unique `id`.
- `if (availability && availabilityText)` checks that both elements exist before changing them.
- `new Date().getDay()` returns the weekday number; Sunday is `0`.
- `classList.add()` and `classList.remove()` add/remove a CSS class to change the availability badge style.
- `textContent` changes the text shown inside an element.
- `function openDesign(imageSrc)` receives an image path, sets it on the lightbox image, adds the `show` class, and prevents the page behind it from scrolling.
- `function closeDesign(event)` removes the `show` class, clears the image source, and restores scrolling.
- `if (event && event.target === lightboxImage) return;` prevents a click directly on the preview image from closing the overlay.
- `document.addEventListener("keydown", ...)` listens for keyboard presses; pressing `Escape` closes the lightbox.

## Before publishing
1. Test the Download CV button locally.
2. Test every graphic-design image by clicking it.
3. Keep the folder structure unchanged when uploading to GitHub Pages.
4. The sample designs are marked as concept work; only call something client work if it really was made for a client.
