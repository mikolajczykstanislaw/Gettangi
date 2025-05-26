document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('cardContainer');
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    
    // Scroll amount for each button click (width of one card + gap)
    const scrollAmount = 320; // 300px card width + 20px gap
    
    // Left button click handler
    leftBtn.addEventListener('click', function() {
        cardContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Right button click handler
    rightBtn.addEventListener('click', function() {
        cardContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Update button states based on scroll position
    function updateButtonStates() {
        // Check if scrolled to the start
        if (cardContainer.scrollLeft <= 0) {
            leftBtn.style.opacity = '0.5';
        } else {
            leftBtn.style.opacity = '1';
        }
        
        // Check if scrolled to the end
        const maxScrollLeft = cardContainer.scrollWidth - cardContainer.clientWidth;
        if (cardContainer.scrollLeft >= maxScrollLeft - 10) { // 10px tolerance
            rightBtn.style.opacity = '0.5';
        } else {
            rightBtn.style.opacity = '1';
        }
    }
    
    // Listen for scroll events to update button states
    cardContainer.addEventListener('scroll', updateButtonStates);
    
    // Initialize button states
    updateButtonStates();
    
    // Make video placeholders clickable
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            alert('Video would play here in a real implementation');
        });
        placeholder.style.cursor = 'pointer';
    });
});