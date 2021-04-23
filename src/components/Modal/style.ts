import styled from 'styled-components';

export const Conteiner = styled.div`


    position: absolute;    

    border-radius: 5px;

    width: 850px;

    height: 900px;
    
    margin-left: 700px;

    background: #ffffff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.15);

`;

export const Content = styled.div`

    .exit{
        margin-left:800px;
        margin-top: 50px;
    }
    .header-modal{

        display: flex;
        align-items: center;
        justify-content:center;

        .profile-img{
            width: 100px;
            height:100px;
            
            margin: 0 20px 0 20px;

            border-radius: 50%
        }
        .profile-name-modal{
            font-size: 50px;
        }
    }
    .followers-section{

        font-weight:500;

        margin: 50px 0 0 20px;

        .followers-number{
            margin: 20px 0 5px 55px;
            font-size: 35px;


        }
        .followers{
            margin: 0 0 0 10px;
            font-size: 30px;
        }
    }
`;