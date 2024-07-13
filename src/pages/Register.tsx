import React, { useState } from 'react';
import LogoWhiteImage from '../assets/img/logoWhite.png';
import right from '../assets/img/right.png';
import '../assets/css/style.css';
import { ApiUrl } from '../ApiUrl';
import axios from 'axios';
const Accueil: React.FC = () =>{

    const handleButtonClick = () => {
      window.location.href = "/login";
    };
    const [nom,setNom] = useState<any>();
    const [mail,setMail] = useState<any>();
    const [dtn,setDtn] = useState<any>();
    const [password,setPassword] = useState<any>();
    const [repassword,setrePassword] = useState<any>();
    const apiUrl  = ApiUrl();
    const [error,setError] = useState<any>(null);

    const seRegister = () =>{
        axios.post(`${apiUrl}proprietaires/inscrire`, {
          nom: nom,
          dtn: dtn,
          mail: mail,
          mdp: password,
          cmdp: repassword,
        }).
        then(function (response) {
          if (response.status==200) {
            console.table(response.data.data);
            window.location.href = "/login"
          }
        })
        .catch(function (error) {
          setError(error.response.data.message)
          console.log(error.response);
        });
        
    }
   
    return (
        <main>
            <div className="en-tete">
                <div className="logo">
                    <img src={LogoWhiteImage} alt=""/>
                </div>
                <div className="title">
                    <h1>Register</h1>
                    <p style={{color:"red"}}>{error}</p>
                </div>
            </div>
            <div className="formulaire">
                <span className="borderLine"></span>
                <form onSubmit={(e) => { e.preventDefault(); seRegister(); }}>
                    <input type="hidden" name="action" value="action"/>
                     <input className="inputBox" value={nom} onChange={(e) => setNom(e.target.value)} type="text" name="nom" id="1" placeholder="Name*" required/>
                     <input className="inputBox" value={mail} onChange={(e) => setMail(e.target.value)} type="email" name="mail" id="2" placeholder="Email*" required/>
                     <input className="inputBox" value={dtn} onChange={(e) => setDtn(e.target.value)} type="date" name="dtn" id="3" placeholder="date of birth*" required/>
                    <input className="inputBox" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="4" placeholder="Password*" required/>
                    <input className="inputBox" value={repassword} onChange={(e) => setrePassword(e.target.value)} type="password" name="" id="5" placeholder="Password*" required/>
                    <input type="submit" value="Create Account" />
                </form>
                <div className="autre-lien">
                    <p>Already have an account <a  onClick={handleButtonClick}>Log In</a></p>
                </div>
            </div>
            <div className="retour">
                <a className="lien-retour"  onClick={handleButtonClick}>
                    <img src={right} alt=""/>
                </a>
            </div>
    </main> 
    );
  }
export default Accueil;