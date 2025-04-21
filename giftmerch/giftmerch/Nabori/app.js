function changeImage(event, button, direction) {
    const images = button.parentNode.querySelectorAll('.product-image');
    let currentImageIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
}