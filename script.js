document.addEventListener("DOMContentLoaded", function() {
    const snowflakesContainer = document.querySelector('.snowflakes');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random() * 0.8 + 0.2; /* 雪花透明度随机 */
        snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
        snowflakesContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createSnowflake, 100);
});