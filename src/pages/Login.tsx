import React, { useState } from "react";
import LogoWhiteImage from "../assets/img/logoWhite.png";
import imgRetour from "../assets/img/right.png";
import { ApiUrl } from "../ApiUrl";
import axios from "axios";

const Login: React.FC = () => {

  const handleButtonClick = () => {
      window.location.href ='/register';
  };
  const retour = () => {
      window.location.href ='/';
  };

  const [mail,setMail] = useState<any>();
  const [password,setPassword] = useState<any>();
  const [error,setError] = useState<any>(null);
  
  const apiUrl  = ApiUrl();
  const seLogin = () =>{
    console.log(mail +" ----- "+password)
      
      axios.post(`${apiUrl}proprietaires/login`, {
        mail: mail,
        mdp: password
      }).
      then(function (response) {
        if (response.status==200) {
          console.table(response.data.data);
          window.sessionStorage.setItem("token",response.data.data);
          window.location.href = "/accueil"
        }
      })
      .catch(function (error) {
        setError(error.response.data.message)
        console.log(error.response.data.message);

      });
  }



  return (
    <main>
      <div className="en-tete">
        <div className="logo">
          <img src={LogoWhiteImage} alt="" />
        </div>
        
      </div>
      <div className="formulaire" style={{height:'450px'}}>
        
        <span className="borderLine"></span>
        <form onSubmit={(e) => { e.preventDefault(); seLogin(); }}>
          <div className="title">
            <h1>Log In</h1>
            <p style={{color:'red'}}>{error}</p>
          </div>
          <input className="inputBox" value={mail} onChange={(e) => setMail(e.target.value)} type="email" name="" id="1" placeholder="Email*" required/>
          <input className="inputBox" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="2" placeholder="Password*" required/>
          <input type="submit" value="Login" />
          <div className="autre-lien">
            <p>
              You have not an account <a onClick={handleButtonClick}>Register</a>
            </p>
          </div>
        </form>
      </div>
      <div className="retour">
        <a className="lien-retour" onClick={retour}>
          <img src={imgRetour} alt="" />
        </a>
      </div>
    </main>
  );
};
export default Login;
