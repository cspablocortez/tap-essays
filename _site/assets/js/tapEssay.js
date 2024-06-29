document.addEventListener('DOMContentLoaded', () => {
    const containerDiv = document.querySelector('.container');
    const paragraphs = containerDiv.getElementsByTagName('p');
    let currentIndex = 0;

    containerDiv.addEventListener('click', () => {
        // Hide all paragraphs first
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.display = 'none';
        }

        // Show the current paragraph
        if (currentIndex < paragraphs.length) {
            paragraphs[currentIndex].style.display = 'block';
            paragraphs[currentIndex].classList.add('animate__fadeInRight');
            currentIndex++;
        }

        // Reset the index if it reaches the end
        if (currentIndex >= paragraphs.length) {
            currentIndex = 0;
        }

    });
});