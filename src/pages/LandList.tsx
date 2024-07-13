import React, { useEffect, useState } from 'react'; // Add this import statement
import LogoWhiteImage from '../assets/img/logoWhite.png';
import MenuSlider from '../components/MenuSlider';
import CardList from '../components/CardList';
import { ApiUrl } from '../ApiUrl';
import axios from 'axios';
const LandList: React.FC = () =>{
    const [data, setData] = useState<any[]>([]);
    const apiUrl  = ApiUrl();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${apiUrl}terrains`);
          console.table(response.data.data);
          setData(response.data.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
        }
      };
      fetchData();
    }, []);
    return (
        <>
        <MenuSlider/>
        <main>
            <section className="en-tete">
                <div className="logo">
                    <img src={LogoWhiteImage} alt=""/>
                </div>
                <div className="title">
                    <h1>Land List</h1>
                </div>
            </section>
            <section className="card-list">
              {
                data.map((terrain,index)=>(
                  <CardList key={index} partielle={"Terrain "+terrain.id_terrain} texte="Show details" id_terrain={terrain.id_terrain} id_parcelle=''/>
                ))
              }
            </section>
        </main>
        </>
    );
  }
  export default LandList;