import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;

        padding: 0;
        border: 0;
        margin: 0;
    }

    #root {
        height: 100vh;

        font-family: 'Quicksand', sans-serif;

        color: #52332A;
        background-color: #E6E6E6;
    }
`;

// #522012
// #D96C4E
// #D1512E
// #52332A
// #9E3C22

// font-family: 'Hubballi', cursive;
// font-family: 'Quicksand', sans-serif;

export default GlobalStyle;