import styled from 'styled-components';

const Div = styled.div`
    display: grid;
    color: ${(props) => (props.isDarkMode ? 'rgb(0, 0, 0)' : '#ffffff')};
    grid-template-rows: 0.5fr 0.75fr 1fr;
    background-color: ${(props) => (props.isDarkMode ? '#bdbdbd' : 'rgb(53, 53, 53)')};
    /* you need to set a high z-index for every element(so it be at the top) if you didn't set low value of z-index for 
    Particles, basically set Particles to lower z-index and that is it. */
    /* z-index: 10; */
    border-radius: 10px;
    height: 400px;
    width: 600px;
`;

export function Card(props) {
    return (
        <Div isDarkMode={props.isDarkMode} className={`bounce rectangle`}>
            {props.children}
        </Div>
    );
}
