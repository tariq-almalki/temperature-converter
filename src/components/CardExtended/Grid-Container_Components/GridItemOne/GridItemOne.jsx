// JS Imports
import Toggle from 'react-toggle';
import { Sun } from '../../Toggle_Components/Sun/Sun.jsx';
import { Moon } from '../../Toggle_Components/Moon/Moon.jsx';
import styled from 'styled-components';

// CSS Imports
import './Toggle.css';

const Div = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Koulen&family=Lato&family=Roboto:wght@300&display=swap');
    display: flex;
    font-family: 'Roboto', sans-serif;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export function GridItemOne(props) {
    function toggleHandler() {
        props.onCheckedHandler(props.isDarkMode ? false : true);
    }

    return (
        <Div>
            {/* this h1 changes is color based on Card.jsx component */}
            <h1>Temperature Converter</h1>
            <Toggle
                checked={props.isDarkMode}
                icons={{ checked: <Moon />, unchecked: <Sun /> }}
                onChange={toggleHandler}
            />
        </Div>
    );
}
