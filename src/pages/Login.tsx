import React, { useState } from "react";
import LogoWhiteImage from "../assets/img/logoWhite.png";
import imgRetour from "../assets/img/right.png";
import { ApiUrl } from "../ApiUrl";
import axios from "axios";

const Login: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = '/register';
  };

  const retour = () => {
    window.location.href = '/';
  };

  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const apiUrl = ApiUrl();
  
  const seLogin = () => {
    axios.post(`${apiUrl}proprietaires/login`, {
      mail: mail,
      mdp: password
    })
    .then(function (response) {
      if (response.status === 200) {
        console.table(response.data.data); // eslint-disable-line no-console
        window.sessionStorage.setItem("token", response.data.data);
        window.location.href = "/accueil";
      }
    })
    .catch(function (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message); // eslint-disable-line no-console
    });
  };

  return (
    <main>
      <div className="en-tete">
        <div className="logo">
          <img src={LogoWhiteImage} alt="CropGames Logo" />
        </div>
      </div>
      <div className="formulaire" style={{ height: '450px' }}>
        <span className="borderLine"></span>
        <form onSubmit={(e) => { e.preventDefault(); seLogin(); }}>
          <div className="title">
            <h1>Connexion à CropGames</h1>
            <p style={{ color: 'red' }}>{error}</p>
          </div>
          <input
            className="inputBox"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email*"
            required
            aria-label="Email"
          />
          <input
            className="inputBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Password*"
            required
            aria-label="Password"
          />
          <input type="submit" value="Login" />
          <div className="autre-lien">
            <p>
              Vous n avez pas de compte ? <a onClick={handleButtonClick}>Inscrivez-vous ici</a>
            </p>
          </div>
        </form>
      </div>
      <div className="retour">
        <a className="lien-retour" onClick={retour}>
          <img src={imgRetour} alt="Retour à la page d'accueil" />
        </a>
      </div>
    </main>
  );
};

export default Login;
