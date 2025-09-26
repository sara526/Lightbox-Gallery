let lightBoxContainer = document.querySelector('.light-box-container');
let lightBoxItem = document.querySelector('.light-box-item');
let imageItem = Array.from(document.querySelectorAll('.item img'));
let currentSlide = 0;
let prevBtn = document.getElementById('prevBtn'); 
let closeBtn = document.getElementById('closeBtn');
let nextBtn = document.getElementById('nextBtn');

for (let i = 0; i < imageItem.length; i++) {
    imageItem[i].addEventListener('click', function(e) {
        let imageSrc = e.target.getAttribute('src');
        currentSlide =imageItem.indexOf(e.target);
        console.log(currentSlide);
        lightBoxItem.style.backgroundImage = `url(${imageSrc})`;
        lightBoxContainer.classList.replace('d-none', 'd-flex');
    })
}
 function nextSlide() {
    currentSlide++;
    if (currentSlide == imageItem.length) {
        currentSlide = 0;
    }    
    let imageSrc = imageItem[currentSlide].getAttribute('src');
    lightBoxItem.style.backgroundImage = `url(${imageSrc})`;
 }

 function prevSlide(){
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = imageItem.length-1;
    }
    let imageSrc = imageItem[currentSlide].getAttribute('src');
    lightBoxItem.style.backgroundImage = `url(${imageSrc})`;
 }

 nextBtn.addEventListener('click',nextSlide);
 prevBtn.addEventListener('click',prevSlide);
 closeBtn.addEventListener('click', function(){
    lightBoxContainer.classList.replace('d-flex','d-none');
 });



