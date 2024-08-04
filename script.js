// Image Slideshow
const images = [
    'memes/misoor_p1.png',
    'memes/misoor_p1.png',
    'memes/misoor_p2.png',
    'memes/misoor_p3.png',
    'memes/misoor_p4.png',
    'memes/misoor_p5.png',
    'memes/misoor_p6.png',
    'memes/misoor_p7.jpg',
];
let currentImageIndex = 0;
const slideshow = document.getElementById('slideshow');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideshow.src = images[currentImageIndex];
}

setInterval(changeImage, 2000); // Change image every 5 seconds

// Hamburger Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

function copyToClipboard() {
    var copyText = document.getElementById("ca-textbox");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
