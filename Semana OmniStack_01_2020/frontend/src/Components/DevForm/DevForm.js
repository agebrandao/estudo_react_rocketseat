
import React, { useState, useEffect } from 'react';
import './DevForm.css';

// { onSubmit } é o mesmo que :
// function DevForm( { props }) {
// const { onSubmit } = props;

// O componente pai app está passando uma funcção para o filho DevForm para que ele execute
function DevForm( { onSubmit}) {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    // {} define qual função será chamada
    // [] quando será chamada. Se o vetor estiver vazio, será executado uma única vez. Se colocar uma variável, a função será executada sempre que a variavel será executada.
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // console.log(position);
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);

            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        )
    }, [])

    async function handleSubmit(e){
        
  // forma de atualizacao do form
        e.preventDefault();

        await onSubmit({            
            github_username,
            techs,
            // latitude,
            // longitude,              
        });

        // Limpa os inputs
        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    type="text"
                    name="github_username"
                    id="github_username"
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)} />
            </div>
            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    type="text"
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)} />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        required
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)} />
                </div>
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={e => setLatitude(e.target.value)} />
                </div>
            </div>

            <button type="submit">Salvar</button>

        </form>
    )
}

export default DevForm;
