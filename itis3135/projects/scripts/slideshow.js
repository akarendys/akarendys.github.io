let slideIndex = 1;

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content');

    // Clear the cloned slides from the modal
    modalContent.innerHTML = '';

    // Hide the modal
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

    modalContent.innerHTML = ''; // Clear existing slides

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';

    // Clone slides for the modal
    const cloneSlides = slides[slideIndex - 1].cloneNode(true);
    modalContent.appendChild(cloneSlides);
}


// Call showSlides with initial value
showSlides(1);

// Add event listener to close the modal when clicking outside the image
window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Add event listener to close the modal when clicking on the close button
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
    closeModal();
});
