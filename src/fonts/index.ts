import { createGlobalStyle } from 'styled-components';

import inter_400 from './Inter/inter-400.ttf'
import inter_600 from './Inter/inter-600.ttf'

import lexend_400 from './Lexend/lexend-400.ttf'
import lexend_500 from './Lexend/lexend-500.ttf'
import lexend_600 from './Lexend/lexend-600.ttf'

import lato_400 from './Lato/lato-400.ttf'
import lato_300 from './Lato/lato-300.ttf'
import lato_100 from './Lato/lato-100.ttf'

export default createGlobalStyle`
    
    @font-face {
        font-family: Inter_400;
        font-style: normal;
        font-weight: 400;
        src: url(${inter_400});  
    }
    @font-face {
        font-family: Inter_600;
        font-style: normal;
        font-weight: 600;
        src: url(${inter_600});  
    }
    @font-face {
        font-family: Lexend_400;
        font-style: normal;
        font-weight: 400;
        src: url(${lexend_400});  
    }
    @font-face {
        font-family: Lexend_500;
        font-style: normal;
        font-weight: 500;
        src: url(${lexend_500});  
    }
    @font-face {
        font-family: Lexend_600;
        font-style: normal;
        font-weight: 600;
        src: url(${lexend_600});  
    }
    @font-face {
        font-family: Lato_400;
        font-style: normal;
        font-weight: 400;
        src: url(${lato_400});  
    }
    @font-face {
        font-family: Lato_300;
        font-style: normal;
        font-weight: 300;
        src: url(${lato_300});  
    }
    @font-face {
        font-family: Lato_100;
        font-style: normal;
        font-weight: 100;
        src: url(${lato_100});  
    }
`;