import { ParticlesBackground } from '../ParticlesBackground/ParticlesBackground.jsx';
import { Container } from '../Container/Container.jsx';
import { CardExtended } from '../CardExtended/CardExtended.jsx';
import GithubCorner from 'react-github-corner';
import { useLocalStorage } from '../../hooks/useLocalStorage.jsx';

export function App() {
    // const [isDarkMode, setIsDarkMode] = useState(true);
    const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', true);

    function isCheckedHandler(checked) {
        setIsDarkMode(checked);
    }

    return (
        <Container>
            <ParticlesBackground isDarkMode={isDarkMode} />
            <CardExtended isDarkMode={isDarkMode} onCheckedHandler={isCheckedHandler} />
            <GithubCorner
                octoColor={isDarkMode ? '#151513' : '#fff'}
                bannerColor={isDarkMode ? '#fff' : '#151513'}
                href='https://github.com/kiemkist/temperature-converter'
                target={'_blank'}
            />
        </Container>
    );
}
