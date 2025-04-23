document.addEventListener("DOMContentLoaded", function() {
    const slides = document.getElementById('slides');
    const originalSlides = Array.from(slides.children);
    
    const slides4 = document.getElementById('slider4');
    const originalSlides4 = Array.from(slides4.children); 
    const totalSlides4 = originalSlides4.length; 

    originalSlides4.forEach(slide4 => {
        const clone4 = slide4.cloneNode(true);
        slides4.appendChild(clone4);
    });

    let currentIndex4 = 0;

    const updateSlidePosition4 = () => {
        slides4.style.transform = `translateX(${-currentIndex4 * (100 / Math.min(totalSlides4, 4))}%)`; 
        document.querySelector('.counter').textContent = `${Math.min(currentIndex4 + 1, totalSlides4)}/${totalSlides4}`;
    };

    updateSlidePosition4();

    document.querySelector('.next').addEventListener('click', function() {
        if (currentIndex4 < totalSlides4 - 1) {
            currentIndex4++;
        }
        updateSlidePosition4();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        if (currentIndex4 > 0) {
            currentIndex4--;
        }
        updateSlidePosition4();
    });

    while (slides.firstChild) {
        slides.removeChild(slides.firstChild);
    }

    originalSlides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slides.appendChild(clone);
    });

    originalSlides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slides.appendChild(clone);
    });

    const totalSlides = originalSlides.length * 2; 
    let currentIndex = 0;

    const updateSlidePosition = () => {
        slides.style.transform = `translateX(${-currentIndex * (100 / totalSlides)}%)`;
    };

    updateSlidePosition(); 

    document.querySelector('.next1').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    });

    document.querySelector('.prev1').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 );
        updateSlidePosition();
    });
});