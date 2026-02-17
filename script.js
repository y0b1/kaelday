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

// Trigger confetti on page load
window.addEventListener('load', () => {
    createConfetti();
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
