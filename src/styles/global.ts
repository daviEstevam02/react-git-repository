import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';

export const GlobalStyle  = createGlobalStyle`

    :root{
        --background: #f0f2f5;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    input,button,textarea{
         font:400 18px Roboto, sans-serif;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size:87.5%
        }
    }

    body{
        background-color:var(--background) !important ;
        -webkit-font-smoothing: antialiased;
    }
    body,input,textarea,button{
     font-family: 'Roboto', sans-serif;
     font-weight: 300;
    }
    h1,h3,h4,h5,h6, strong{
        font-weight: 600;
    }
    [disable]{
         opacity:0.6;
     cursor: not-allowed
    }


`; 