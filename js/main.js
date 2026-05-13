// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animate-element');
    animatedElements.forEach((el) => {
        observer.observe(el);
    });
});

// WhatsApp Form Submission
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('waName').value;
        const email = document.getElementById('waEmail').value;
        const subject = document.getElementById('waSubject').value;
        const message = document.getElementById('waMessage').value;
        
        // Construct WhatsApp Message
        const waMessage = `*New Message from Portfolio*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
        
        // Phone number to send to (with country code)
        const phone = "916381288755";
        
        // WhatsApp API URL
        const whatsappUrl = `https://wa.me/${phone}?text=${waMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    });
}
