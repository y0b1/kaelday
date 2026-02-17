// Check if content should be blurred
function checkBlurStatus() {
    const now = new Date();
    const unblurDate = new Date('2026-02-18T00:00:00').getTime(); // February 18 at midnight
    const currentTime = now.getTime();

    const container = document.querySelector('.container');
    const blurOverlay = document.getElementById('blur-overlay');

    if (currentTime < unblurDate) {
        // Blur the content
        container.classList.add('blurred');
        blurOverlay.classList.add('visible');
    } else {
        // Remove blur if it's past the date
        container.classList.remove('blurred');
        blurOverlay.classList.remove('visible');
    }
}

// Confetti effect on page load
function createConfetti() {
    const confettiCount = 50;
    const container = document.body;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181', '#ff8fab'][Math.floor(Math.random() * 6)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`;

        container.appendChild(confetti);

        // Add CSS animation if not already present
        if (!document.querySelector('style[data-confetti]')) {
            const style = document.createElement('style');
            style.setAttribute('data-confetti', 'true');
            style.textContent = `
                @keyframes confetti-fall {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Trigger confetti and check blur on page load
window.addEventListener('load', () => {
    checkBlurStatus();
    createConfetti();
    
    // Check blur status every second to auto-unblur when time passes
    setInterval(checkBlurStatus, 1000);
});

// Optional: Add more confetti on click
document.addEventListener('click', (e) => {
    if (e.target.closest('.foreground-image')) {
        createConfetti();
    }
});

// Optional: Add keyboard shortcut for confetti (spacebar)
document.addEventListener('keypress', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        createConfetti();
    }
});
