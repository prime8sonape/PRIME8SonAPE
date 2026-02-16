// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.collection-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Parallax effect for floating pixels
document.addEventListener('mousemove', (e) => {
    const pixels = document.querySelectorAll('.pixel-float');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    pixels.forEach((pixel, index) => {
        const speed = (index + 1) * 20;
        const currentTransform = pixel.style.transform || '';
        const baseTransform = currentTransform.match(/translate\([^)]+\)/)?.[0] || 'translate(0, 0)';
        pixel.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});
