    const snowContainer = document.body;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';

        // Random position
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflake.style.opacity = Math.random();
        
        // Random animation speed
        const fallDuration = Math.random() * 5 + 5; // 5–10 seconds
        snowflake.style.animationDuration = fallDuration + 's';

        snowContainer.appendChild(snowflake);

        // Remove after falling
        setTimeout(() => {
            snowflake.remove();
        }, fallDuration * 1000);
    }

    // Create snowflakes continuously
    setInterval(createSnowflake, 100);