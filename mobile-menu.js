// Scroll Animations and Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll-triggered animations
    const animatedElements = document.querySelectorAll('.fade-in, .animated-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // Interactive card hover effects
    document.querySelectorAll('.animated-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
        });
    });

    // Stats counter animation
    const statsItems = document.querySelectorAll('.stats-item');
    statsItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.borderLeft = '3px solid #e74c3c';
            item.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.borderLeft = '3px solid transparent';
            item.style.transform = 'translateX(0)';
        });
    });
});
