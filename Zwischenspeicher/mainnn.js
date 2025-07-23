document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.querySelector('.flip-card');
    const flipCardTexts = document.querySelector('.flip-card-texts');
    const toplayout = document.querySelector('.toplayout');
    const body = document.querySelector('body');
    let isFlipped = false; 
    let isFlipping = false;

    const RevolveFlipCard = document.querySelector('.RevolveFC');
    const RevolveFlipCardText = document.querySelector('.RevolveFCText')
    let isFlippedRevolve = false;


    flipCard.addEventListener('click', function() {
        if(!isFlipping) {

            isFlipping = true;
            isFlipped = !isFlipped;

            if(isFlipped) {
                toplayout.classList.add('cursorhk');
                body.classList.add('cursorhk');
            } else {
                toplayout.classList.remove('cursorhk');
                body.classList.remove('cursorhk');
            }

            flipCard.classList.toggle('flipped');
            flipCardTexts.classList.toggle('flipped');
            
            setTimeout(() => {
                isFlipping = false;
            }, 500);
        }
    });

    RevolveFlipCard.addEventListener('click', function() {
        if(!isFlipping) {

            isFlipping = true;
            isFlippedRevolve = !isFlippedRevolve;

            RevolveFlipCard.classList.toggle('flipped');
            RevolveFlipCardText.classList.toggle('flipped');
            
            setTimeout(() => {
                isFlipping = false;
            }, 500);
        }
    });
});