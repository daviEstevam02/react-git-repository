import { IModalItem, IRepositoryGit } from "../../Models/IRepositoryGit";
import defaulProfileImg from '../../Assets/l60Hf.png'
import { useEffect, useState, useCallback } from 'react';


interface IRespositoryModalContentProps{
    repository: IModalItem
}

export function RepositoryModalContent({ repository }: IRespositoryModalContentProps){

    const [followersLength, setfollowersLength] = useState<number>(0);

    const [{ loading, error }, setIsLoading] = useState<{loading: boolean, error: boolean}>({ loading: false, error: false })

    const getFollowersLength = useCallback( async ()=> {
        try{

            setIsLoading( p=>{ return { ...p, loading: true } })

            const response = await fetch(repository.followers_url);
            const data:object[] = await response.json()

            setfollowersLength(data.length);

            setIsLoading( p=> { return { ...p, loading:false } })
        }
        catch{
            setIsLoading({ loading: false, error: true }) 
        }
    },[])

    

    useEffect(() => {
        getFollowersLength();        
    },[])

    return(

        <> 
            <div className="header-modal">
                <img className="profile-img" src={repository?.avatar_url ??  defaulProfileImg  } alt="Profile Pic"/>

                <h1 className="profile-name-modal" >{repository.login}/repos</h1>
            </div>
            {loading && <div>Carregando</div>}
            {error && <div>Error!</div>}


            <div className="followers-section">
                 { !loading && !error && <div className="followers-number">{followersLength}</div>}
                 <div className="followers">Followers</div>
            </div>
        </>
    );

}