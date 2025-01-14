document.querySelectorAll('.page').forEach((page, index) => {
    page.addEventListener('click', () => {
        const isFlipped = page.classList.contains('active');
        page.classList.toggle('active', !isFlipped);
    });
});
