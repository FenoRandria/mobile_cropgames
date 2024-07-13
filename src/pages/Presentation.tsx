import React, { useEffect,useState } from 'react';
import { IonPage } from '@ionic/react';
import FirstImage from '../assets/img/first.jpg';
import PresentationImage from '../assets/img/presentation.jpg';
import PartielVideImage from '../assets/img/partielVide.jpg';
import LogoWhiteImage from '../assets/img/logoWhite.png';
import RightImage from '../assets/img/right.png';
import LeftImage from '../assets/img/left.png';
import '../assets/css/style.css';
import { useHistory } from 'react-router-dom';


const Presentation: React.FC = () => {
    const history = useHistory();
    const [contenu, setContenu] = useState("Welcome to Crop Games, Where You Farm Your Town on Your Own!");
    const [btnText, setBtnText] = useState("NEXT");

  useEffect(() => {
    const btnNext = document.querySelector(".btnsuivant");
    const slider = document.querySelector(".slider");
    const saryAll = document.querySelector(".saryAll");
    const btnprecedent = document.querySelector(".btnprecedent");

    const handleBtnNextClick = () => {
      if (saryAll?.classList.contains("saryAll")) {
        if (saryAll?.classList.contains("saryAll3")) {
            history.push('/login');
            window.location.reload();
        } else if (saryAll?.classList.contains("saryAll2")) {
            setBtnText("START");
            setContenu("Get Started");
            updateClasses("slider3", "saryAll3");
        } else if (saryAll?.classList.contains("saryAll1")) {
            setContenu("Experience the Thrill of Self-Sufficiency in Crop Games: Farm Your Town on Your Own");
            updateClasses("slider2", "saryAll2");
        } else {
            setContenu("Sow Seeds of Success, Farm Your Town, and Harvest Prosperity!");
            updateClasses("slider1", "saryAll1");
            btnprecedent?.classList.add("btnprecedent1");
            btnNext?.classList.add("btnsuivant1");
        }
    }
    };
    
    const handleBtnPrecedentClick = () => {
        // Vérifier la présence des classes avant la suppression
        const saryAllContainsClass = saryAll?.classList.contains("saryAll");
        
        if (saryAllContainsClass) {
            
            if (saryAll?.classList.contains("saryAll3")) {
                setBtnText("NEXT");
                setContenu("Experience the Thrill of Self-Sufficiency in Crop Games: Farm Your Town on Your Own");
                updateClasses("slider2", "saryAll2");
            } else if (saryAll?.classList.contains("saryAll2")) {
                setContenu("Sow Seeds of Success, Farm Your Town, and Harvest Prosperity!");
                updateClasses("slider1", "saryAll1");
                setBtnText("NEXT");
            } else if (saryAll?.classList.contains("saryAll1")) {
                setContenu("Welcome to Crop Games, Where You Farm Your Town on Your Own!");
                updateClasses("slider", "saryAll");
                btnprecedent?.classList.remove("btnprecedent1");
                btnNext?.classList.remove("btnsuivant1");
                setBtnText("NEXT");
            }else {
                setContenu("Sow Seeds of Success, Farm Your Town, and Harvest Prosperity!");
            updateClasses("slider1", "saryAll1");
            btnprecedent?.classList.add("btnprecedent1");
            btnNext?.classList.add("btnsuivant1");
            setBtnText("NEXT");
          }
          
        }
      };
      

    const updateClasses = (sliderClass: string, saryAllClass: string) => {
      const sliderClasses = ["slider1", "slider2", "slider3"];
      const saryAllClasses = ["saryAll1", "saryAll2", "saryAll3"];

      sliderClasses.forEach(cls => slider?.classList.remove(cls));
      saryAllClasses.forEach(cls => saryAll?.classList.remove(cls));

      slider?.classList.add(sliderClass);
      saryAll?.classList.add(saryAllClass);
    };

  
    btnNext?.addEventListener('click', handleBtnNextClick);
    btnprecedent?.addEventListener('click', handleBtnPrecedentClick);

    return () => {
      btnNext?.removeEventListener('click', handleBtnNextClick);
      btnprecedent?.removeEventListener('click', handleBtnPrecedentClick);
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    
    <IonPage>
      <>
        <section className="saryAnimation">
          <div className="saryAll">
            <div className="sary1">
              <img src={FirstImage} alt=""/>
            </div>
            <div className="sary2">
              <img src={PresentationImage} alt=""/>
            </div>
            <div className="sary3">
              <img src={PartielVideImage} alt=""/>
            </div>
          </div>
        </section>
        <section className="contenu">
          <div className="logo">
            <img src={LogoWhiteImage} alt=""/>
          </div>
          <div className="contexte">
            <h1>WELCOME</h1>
            <p>{contenu}</p>
          </div>
          <div className="slider">
            <span className="slide next"></span>
          </div>
          <div className="next">
            <div className="btnprecedent">
              <img src={RightImage} alt=""/>
            </div>
            <div className="btnsuivant">
              <h3>{btnText}</h3>
              <div className="iconeNext">
                <img src={LeftImage} alt=""/>
              </div>
            </div>
          </div>
        </section>
      </>
    </IonPage>
  );
};

export default Presentation;
