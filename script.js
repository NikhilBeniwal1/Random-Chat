const images = [
    'images/play.jpg',
    'images/profilescreen.jpeg',
    'images/draweroptions.jpeg',
    'images/aboutus.jpeg',
    'images/homescreen.jpeg',
    'images/splashscreen.jpeg',
    
];
let currentImageIndex = 0;
const carouselImage = document.getElementById('carouselImage');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carouselImage.src = images[currentImageIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds
