// Dust trail effect following mouse cursor (Western themed)
document.addEventListener('mousemove', (e) => {
    const trail = document.getElementById('dustTrail');
    
    // Create dust particle
    const particle = document.createElement('div');
    particle.className = 'dust-particle';
    
    // Random size between 8-20px for dust effect
    const size = Math.random() * 12 + 8;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Position at mouse coordinates
    particle.style.left = `${e.clientX - size / 2}px`;
    particle.style.top = `${e.clientY - size / 2}px`;
    
    // Western/desert color palette for dust
    const dustColors = [
        '#D4A574',
        '#C19A6B',
        '#B8860B',
        '#DEB887',
        '#CD9B60'
    ];
    const randomColor = dustColors[Math.floor(Math.random() * dustColors.length)];
    particle.style.background = randomColor;
    particle.style.opacity = '0.5';
    
    trail.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 1500);
});

// Intersection Observer for fade-in animations
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

// Observe all guide items and team members
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.guide-item, .team-member, .github-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add smooth scroll for any anchor links
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
});

// Parallax effect on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header');
    const headerVideo = document.querySelector('.header-video');
    
    if (header) {
        const headerHeight = header.offsetHeight;
        // Only apply parallax while header is visible
        if (scrollTop < headerHeight) {
            const scrolled = scrollTop * 0.3;
            if (headerVideo) {
                headerVideo.style.transform = `translate(-50%, -60%) translateY(${scrolled}px)`;
            }
        }
    }
    
    lastScrollTop = scrollTop;
}, { passive: true });

// Add hover effect to placeholder images
document.querySelectorAll('.placeholder-image').forEach(image => {
    image.addEventListener('mouseenter', (e) => {
        const rect = e.currentTarget.querySelector('rect');
        if (rect) {
            rect.style.transition = 'fill 0.3s ease';
        }
    });
});

// Dynamic hover effects for team member avatars
document.querySelectorAll('.member-avatar img, .avatar-placeholder').forEach((avatar) => {
    const teamMember = avatar.closest('.team-member');
    
    if (teamMember) {
        teamMember.addEventListener('mouseenter', () => {
            avatar.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        teamMember.addEventListener('mouseleave', () => {
            avatar.style.transform = 'scale(1) rotate(0deg)';
        });
    }
});

// Add western-style ripple effect on button click
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        const rect = button.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left - 10}px`;
        ripple.style.top = `${e.clientY - rect.top - 10}px`;
        
        button.style.position = 'relative';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
            margin-left: -40px;
            margin-top: -40px;
        }
    }
`;
document.head.appendChild(style);


