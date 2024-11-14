
const item = document.querySelectorAll('.item');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

 // Add click event to all images
 item.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        modal.style.display = "block";
        modalImg.src = img.src;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
});
   // Close modal when clicking the close button
   closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; // Restore scrolling
});
 // Close modal when clicking outside the modal content
 window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
});

// Add click events to booking buttons
const bookButtons = document.querySelectorAll('.book-button');
bookButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Booking system integration will be implemented here');
    });
});
