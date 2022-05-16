// JS Imports
import { useState } from 'react';
import Toggle from 'react-toggle';
import { Sun } from '../../Toggle_Components/Sun/Sun.jsx';
import { Moon } from '../../Toggle_Components/Moon/Moon.jsx';
// import styles from './GridItemOne.module.css';
import styled from 'styled-components';

// CSS Imports
import './Toggle.css';

const Div = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Koulen&family=Lato&family=Roboto:wght@300&display=swap');
    display: flex;
    font-family: 'Lato', sans-serif;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export function GridItemOne(props) {
    const [checked, setChecked] = useState(true);

    function toggleHelper() {
        setChecked(checked ? false : true);
        props.onCheckedHandler(checked ? false : true);
    }

    return (
        <Div>
            <h1>Temperature Converter</h1>
            <Toggle
                checked={checked}
                icons={{ checked: <Moon />, unchecked: <Sun /> }}
                onChange={toggleHelper}
            />
        </Div>
    );
}
