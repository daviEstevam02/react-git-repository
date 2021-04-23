import { Conteiner } from "./styles";
import {IoIosArrowForward } from 'react-icons/io'
import { useState } from "react";

import { Modal } from '../Modal';
import { IRepositoryGit } from "../../Models/IRepositoryGit";
import { RepositoryModalContent } from "../Modal/RepositoryModalContent";


interface RepositoryItemProps{
    repository: IRepositoryGit    
}

export function RepositoryItems(props:RepositoryItemProps){

    const { avatar_url, id, login, followers_url, following_url } = props.repository;

    const [isOpen, setIsOpen] = useState(false);

    return(
        <Conteiner>
            <div className="Content">
                <img src={props.repository?.avatar_url} alt="profile-image" className="profile-image"/>
                <strong className="repository-name">{props.repository?.login}</strong>
            </div>

              <button type="button" onClick={() => {
                  setIsOpen(true)

              }}>
                  <IoIosArrowForward color="#C9C9D4" size={30}/>
              </button>

                <Modal  setModalOpen={setIsOpen} isOpen={isOpen}>
                    <RepositoryModalContent repository={{ following_url ,avatar_url, id, login, followers_url }} />
                </Modal>

        </Conteiner>
    );
}