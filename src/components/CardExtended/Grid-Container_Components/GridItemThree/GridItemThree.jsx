import { Div, H1 } from './GridItemThree.StyledComponent.jsx';

export function GridItemThree(props) {
    let K = null;
    let C = null;
    let F = null;

    let value = Number(props.objInputValue.value);
    if (props.objInputValue.unit === 'K') {
        K = value;
        C = K - 273.15;
        F = ((K - 273.15) * 9) / 5 + 32;
    } else if (props.objInputValue.unit === '°C') {
        K = value + 273.15;
        C = value;
        F = value * (9 / 5) + 32;
    } else {
        K = ((value - 32) * 5) / 9 + 273.15;
        C = ((value - 32) * 5) / 9;
        F = value;
    }

    return (
        <Div>
            {/* these H1 change their color based on Card.jsx component */}
            <H1>{K.toFixed(2).replace(/\.0+$/, '')}K</H1>
            <H1>{C.toFixed(2).replace(/\.0+$/, '')}°C</H1>
            <H1>{F.toFixed(2).replace(/\.0+$/, '')}°F</H1>
        </Div>
    );
}
