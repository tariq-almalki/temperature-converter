export const config = {
    background: {
        color: {
            value: '#000000',
        },
    },
    fpsLimit: 120,
    fullScreen: {
        enable: true,
        // important so it doesn't cover other elements and serve only as an animated background.
        zIndex: -2,
    },
    interactivity: {
        events: {
            onClick: {
                enable: false,
            },
            onHover: {
                mode: 'repulse',
                enable: true,
            },
            onDiv: {
                enable: true,
                // do not depend of module.css selectors because it will change later to gibberish names
                // choose any names you like, it doesn't have to be present in the css file itself.
                selectors: '.bounce.rectangle',
                mode: 'bounce',
                type: 'rectangle',
            },
            resize: true,
        },
    },
    particles: {
        color: {
            value: '#ffffff',
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'out',
            },
            random: false,
            speed: 5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 50,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 2, max: 3 },
        },
    },
    detectRetina: true,
};
