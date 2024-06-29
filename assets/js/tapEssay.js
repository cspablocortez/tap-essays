document.addEventListener('DOMContentLoaded', () => {
    const containerDiv = document.querySelector('.container');
    const paragraphs = containerDiv.getElementsByTagName('p');

    const animationList = ['animate__bounceInUp', 'animate__fadeInRight', 'animate__fadeInTopLeft', 'animate__flipInX', 'animate__jackInTheBox', 'animate__zoomIn'];

    let pIndex = 0; // paragraph index

    containerDiv.addEventListener('click', () => {
        // Hide all paragraphs first
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.display = 'none';
        }


        // Show the current paragraph
        if (pIndex < paragraphs.length) {
            paragraphs[pIndex].style.display = 'block';

            // Pick a random class from animationList
            const randomIndex = Math.floor(Math.random() * animationList.length);

            paragraphs[pIndex].classList.add(animationList[randomIndex]);
            pIndex++;
        }

        // Reset the index if it reaches the end
        if (pIndex >= paragraphs.length) {
            pIndex = 0;
        }

    });
});