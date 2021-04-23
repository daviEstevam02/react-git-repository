import styled from 'styled-components';

export const Conteiner  = styled.div`
    margin: 0 0 0 500px;

    position: absolute;

    .background{
        margin-left: 300px;
        margin-bottom: -600px;    
    }
    
    ul{
        list-style: none;
    }
    
    
    .title{
        display: flex;
        align-items:center;

        margin-left: 25px;

        font-size: 12px;

        h1{
            margin-left:10px;
            color:#A8A8B3;

            strong{
                color: #000;
            }
        }
    }
    .principal-text{
        font-size: 48px;

        margin: 100px 0 0 25px;
    }

    .form{
        margin: 50px 0 100px 25px;

        display: flex;
        align-items: center;

        input{
            width: 100%;
            max-width: 400px;
            height: 60px;

            padding: 1rem;

            border: none;
            border-radius: 5px;

            outline: none;
        }
        button{
            width: 100%;
            max-width: 200px;
            height: 60px;

            border: none;

            border-radius: 5px;

            background-color:#04D361;
            color: #ffffff;
        }
    }
`;