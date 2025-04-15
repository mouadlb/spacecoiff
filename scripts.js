document.addEventListener('DOMContentLoaded', function() {
    // Set current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();
    

    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });

    // Initialize Swiper for gallery
    const gallerySwiper = new Swiper('.gallery-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });

    // Initialize Swiper for testimonials
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });

    // Back to top button functionality
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Language switcher functionality
    const langBtns = document.querySelectorAll('.lang-btn');
    const langElements = document.querySelectorAll('[data-lang-key]');
    let currentLang = 'en';
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang === currentLang) return;
            
            // Update active button state
            langBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update language content
            changeLang(lang);
            currentLang = lang;
            
            // Add RTL for Arabic
            document.body.classList.remove('rtl');
            if (lang === 'ar') {
                document.body.classList.add('rtl');
            }
        });
    });

    function changeLang(lang) {
        langElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[key] && translations[key][lang]) {
                element.textContent = translations[key][lang];
            }
        });
    }

    // Modal functionality for service menu
    const viewFullMenuBtn = document.querySelector('[data-lang-key="viewFullMenu"]');
    if (viewFullMenuBtn) {
        viewFullMenuBtn.addEventListener('click', function() {
            alert('Full service menu functionality would be implemented here.');
        });
    }

    // Book appointment button functionality
    const bookButtons = document.querySelectorAll('[data-lang-key="bookNow"], [data-lang-key="bookAppointment"]');
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Booking functionality would be implemented here.');
        });
    });

    // Add scroll reveal animations to sections
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add smooth hover animations to elements
    const hoverElements = document.querySelectorAll('.service-card, .contact-card, .social-link, .btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});
