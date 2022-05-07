export const config = {
    background: {
        color: {
            value: '#000000',
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onHover: {
                enable: true,
                mode: 'repulse',
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
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 150,
                duration: 0.4,
            },
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
            opacity: 1,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};
