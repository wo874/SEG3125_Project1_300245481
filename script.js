// Get the lightbox and its components
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-image');

// Open the lightbox when an image is clicked
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = image.src;
        captionText.innerHTML = image.alt;
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});