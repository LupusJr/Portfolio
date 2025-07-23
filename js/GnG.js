const links = document.querySelectorAll('.underline-hover');

function toggleUnderline(event) {
    event.type === 'mouseenter' ? this.style.textDecoration = "underline" : this.style.textDecoration = "none";
}

links.forEach(link => {
    link.addEventListener('mouseenter', toggleUnderline);
    link.addEventListener('mouseleave', toggleUnderline);
});
