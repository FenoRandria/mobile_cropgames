import React, { useState } from 'react';
import LogoWhiteImage from '../assets/img/logoWhite.png';
import right from '../assets/img/right.png';
import '../assets/css/style.css';
import { ApiUrl } from '../ApiUrl';
import axios from 'axios';

const Accueil: React.FC = () => {
    const handleButtonClick = () => {
        window.location.href = "/login";
    };

    const [nom, setNom] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    const [dtn, setDtn] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repassword, setRePassword] = useState<string>('');
    const apiUrl = ApiUrl();
    const [error, setError] = useState<string>('');

    const seRegister = () => {
        axios.post(`${apiUrl}proprietaires/inscrire`, {
            nom: nom,
            dtn: dtn,
            mail: mail,
            mdp: password,
            cmdp: repassword,
        })
        .then(function (response) {
            if (response.status === 200) {
                console.table(response.data.data); // eslint-disable-line no-console
                window.location.href = "/login";
            }
        })
        .catch(function (error) {
            setError(error.response?.data?.message || 'An error occurred');
            console.log(error.response); // eslint-disable-line no-console
        });
    };

    return (
        <main>
            <div className="en-tete">
                <div className="logo">
                    <img src={LogoWhiteImage} alt="CropGames Logo" />
                </div>
                <div className="title">
                    <h1>Créer un compte CropGames</h1>
                    <p style={{ color: "red" }}>{error}</p>
                </div>
            </div>
            <div className="formulaire">
                <span className="borderLine"></span>
                <form onSubmit={(e) => { e.preventDefault(); seRegister(); }}>
                    <input type="hidden" name="action" value="action" />
                    <input
                        className="inputBox"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        type="text"
                        name="nom"
                        id="name"
                        placeholder="Nom*"
                        required
                        aria-label="Nom"
                    />
                    <input
                        className="inputBox"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        type="email"
                        name="mail"
                        id="email"
                        placeholder="Email*"
                        required
                        aria-label="Email"
                    />
                    <input
                        className="inputBox"
                        value={dtn}
                        onChange={(e) => setDtn(e.target.value)}
                        type="date"
                        name="dtn"
                        id="dob"
                        placeholder="Date de naissance*"
                        required
                        aria-label="Date de naissance"
                    />
                    <input
                        className="inputBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Mot de passe*"
                        required
                        aria-label="Mot de passe"
                    />
                    <input
                        className="inputBox"
                        value={repassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        type="password"
                        name="repassword"
                        id="repassword"
                        placeholder="Confirmer le mot de passe*"
                        required
                        aria-label="Confirmer le mot de passe"
                    />
                    <input type="submit" value="Créer un compte" />
                </form>
                <div className="autre-lien">
                    <p>Vous avez déjà un compte ? <a onClick={handleButtonClick}>Connectez-vous ici</a></p>
                </div>
            </div>
            <div className="retour">
                <a className="lien-retour" onClick={handleButtonClick}>
                    <img src={right} alt="Retour à la page de connexion" />
                </a>
            </div>
        </main>
    );
};

export default Accueil;
