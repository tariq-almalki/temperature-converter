import { useState } from 'react';
import { ButtonGroup, TextField, Button } from '@mui/material';
// there is "colors" object from '@mui/material' you can get your colors from there...
import { Div } from './GridItemTwo.StyledComponent.jsx';
import limitsValues from './unit-lower-upper-values.js';

export function GridItemTwo(props) {
    const [value, setValue] = useState('');
    const [unit, setUnit] = useState('K');
    const [errorState, setErrorState] = useState(false);
    const [message, setMessage] = useState('0–373.15');
    const [unitValues, setUnitValues] = useState({ lower: 0, upper: 373.15 });

    function ButtonHandler(event) {
        const selectedUnit = event.target.textContent;
        const limits = limitsValues.get(selectedUnit);

        let value = selectedUnit === 'K' ? 273.15 : selectedUnit === 'C°' ? 0 : 32;

        setMessage(`${limits.lower}–${limits.upper} `);
        setUnitValues({
            lower: limits.lower,
            upper: limits.upper,
        });
        setValue('');
        setUnit(selectedUnit);
        props.liftInputValue({ value, unit: selectedUnit });
    }

    function InputHandler(event) {
        const inputValue = event.target.value;

        if (isNaN(Number(inputValue))) {
            setErrorState(true);
            setMessage('Error, must be a number');
            setValue(inputValue);
            return;
        }

        if (inputValue < unitValues.lower || inputValue > unitValues.upper) {
            setErrorState(true);
            setMessage(`Error, it should be between ${unitValues.lower}–${unitValues.upper}`);
            setValue(inputValue);
            return;
        }

        setErrorState(false);
        setMessage(`${unitValues.lower}–${unitValues.upper}`);
        setValue(inputValue);
        props.liftInputValue({ value: inputValue, unit });
    }

    const sxOptions = {
        color: props.isDarkMode ? '#000' : '#fff',
        borderColor: props.isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
        backgroundColor: props.isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
        // & means current element, so whether you add it or not won't make a difference when
        // targeting current element.
        '&:hover': { borderColor: props.isDarkMode ? '#0000006f' : '#ffffff6f' },
    };

    return (
        <Div>
            <ButtonGroup>
                <Button onClick={ButtonHandler} sx={sxOptions}>
                    K
                </Button>
                <Button onClick={ButtonHandler} sx={sxOptions}>
                    C°
                </Button>
                <Button onClick={ButtonHandler} sx={sxOptions}>
                    F°
                </Button>
            </ButtonGroup>
            <TextField
                id='outlined-basic'
                color='primary'
                value={value}
                label={unit}
                helperText={message}
                variant='filled'
                size='small'
                onChange={InputHandler}
                error={errorState}
                FormHelperTextProps={{
                    sx: {
                        color: props.isDarkMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                    },
                }}
                InputLabelProps={{
                    sx: {
                        color: props.isDarkMode ? 'rgba(0, 0, 0, 0.6)' : 'white',
                        '&.Mui-focused': {
                            color: props.isDarkMode ? 'black' : 'white',
                        },
                    },
                }}
                InputProps={{
                    sx: {
                        // with focus
                        color: props.isDarkMode ? 'black' : 'white',
                        '&:after': {
                            borderBottomColor: props.isDarkMode ? 'black' : 'white',
                        },
                        // with no focus
                        '&:before': {
                            borderBottomColor: props.isDarkMode ? 'black !important' : 'white !important',
                        },
                    },
                }}
            />
        </Div>
    );
}
