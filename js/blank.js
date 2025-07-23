const ItchIoLink = document.getElementById('ItchIoLink');
const ThreeNoodlesLink = document.getElementById('ThreeNoodlesLink');




ItchIoLink.addEventListener('mouseenter', function() {
    ItchIoLink.style.textDecoration = "underline";
})

ItchIoLink.addEventListener('mouseleave', function() {
    ItchIoLink.style.textDecoration = "none";
})


ThreeNoodlesLink.addEventListener('mouseenter', function() {
    ThreeNoodlesLink.style.textDecoration = "underline";
})

ThreeNoodlesLink.addEventListener('mouseleave', function() {
    ThreeNoodlesLink.style.textDecoration = "none";
})