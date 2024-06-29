document.addEventListener('DOMContentLoaded', () => {
    const containerDiv = document.querySelector('.container');
    const paragraphs = containerDiv.getElementsByTagName('p');

    const animationList = ['animate__bounceInUp', 'animate__fadeInRight', 'animate__fadeInTopLeft', 'animate__flipInX', 'animate__jackInTheBox', 'animate__zoomIn'];

    let currentIndex = 0;

    containerDiv.addEventListener('click', () => {
        // Hide all paragraphs first
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.display = 'none';
        }

        // Show the current paragraph
        if (currentIndex < paragraphs.length) {
            paragraphs[currentIndex].style.display = 'block';

            // Pick a random class from animationList
            const randomIndex = Math.floor(Math.random() * animationList.length);

            paragraphs[currentIndex].classList.add(animationList[randomIndex]);
            currentIndex++;
        }

        // Reset the index if it reaches the end
        if (currentIndex >= paragraphs.length) {
            currentIndex = 0;
        }

    });
});