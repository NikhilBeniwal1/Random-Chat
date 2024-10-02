const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg'
];
let currentImageIndex = 0;
const carouselImage = document.getElementById('carouselImage');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carouselImage.src = images[currentImageIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds
