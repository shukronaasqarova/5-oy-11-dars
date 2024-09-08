document.addEventListener("DOMContentLoaded", function() {
    const photoContainer = document.getElementById('photo-container');
    const loader = document.getElementById('loader');

    // Function to create a card
    function createCard(photo) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const image = document.createElement('img');
        image.src = photo.thumbnailUrl;
        
        const title = document.createElement('h3');
        title.textContent = photo.title;
        
        card.appendChild(image);
        card.appendChild(title);
        return card;
    }

    // Fetch data from API
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=12')
        .then(response => response.json())
        .then(photos => {
            loader.style.display = 'none'; // Hide loader when data is loaded
            photos.forEach(photo => {
                const card = createCard(photo);
                photoContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            loader.textContent = 'Failed to load photos';
        });
});