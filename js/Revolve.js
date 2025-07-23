//underline-hoveer logic 
const links = document.querySelectorAll('.underline-hover');

function toggleUnderline(event) {
    event.type === 'mouseenter' ? this.style.textDecoration = "underline" : this.style.textDecoration = "none";
}

links.forEach(link => {
    link.addEventListener('mouseenter', toggleUnderline);
    link.addEventListener('mouseleave', toggleUnderline);
});


// Modal - add <div id="BlurElement"> everything you want to be blurred <div>, add css: 
const header = document.getElementById('header');
const BlurElement = document.getElementById('BlurElement');
var ActiveModal;

//addEventListener
document.querySelectorAll('.modal-image').forEach(image => {
    image.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            SetActiveModal(modal);
        }
    });
});

// Function to set and show the active modal
function SetActiveModal(modal) {
    ActiveModal = modal;
    ActiveModal.showModal();
    document.body.style.overflow = 'hidden'; 

    // Ensure fade-in happens smoothly
    requestAnimationFrame(() => {
        ActiveModal.classList.remove('Modalfade'); // Ensure it's visible
        BlurElement.classList.add('BlurActive');
        header.classList.add('BlurActive');
    });
}

// Function to close the currently active modal
function CloseActiveModal() {
    // Start fading out both the modal and blur
    BlurElement.classList.remove('BlurActive');
    header.classList.remove('BlurActive');
    ActiveModal.classList.add('Modalfade');  // Fades out the modal

    
    // Wait for the fade-out transition to end before closing the dialog
    const handleTransitionEnd = () => {
        ActiveModal.scrollTop = 0;
        ActiveModal.close();  // Close the dialog after fade-out completes
        ActiveModal.removeEventListener('transitionend', handleTransitionEnd); // Cleanup
    };

    ActiveModal.addEventListener('transitionend', handleTransitionEnd);
    document.body.style.overflow = ''; 
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        CloseActiveModal();
    }
})

window.addEventListener('click', (event) => {
    if (event.target === ActiveModal) {
        CloseActiveModal();
    }
})