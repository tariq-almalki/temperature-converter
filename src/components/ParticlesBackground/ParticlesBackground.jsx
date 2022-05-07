import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { config } from './config.jsx';
import styles from './ParticlesBackground.module.css';

export function ParticlesBackground() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            className={styles.priority}
            id='tsparticles'
            init={particlesInit}
            options={config}
        />
    );
}
