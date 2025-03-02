document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const blurValue = Math.min(scrollPosition / 40, 5); // Adjust blur based on scroll position, max 5px
    const background = document.querySelector('.background');
    background.style.filter = `blur(${blurValue}px)`;
});
