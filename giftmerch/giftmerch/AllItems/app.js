function changeImage(event, button, direction) {
    const images = button.parentNode.querySelectorAll('.product-image');
    let currentImageIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
}
document.addEventListener('click', function() {
    closeAllMenus();
});

function setActive(element) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.submenu').style.display = 'none';
    });
    element.classList.add('active');
    element.querySelector('.submenu').style.display = 'block';

    // Изменяем цвет и ширину линии над меню
    const line = document.getElementById('topLine');
    const itemRect = element.getBoundingClientRect();
    const menuRect = document.querySelector('.menu').getBoundingClientRect();
    
    line.style.width = `${itemRect.width}px`;
    line.style.marginLeft = `${itemRect.left - menuRect.left}px`;
    line.style.backgroundColor = 'black';

    // Устанавливаем ширину подменю равной ширине вкладки
    const submenu = element.querySelector('.submenu');
    submenu.style.width = `${itemRect.width}px`;
}

function closeAllMenus() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.submenu').style.display = 'none';
    });
    const line = document.getElementById('topLine');
    line.style.backgroundColor = 'gray';
}
