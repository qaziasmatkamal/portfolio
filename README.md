# Qazi Asmat Kamal | Portfolio

Personal portfolio of a beginner web developer and graphic designer.
Built with HTML, CSS, JavaScript and Bootstrap 5.

## Sections

Home, About, Skills, Graphic Design, Web Projects, Services, Journey and Contact.

## Folder structure

```
Qazi_Asmat_Kamal_Portfolio/
├── index.html      page content
├── style.css       all styling
├── script.js       interactions
├── files/          Qazi_Asmat_Kamal_CV.pdf
└── images/
    ├── profile.jpg
    ├── designs/          full-size designs (shown in the lightbox)
    │   └── thumbs/       small versions (shown on the cards)
    └── projects/         web project preview images
```

Keep this structure when you upload to GitHub, because the paths in `index.html` depend on it.

## How to run

Open `index.html` in a browser. An internet connection is needed for Bootstrap, Font Awesome and Google Fonts.

## How to publish (GitHub Pages)

1. Upload the **contents** of this folder to a GitHub repository (so `index.html` is in the root).
2. Repository **Settings → Pages**.
3. Source: *Deploy from a branch*, branch `main`, folder `/ (root)`, then Save.
4. After a minute the live link appears on the same page.

## What changed in this version

- **Mobile menu:** a real Bootstrap hamburger menu replaces the wrapped link row.
- **Active link:** the navigation highlights the section you are viewing.
- **Graphic Design:** 4 cards per row, each design has its own name and description, and every card shows the whole design (not a cropped strip). Click a design to open it full size, then browse with the arrows, keyboard or swipe.
- **Skills:** status labels (Completed / Learning now) replace percentage bars.
- **Web Projects:** both cards line up, and each has a *Source code* link next to *View live project*.
- **Services:** the *Website Redesign* card was removed because there is no redesign sample yet. Add it back when you have one.
- **Journey:** numbered steps are kept here because this section is a real sequence.
- **Images:** about 14 MB of images were resized and compressed to about 2 MB, so the site loads much faster. File names no longer contain spaces.
- **Code:** duplicate and conflicting CSS rules were removed, and the old `margin-left: 160px` style hacks are gone. Accessibility was added (skip link, focus outlines, button labels, reduced-motion support).
- **Fixes:** the stray `>` character and the space inside the MediNova link were removed.

## How to add a new design

1. Save the full image in `images/designs/` and a smaller 4:5 version (about 640×800) in `images/designs/thumbs/`.
2. Copy one `<div class="col-sm-6 col-lg-3"> ... </div>` block inside the Graphic Design section.
3. Change `data-full`, `data-title`, the thumbnail `src`, the `alt` text, the title and the description.

The lightbox picks up the new card automatically.

## How to add a new web project

Copy one `<div class="col-lg-6"> ... </div>` block in the Web Projects section and change the image, text and links.

## Main parts explained

### HTML (`index.html`)
- `<nav class="navbar navbar-expand-lg">` is Bootstrap's navbar. `navbar-toggler` and `collapse navbar-collapse` create the mobile menu.
- `<section id="...">` blocks are the page sections. Navigation links such as `href="#about"` jump to the matching `id`.
- `class="row g-4"` and `class="col-sm-6 col-lg-3"` are the Bootstrap grid: 1 column on phones, 2 on tablets, 4 on large screens.
- `.design-thumb` is a `<button>`, so designs can be opened with the keyboard as well as the mouse.
- `data-full` and `data-title` store the big image path and the caption for the lightbox.
- `alt` text describes each image for screen readers.

### CSS (`style.css`)
- `:root { --a: #d2ff3f; }` stores reusable colours. Change `--a` to change the accent colour everywhere.
- `aspect-ratio: 4 / 5` keeps all design thumbnails the same shape.
- `object-fit: cover` crops an image to fill its box without stretching it.
- `scroll-padding-top` stops the sticky header from covering a section title after a jump.
- `@media (max-width: ...)` rules adjust the layout for tablets and phones.
- `@media (prefers-reduced-motion: reduce)` turns animations off for people who prefer that.

### JavaScript (`script.js`)
- **Part 1** is console practice code (variables, arrays, functions, loops). It does not change the page.
- **Part 2** changes the availability badge on Sundays using `new Date().getDay()`.
- **Part 3** highlights the current section in the navigation with `IntersectionObserver` and closes the mobile menu after a tap.
- **Part 4** runs the lightbox: `openDesign(index)`, `closeDesign()` and `showDesign(index)`.

## Before publishing

1. Open every section on a phone-sized screen and on a desktop.
2. Click each design, then try the arrows, Esc key and the X button.
3. Test the *Download CV* button and every link in Web Projects and Contact.
4. The *Source code* links assume the repositories are named `medinova-hospital-website` and `HomeNest`. Change them if your repository names are different.
5. The designs are concept work. Only call something client work if it really was made for a client.
