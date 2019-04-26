const boxesAnimation = window.anime({
    targets: '.js-box',
    translateY: [150, 50],
    backgroundColor: {
        value: (el, i, t) => {
            const r = 58 + (i * 12);
            const g = 35 + (i * 12);
            const b = 220;
            const color = `rgb(${r}, ${g}, ${b})`;
            return color;
        },
        easing: 'linear',
        duration: 200,
    },
    duration: 900,
    easing: 'easeOutElastic',
    elasticity: 500,
    delay: (el, i, t) => i * 20,
    loop: true,
    direction: 'alternate',
});
anime({
    scale: {
        value: 2,
        transition: 'linear',
        duration: 1000,
    },
    opacity: 1,
    height: [0, 100],
    transition: 'easeInOutSine',
    duration: 500,
});