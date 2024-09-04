document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const leftControl = document.querySelector('.carousel-control.left');
    const rightControl = document.querySelector('.carousel-control.right');
    const itemWidth = document.querySelector('.card').offsetWidth;

    let index = 0;

    function showSlide(slideIndex) {
        const items = document.querySelectorAll('.carousel-item');
        if (slideIndex >= items.length) index = 0;
        else if (slideIndex < 0) index = items.length - 1;
        else index = slideIndex;

        items.forEach((item, i) => {
            item.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    rightControl.addEventListener('click', () => {
        showSlide(index + 1);
    });

    leftControl.addEventListener('click', () => {
        showSlide(index - 1);
    });

    showSlide(index);
});
