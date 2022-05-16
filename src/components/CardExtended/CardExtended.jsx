import { Card } from '../Card/Card.jsx';
import { GridItemOne } from './Grid-Container_Components/GridItemOne/GridItemOne.jsx';

export function CardExtended(props) {
    function isCheckedHandler(checked) {
        props.onCheckedHandler(checked);
    }

    return (
        <Card isDarkMode={props.isDarkMode}>
            <GridItemOne onCheckedHandler={isCheckedHandler} />
            <div></div>
            <div></div>
        </Card>
    );
}
