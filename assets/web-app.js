const leftSlide = document.querySelectorAll('#hero-banner .left .slide');
const rightSlide = document.querySelectorAll('#hero-banner .right .slide');

const leftHeading = document.querySelectorAll('#hero-banner .left .heading');
const rightHeading = document.querySelectorAll('#hero-banner .right .heading');

leftHeading.forEach(left => {
    left.addEventListener('click', ()=>{
        for(let i = 0; i < leftSlide.length; i++){
            leftSlide[i].classList.remove('active');
        }
        left.parentElement.classList.add('active');
    });
});

rightHeading.forEach(right => {
    right.addEventListener('click', ()=>{
        for(let i = 0; i < rightSlide.length; i++){
            rightSlide[i].classList.remove('active');
        }
        right.parentElement.classList.add('active');
    });
});