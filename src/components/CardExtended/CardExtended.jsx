import { Card } from '../Card/Card.jsx';
import { GridItemOne } from './Grid-Container_Components/GridItemOne/GridItemOne.jsx';
import { GridItemTwo } from './Grid-Container_Components/GridItemTwo/GridItemTwo.jsx';
import { GridItemThree } from './Grid-Container_Components/GridItemThree/GridItemThree.jsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.jsx';

export function CardExtended(props) {
    const [objInputValue, setObjInputValue] = useLocalStorage('getObjInputValue', { value: '', unit: 'K' });

    function isCheckedHandler(checked) {
        props.onCheckedHandler(checked);
    }

    function liftInputValue({ value, unit }) {
        setObjInputValue({ value, unit });
    }

    return (
        <Card isDarkMode={props.isDarkMode}>
            <GridItemOne isDarkMode={props.isDarkMode} onCheckedHandler={isCheckedHandler} />
            <GridItemTwo isDarkMode={props.isDarkMode} liftInputValue={liftInputValue} />
            <GridItemThree objInputValue={objInputValue} />
        </Card>
    );
}
