document.addEventListener('DOMContentLoaded', () => {
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Array of image filenames
    const body = document.body;
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        body.style.backgroundImage = `url('${images[currentImageIndex]}')`; // Set the background image
        body.style.backgroundSize = 'cover'; // Ensure the image covers the whole body
        body.style.backgroundPosition = 'center'; // Center the image
        body.style.transition = 'background-image 1s ease-in-out'; // Smooth transition effect
        currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through the images
    }

    // Initial call to set the first background image
    changeBackgroundImage(); 

    // Change background image every 6 seconds
    setInterval(changeBackgroundImage, 6000);
});

// JavaScript for Read More/Read Less Button
document.getElementById('read-more-btn')?.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    const moreInfo = document.getElementById('more-info');
    const button = event.currentTarget;

    if (moreInfo.style.display === 'none' || !moreInfo.style.display) {
        moreInfo.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        moreInfo.style.display = 'none';
        button.textContent = 'Read More';
    }
});
