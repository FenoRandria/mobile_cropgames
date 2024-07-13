import React from 'react'; // Add this import statement
import LogoWhiteImage from '../assets/img/logoWhite.png';
import leftUp from '../assets/img/leftUp.png';
import add from '../assets/img/add.png';
import MenuSlider from '../components/MenuSlider';
import ButtonGround from '../components/ButtonGround';

const Accueil: React.FC = () =>{
    return (
        <>
        <MenuSlider/>
        <main>
            <section className="contenu">
                <div className="introduction">
                    <div className="logo">
                        <img src={LogoWhiteImage} alt=""/>
                    </div>
                    <div className="title">
                        <h1>Farm your town <br /><span>On Your Own</span></h1>
                    </div>
                </div>
                <div className="image-contenu">
                    <p>
                        <span>Lorem ipsum dolor sit</span>
                        amet consectetur adipisicing elit. Aperiam,
                        aliquid. Aperiam, accusantium ducimus
                    </p>
                </div>
            </section>
            <section className="action">
                <ButtonGround  sary={leftUp} href="/landList" nameClass="button" contenu="Field list"/>
                <ButtonGround sary={add} href="/addTerrain" nameClass="button" contenu="Add ground"/>
            </section>
        </main>
        </>
    );
  }
  export default Accueil;