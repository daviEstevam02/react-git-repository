import styled from 'styled-components';

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;


    padding: 1rem 2rem;

    width: 100%;
    max-width: 714px;

    height: 112px;

    position: relative;

    background-color: #ffffff;
    
    border:1px solid #dcdce6;

    border-radius: 5px;

    margin: 20px;

    .profile-image{
        width: 60px;
        height: 60px;

        border-radius: 50%;

        margin-right: 20px ;
    }

    .Content{
        display: flex;
        align-items: center;

        .repository-name{
            font-weight: 700;
            font-size: 24px;
        }
       
    }
    button{
        background-color: transparent;
         border: none;
    }

    button:hover{
        cursor: pointer;
    }
`;