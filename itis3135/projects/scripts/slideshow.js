let slideIndex = 1;

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content');

    modalContent.innerHTML = '';

    modal.style.display = 'none';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName('mySlides');
    const modalContent = document.querySelector('.modal-content');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    modalContent.innerHTML = '';

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';

    const cloneSlides = slides[slideIndex - 1].cloneNode(true);
    modalContent.appendChild(cloneSlides);
}


showSlides(1);

window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
});

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
    closeModal();
});
