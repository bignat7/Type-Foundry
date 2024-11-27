function smoothScrollTo(target, duration) {
    const start = scrollContainer.scrollLeft;
    const distance = target - start;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Cap progress at 1
        const easedProgress = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2; // Ease-in-out

        scrollContainer.scrollLeft = start + distance * easedProgress;

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

// Attach to navigation items
navbarItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const targetPosition = index * scrollContainer.offsetWidth;
        smoothScrollTo(targetPosition, 1); // Adjust `300` to control speed
    });
});

