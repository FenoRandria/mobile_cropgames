// import React, { useEffect, useState } from "react";
// import LogoWhiteImage from "../assets/img/logoWhite.png";
// import left from "../assets/img/left.png";
// import partielVide from "../assets/img/partielVide.jpg";
// // import googleMaps from "../assets/img/Google-maps.jpg";
// import MenuSlider from "../components/MenuSlider";
// import CardList from "../components/CardList";
// import Map from "../components/Map";
// import { ApiUrl } from "../ApiUrl";
// import axios from "axios";
// // import { useParams } from "react-router";
// // import 'regenerator-runtime/runtime';
// declare global {
//   interface Window {
//     google: any;
//   }
// }
// const LandDetails: React.FC = () => {
//   const [id_terrain,setId_terrain] = useState(window.localStorage.getItem("id_terrain")?.toString()); 
//   const [data, setData] = useState<any[]>([]);
//   const [terrain, setTerrain] = useState<any>();
//   const apiUrl  = ApiUrl();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}parcelles/terrains/${id_terrain}`);
//         console.table(response.data.data);
//         setData(response.data.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des données:', error);
//       }
//     };
//     fetchData();
//   }, [id_terrain]);

//   useEffect(()=>{
//     axios.get(`${apiUrl}terrains/${id_terrain}`, {}).
//     then(function (response) {
//       if (response.status==200) {
//         console.table(response.data.data);
//         setTerrain(response.data.data);
//       }
//     })
//     .catch(function (error) {
//       console.log(error.response.data.message);
  
//     });
//   }, [id_terrain]);
  

//   return (
//     <>
//       <MenuSlider />
//       <div id="main">
//         <section className="logo_place">
//           <div className="logo_">
//             <img src={LogoWhiteImage} alt="" />
//           </div>
//           <div className="title_">
//             <h1>Land Details</h1>
//           </div>
//         </section>

//         <section className="description-terrain">
//           <div
//             className="card-image"
//             style={{ backgroundImage: `url(${partielVide})` }}
//           >
//             <h1>Terrain {id_terrain}</h1>
//           </div>
//           <div className="apropos">
//             <h1>Déscription</h1>
//             <p>
//             { terrain?.desc_terrain}
//             </p>
//           </div>
//         </section>

//         <section className="description-gps">
//           <div className="apropos">
//             <h1>GPS</h1>
//             { terrain?.coord_location}
//           </div>
//           <div
//             // id="map"
//             className="card"
//             // style={{ backgroundImage: `url(${googleMaps})` }}
//           >
//             <Map></Map>
//             <a className="link" href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12719.297751196034!2d47.5343259!3d-18.9013598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM3CsDM2JzIyLjMiTiAxMDDCsDIzJzU5LjQiVw!5e0!3m2!1sen!2sus!4v1628069225834!5m2!1sen!2sus">
//               <div className="context">
//                 <h1>MAPS</h1>
//                 <p>Show details</p>
//               </div>
//               <div className="icon">
//                 <img src={left} alt="" />
//               </div>
//             </a>
//           </div>
//         </section>

//         <section className="card-list">

//           <div className="nombre-parcelle">
//             <h1>Parcelles</h1>
//             <h1>{data?.length}</h1>
//           </div>
//           {
//             data?.map((parcelle, index)=>{
//               return(
//                 <CardList
//                   key={index}
//                   partielle={`Partiel ${parcelle.id_parcelle}`}
//                   texte="Show details"
//                   id_terrain={parcelle.id_terrain}
//                   id_parcelle={parcelle.id_parcelle}
//                 />
//               )
//             })
//           }
          
  
//         </section>
        
//       </div>
//     </>
//   );
// };
// export default LandDetails;
import React, { useEffect, useState } from "react";
import LogoWhiteImage from "../assets/img/logoWhite.png";
import left from "../assets/img/left.png";
import partielVide from "../assets/img/partielVide.jpg";
import MenuSlider from "../components/MenuSlider";
import CardList from "../components/CardList";
import Map from "../components/Map";
import { ApiUrl } from "../ApiUrl";
import axios from "axios";

const LandDetails: React.FC = () => {
  const [id_terrain] = useState<string | null>(window.localStorage.getItem("id_terrain"));
  const [data, setData] = useState<any[]>([]);  // eslint-disable-line @typescript-eslint/no-explicit-any
  const [terrain, setTerrain] = useState<{ desc_terrain: string; coord_location: string } | null>(null);
  const apiUrl = ApiUrl();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}parcelles/terrains/${id_terrain}`);
        console.table(response.data.data); // eslint-disable-line no-console
        setData(response.data.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error); // eslint-disable-line no-console
      }
    };
    fetchData();
  }, [id_terrain, apiUrl]);

  useEffect(() => {
    axios.get(`${apiUrl}terrains/${id_terrain}`)
      .then(response => {
        if (response.status === 200) {
          console.table(response.data.data); // eslint-disable-line no-console
          setTerrain(response.data.data);
        }
      })
      .catch(error => {
        console.log(error.response.data.message); // eslint-disable-line no-console
      });
  }, [id_terrain, apiUrl]);

  return (
    <>
      <MenuSlider />
      <div id="main">
        <section className="logo_place">
          <div className="logo_">
            <img src={LogoWhiteImage} alt="" />
          </div>
          <div className="title_">
            <h1>Land Details</h1>
          </div>
        </section>

        <section className="description-terrain">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${partielVide})` }}
          >
            <h1>Terrain {id_terrain}</h1>
          </div>
          <div className="apropos">
            <h1>Description</h1>
            <p>
              {terrain?.desc_terrain}
            </p>
          </div>
        </section>

        <section className="description-gps">
          <div className="apropos">
            <h1>GPS</h1>
            {terrain?.coord_location}
          </div>
          <div className="card">
            <Map />
            <a className="link" href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12719.297751196034!2d47.5343259!3d-18.9013598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM3CsDM2JzIyLjMiTiAxMDDCsDIzJzU5LjQiVw!5e0!3m2!1sen!2sus!4v1628069225834!5m2!1sen!2sus">
              <div className="context">
                <h1>MAPS</h1>
                <p>Show details</p>
              </div>
              <div className="icon">
                <img src={left} alt="" />
              </div>
            </a>
          </div>
        </section>

        <section className="card-list">
          <div className="nombre-parcelle">
            <h1>Parcelles</h1>
            <h1>{data.length}</h1>
          </div>
          {
            data.map((parcelle, index) => (
              <CardList
                key={index}
                partielle={`Partiel ${parcelle.id_parcelle}`}
                texte="Show details"
                id_terrain={parcelle.id_terrain}
                id_parcelle={parcelle.id_parcelle}
              />
            ))
          }
        </section>
      </div>
    </>
  );
};

export default LandDetails;
