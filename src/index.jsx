import { createRoot } from 'react-dom/client';
import { App } from './components/App/App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
