document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const envelopeContainer = document.querySelector('.envelope-container');
    const surpriseContent = document.querySelector('.surprise-content');
    const floatingHearts = document.querySelector('.floating-hearts');
    
    // Create floating hearts
    function createHearts() {
        for (let i = 0; i < 30; i++) {
            createHeart();
        }
    }
    
    function createHeart() {
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.animationDelay = Math.random() + 's';
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.color = `rgb(${Math.floor(Math.random() * 56) + 200}, ${Math.floor(Math.random() * 56)}, ${Math.floor(Math.random() * 56) + 100})`;
        heart.style.position = 'absolute';
        heart.style.bottom = '-10vh';
        heart.style.animation = 'floatUp ' + (Math.random() * 3 + 3) + 's linear infinite';
        
        floatingHearts.appendChild(heart);
        
        // Remove hearts after animation to prevent memory issues
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    
    // Handle envelope click
    envelope.addEventListener('click', function() {
        envelope.classList.add('open');
        
        // After envelope animation completes, show surprise content
        setTimeout(() => {
            envelopeContainer.style.opacity = '0';
            surpriseContent.classList.add('visible');
            
            // After transition completes, remove envelope container
            setTimeout(() => {
                envelopeContainer.style.display = 'none';
                
                // Start creating floating hearts
                createHearts();
                setInterval(createHeart, 300);
            }, 1000);
        }, 1000);
    });
    
    // Handle photo clicks for a simple lightbox effect
    const photos = document.querySelectorAll('.photo');
    
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            const img = this.querySelector('img');
            const src = img.getAttribute('src');
            
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            lightbox.style.display = 'flex';
            lightbox.style.justifyContent = 'center';
            lightbox.style.alignItems = 'center';
            lightbox.style.zIndex = '1000';
            lightbox.style.opacity = '0';
            lightbox.style.transition = 'opacity 0.3s ease';
            
            const lightboxImg = document.createElement('img');
            lightboxImg.setAttribute('src', src);
            lightboxImg.style.maxWidth = '90%';
            lightboxImg.style.maxHeight = '90%';
            lightboxImg.style.borderRadius = '5px';
            lightboxImg.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
            
            lightbox.appendChild(lightboxImg);
            document.body.appendChild(lightbox);
            
            // Fade in the lightbox
            setTimeout(() => {
                lightbox.style.opacity = '1';
            }, 10);
            
            // Close lightbox when clicked
            lightbox.addEventListener('click', function() {
                lightbox.style.opacity = '0';
                setTimeout(() => {
                    lightbox.remove();
                }, 300);
            });
        });
    });
    
    // Add some interactive elements
    function addSpecialEffects() {
        const header = document.querySelector('.header h1');
        
        // Make the header shimmer on hover
        header.addEventListener('mouseover', function() {
            this.style.backgroundImage = 'linear-gradient(90deg, #ff4070, #ff8a9e, #ff4070)';
            this.style.backgroundSize = '200% auto';
            this.style.webkitBackgroundClip = 'text';
            this.style.webkitTextFillColor = 'transparent';
            this.style.animation = 'shimmer 2s infinite';
        });
        
        header.addEventListener('mouseout', function() {
            this.style.backgroundImage = 'none';
            this.style.webkitTextFillColor = '#ff4070';
            this.style.animation = 'none';
        });
        
        // Add shimmer animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shimmer {
                to {
                    background-position: 200% center;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Call the special effects function
    addSpecialEffects();
}); 