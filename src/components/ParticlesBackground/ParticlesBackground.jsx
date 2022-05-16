import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { config } from './config.jsx';

export function ParticlesBackground(props) {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    config.background.color = props.isDarkMode ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
    config.particles.color = props.isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
    config.particles.links.color = props.isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';

    return <Particles id='tsparticles' init={particlesInit} options={config} />;
}
