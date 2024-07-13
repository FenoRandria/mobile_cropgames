import React, { useEffect, useState } from "react";
import LogoWhiteImage from "../assets/img/logoWhite.png";
import mais from "../assets/img/mais.jpg";
import right from "../assets/img/right.png";
import MenuSlider from "../components/MenuSlider";
import { ApiUrl } from "../ApiUrl";
import axios from "axios";

const PartielDetails: React.FC = () => {
  const handleButtonClick = () => {
    console.log("fdfvdf") // eslint-disable-line no-console
    window.location.href="accueil";
  };
  const [id_parcelle] = useState(window.localStorage.getItem("id_parcelle")?.toString()); 
  const [setData] = useState<any>();  // eslint-disable-line @typescript-eslint/no-explicit-any
  const [dataCategorie, setDataCategorie] = useState<any[]>([]);  // eslint-disable-line @typescript-eslint/no-explicit-any
  const apiUrl  = ApiUrl();

  useEffect(() => {
    const fetchData = async () => {
      console.log(`${apiUrl}parcelles/${id_parcelle}`) // eslint-disable-line no-console
      try {
        const response = await axios.get(`${apiUrl}parcelles/${id_parcelle}`);
        console.table(response.data.data); // eslint-disable-line no-console
        setData(response.data.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error); // eslint-disable-line no-console
      }
    };
    fetchData();
  }, [id_parcelle]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(`${apiUrl}parcelles/categories/${id_parcelle}`) // eslint-disable-line no-console
      try {
        const response = await axios.get(`${apiUrl}parcelles/categories/${id_parcelle}`);
        console.table(response.data.data); // eslint-disable-line no-console
        setDataCategorie(response.data.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error); // eslint-disable-line no-console
      }
    };
    fetchData();
  }, [id_parcelle]);

  return (
    <>
      <MenuSlider />
      <main>
        <section className="en-tete">
          <div className="logo">
            <img src={LogoWhiteImage} alt="" />
          </div>
          <div className="title">
            <h1>Parcelle Details</h1>
          </div>
        </section>
        <section className="description-parcelle">
          <div
            className="card-image-parcelle"
            style={{ backgroundImage: `url(${mais})` }}
          >
            <h1>Parcelle {id_parcelle}</h1>
          </div>

          <div className="apropos">
            <h1>Déscription</h1>
            <p>
              Details of Parcelle N° {id_parcelle?id_parcelle:'inknown'} 
            </p>
          </div>
        </section>

        <section className="description-culture">
          <div className="apropos">
            <h1>Type Agriculture</h1>
            {
              dataCategorie?.map((categorie,index)=>(
                <p key={index}>{categorie?.nomcategorie}</p>
              ))
            }
          </div>
        </section>
        <div className="retour">
          <a className="lien-retour" onClick={handleButtonClick}>
            <img src={right} alt="" />
          </a>
        </div>
      </main>
    </>
  );
};
export default PartielDetails;
