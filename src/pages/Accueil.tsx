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
                        <img src={LogoWhiteImage} alt="CropGames Logo"/>
                    </div>
                    <div className="title">
                        <h1>CropGames: Farm Your Town <br /><span>On Your Own</span></h1>
                    </div>
                </div>
                <div className="image-contenu">
                    <p>
                        <span>CropGames vous offre une expérience de jeu unique</span> 
                        où vous pouvez cultiver votre propre ville, gérer vos terrains, et développer votre ferme de manière innovante. Découvrez comment vous pouvez ajouter de nouveaux terrains et faire croître vos cultures pour réussir dans CropGames.
                    </p>
                </div>
            </section>
            <section className="action">
                <ButtonGround sary={leftUp} href="/cropgames/landList" nameClass="button" contenu="View CropGames Field List"/>
                <ButtonGround sary={add} href="/cropgames/addTerrain" nameClass="button" contenu="Add New Terrain to CropGames"/>
            </section>
            </main>
        </>
    );
  }
  export default Accueil;