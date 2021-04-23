import { Conteiner } from "./styles";
import { RepositoryItems } from '../item/index';

import { useState, useEffect } from 'react';

import { FaCompass } from 'react-icons/fa'

import backImg from '../../Assets/gitBackground.png'
import { IRepositoryGit } from "../../Models/IRepositoryGit";



export function RepositoryList(){

    const [repositories, setRepositories] = useState<IRepositoryGit[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then((data:IRepositoryGit[]) => setRepositories(data))
    },[])

    return(
        <Conteiner>

            <img src={backImg} alt="" className="background"/>


            <div className="title">
                <FaCompass size={25}/>
                <h1><strong>github</strong>_explorer</h1>
            </div>

            <h1 className="principal-text">Explore repositórios <br/> no Github.</h1>

            <div className="form">
                <input type="text" placeholder="Digite aqui"/>
                <button>Pesquisar</button>
            </div>

            <ul>
                {repositories.map(repository => <RepositoryItems key={repository.login} repository={repository}/>)}
            </ul>
        </Conteiner>

    );
}