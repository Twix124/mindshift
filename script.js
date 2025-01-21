document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Add button click handler
    initButtonHandler();
    
    // Add page load animation
    initPageLoadAnimation();
});

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function initButtonHandler() {
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', function() {
        window.location.href = '/manifestation-guide.html';
    });
}

function initPageLoadAnimation() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
}
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    // Here you would typically send the email to your backend service
    alert('Thank you for subscribing! We\'ll be in touch soon.');
    this.reset();
});
