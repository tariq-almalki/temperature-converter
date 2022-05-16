import { ParticlesBackground } from '../ParticlesBackground/ParticlesBackground.jsx';
import { Container } from '../Container/Container.jsx';
import { CardExtended } from '../CardExtended/CardExtended.jsx';
import { useState } from 'react';

export function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    function isCheckedHandler(checked) {
        setIsDarkMode(checked);
    }

    return (
        <Container>
            <ParticlesBackground isDarkMode={isDarkMode} />
            <CardExtended isDarkMode={isDarkMode} onCheckedHandler={isCheckedHandler} />
        </Container>
    );
}
