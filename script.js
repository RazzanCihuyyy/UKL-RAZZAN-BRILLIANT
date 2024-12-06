document.addEventListener('DOMContentLoaded', function() {

    AOS.init({
        duration: 1000,
        once: true
    });

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollTop({
                behavior: 'smooth'
            });
        });
    });


    const testimonials = [
        {
            name: "Rahmad Haris Abdillah",
            role: "Murid SMK TELKOM Sidoarjo",
            text: "ZannEdu sangat membantu saya dalam memahami lebih dalam tentang materi yang tidak saya pahami sebelumnya."
        },
        {
            name: "Cristiano Ronaldo",
            role: "Pemain Bola Portugal",
            text: "ZannEdu benar-benar membantu anak saya dan juga teman-temannya dalam memahami materi lebih dalam."
        },
        {
            name: "Furina",
            role: "Hydro Archon Fontaine",
            text: "Platform yang luar biasa untuk transformasi digital di Region kami (Fontaine)."
        }
    ];

    const testimonialSlider = document.querySelector('.testimonials-slider');
    let currentSlide = 0;

    function createTestimonialSlide(testimonial) {
        return `
            <div class="testimonial-slide">
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
    }

    function updateTestimonials() {
        testimonialSlider.innerHTML = createTestimonialSlide(testimonials[currentSlide]);
        currentSlide = (currentSlide + 1) % testimonials.length;
    }

    updateTestimonials();
    setInterval(updateTestimonials, 5000);

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        console.log('Form submitted:', formData);
        contactForm.reset();
        alert('Terima kasih! Pesan Anda telah terkirim.');
    });

    window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.floating-cards .card');
        cards.forEach((card, index) => {
            const speed = (index + 1) * 0.5;
            const yPos = window.scrollY * speed / 10;
            card.style.transform = `translateY(${yPos}px)`;
        });
    });
});