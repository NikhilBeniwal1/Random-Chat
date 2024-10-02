const images = [
    'images/play store graphic reprsentiion.jpg',
    'images/profile screen.jpeg',
    'images/drawer options.jpeg',
    'images/about us.jpeg',
    'images/home screen.jpeg',
    'images/splash screen.jpeg',
    
];
let currentImageIndex = 0;
const carouselImage = document.getElementById('carouselImage');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carouselImage.src = images[currentImageIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds
