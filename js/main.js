document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.querySelector('.flip-card');
    const flipCardTexts = document.querySelector('.flip-card-texts');
    const toplayout = document.querySelector('.toplayout');
    const toplayoutBackground = document.querySelector('.toplayoutBackground');

    let isFlipped = false; 
    let isFlipping = false;

    const CreditsLink = document.getElementById('CreditsLink');

    const header = document.getElementById('header');
    const BlurElement = document.getElementById('BlurElement');

    const RevolveImage = document.getElementById('RevolveImage');
    const ModalImage = document.getElementById('ModalImage');

    const GnGImage = document.getElementById('GnGImage');
    const GnGModal = document.getElementById('GnGModal');

    const CreditsModal = document.getElementById('CreditsModal');
    
    var ActiveModal;

    
    //FlipCard
    flipCard.addEventListener('click', function() {

        if(!isFlipping) {
            isFlipping = true;
            isFlipped = !isFlipped;
            
            if(isFlipped) {
                toplayout.classList.add('cursorhk');
                toplayoutBackground.classList.add('cursorhk');
            } 
            else {
                toplayout.classList.remove('cursorhk');
                toplayoutBackground.classList.remove('cursorhk');

            }
            
            flipCard.classList.toggle('flipped');
            flipCardTexts.classList.toggle('flipped');
            
            setTimeout(() => {
                isFlipping = false;
            }, 500);
    }
});



//Modals
RevolveImage.addEventListener('click', function() {
    RevolveModal.showModal();
    SetActiveModal(RevolveModal);
})

GnGImage.addEventListener('click', function() {
    GnGModal.showModal();
    SetActiveModal(GnGModal);
})


CreditsLink.addEventListener('click', function() {
    CreditsModal.showModal();
    SetActiveModal(CreditsModal);        
})
    

//Modal Logic

function SetActiveModal(Modal) {
    ActiveModal = Modal;
    ActiveModal.showModal();
    document.body.style.overflow = 'hidden'; 

    // Ensure fade-in happens smoothly
    requestAnimationFrame(() => {
        ActiveModal.classList.remove('Modalfade'); // Ensure it's visible
        BlurElement.classList.add('BlurActive');
        header.classList.add('BlurActive');
    });
}

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



    

//underline-hover
const links = document.querySelectorAll('.underline-hover');

function toggleUnderline(event) {
    event.type === 'mouseenter' ? (this.style.textDecoration = "underline",this.style.textDecorationColor = "#fc8403"): this.style.textDecoration = "none";
    }

links.forEach(link => {
    link.addEventListener('mouseenter', toggleUnderline);
    link.addEventListener('mouseleave', toggleUnderline);
});

});
