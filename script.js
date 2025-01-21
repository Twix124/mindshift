document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initButtonHandler();
    initPageLoadAnimation();
    initNavButtons();
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
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            window.location.href = 'main-content.html';
        });
    }
}

function initPageLoadAnimation() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
}

function initNavButtons() {
    const buttons = document.querySelectorAll('.nav-button');
    const currentPage = window.location.pathname.split('/').pop();

    buttons.forEach(button => {
        const buttonPage = button.getAttribute('href').split('/').pop();
        
        // Set active state based on current page
        if (buttonPage === currentPage) {
            button.classList.add('active');
        }

        // Add click event to handle navigation and active state
        button.addEventListener('click', function(e) {
            // Remove active class from all buttons
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
}

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert('Thank you for subscribing! We\'ll be in touch soon.');
        this.reset();
    });
}
