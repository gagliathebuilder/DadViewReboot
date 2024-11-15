// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Navbar Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.sticky-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Placeholder for Future Video Content Loading
function loadVideoContent() {
    const videoSection = document.querySelector('.video-section');
    videoSection.innerHTML += '<p>Loading more videos... Stay tuned!</p>';
}

document.addEventListener('DOMContentLoaded', function() {
    loadVideoContent();
});
