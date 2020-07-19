import React, {useState, useEffect } from 'react';

function RepoListHooks(){
	
	const [repositories, setRepositories] = useState([]);
    const [newRepo, setNewRepo] = useState('');
    
    async function handleSubmit(e){
        // O form não atualiza a tela!!!!!
        e.preventDefault();

        await setRepositories([ ...repositories, newRepo ]);
        setNewRepo('');
    }

    function removeRepo(repo){  
        setRepositories( repositories.filter( repoItem => repoItem != repo));
    }
	
    return (
        <form onSubmit={handleSubmit}
            data-testid ="new-repo-form">
            <input type="text" 
            data-testid ="new-repo-input"
            name={ newRepo } 
            id="newRepo" 
            onChange={e => setNewRepo(e.target.value)}/>

            <button type="submit"> Salvar </button>
            <ul>
                { repositories.map(repo => 
                    <li 
                        data-testid={repo} 
                        key={repo}>
                            {repo} 
                        <button  onClick={()=> removeRepo(repo)} data-testid ="remove-button"> Remover </button>
                    </li>)}
            </ul>
        </form>			
    )
    
}

export default RepoListHooks;
	
