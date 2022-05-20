import styled from 'styled-components';

export const Div = styled.div`
    display: grid;
    /* grid-gap: 5px; */
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    align-items: center;
    justify-items: center;
`;

export const H1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    width: fit-content;
`;
