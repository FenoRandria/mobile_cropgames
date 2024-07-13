// import React, { useEffect, useState } from 'react'; // Add this import statement
// import LogoWhiteImage from '../assets/img/logoWhite.png';
// import right from '../assets/img/right.png';
// import MenuSlider from '../components/MenuSlider';
// import { ApiUrl } from '../ApiUrl';
// import axios from 'axios';

// const AddTerrain: React.FC = () =>{
//     const [id_proprietaire,setId_proprietaire] = useState<any>();
//     const retour = () => {
//         window.location.href = "/accueil";
//       };
//       const [desc_terrain,setDesc_terrain] = useState<any>();
//       const [coord_location,setCoord_location] = useState<any>();
//       const [surface,setSurface] = useState<any>();
//       const [nombre_parcelle,setNombre_parcelle] = useState<any>();
 
//       const apiUrl  = ApiUrl();
//       const [error,setError] = useState<any>(null);
//       useEffect(()=>{
//         const token = window.sessionStorage.getItem("token");
//         const config = {
//             headers: { Authorization: `Bearer ${token}` }
//         };
//         axios.post(`${apiUrl}proprietaires/auth`, { }, config)
//         .then(function (response) {
//             if (response.status==200) {
//               setId_proprietaire(response.data.data)
//               console.table(response.data.data); // eslint-disable-line no-console
//             }
//           })
//           .catch(function (error) {
//             setError(error.response.data.message)
//             console.log(error.response.data.message); // eslint-disable-line no-console
    
//           });
//       });
//       const addTerrain = () =>{
//           axios.post(`${apiUrl}terrains`, {
//             id_proprietaire: id_proprietaire,
//             desc_terrain: desc_terrain,
//             coord_location: coord_location,
//             surface: surface,
//             nombre_parcelle: nombre_parcelle,
//           }).
//           then(function (response) {
//             if (response.status==200) {
//               console.table(response.data.data); // eslint-disable-line no-console
//               window.location.href = "/landList"
//             }
//           })
//           .catch(function (error) {
//             setError(error.response.data.message)
//             console.log(error.response.data.message); // eslint-disable-line no-console
//           });
//       }
//     return (<>
//         <MenuSlider/>
//         <main>
//         <div className="en-tete">
//             <div className="logo">
//                 <img src={LogoWhiteImage} alt=""/>
//             </div>
//             <div className="title">
//                 <h1>Add new Ground</h1>
//                 <p style={{color:'red'}}>{error}</p>
//             </div>
//         </div>
//         <div className="formulaire">
//             <span className="borderLine"></span>
//             <form onSubmit={(e) => { e.preventDefault(); addTerrain(); }}>
//                 <input className="inputBoxland" value={desc_terrain} onChange={(e) => setDesc_terrain(e.target.value)} type="text" name="" id="1" placeholder="Decription*" required/>
//                 <input className="inputBoxland" value={coord_location} onChange={(e) => setCoord_location(e.target.value)} type="text" name="" id="2" placeholder="Coordonner*" required/>
//                 <input className="inputBoxland" value={surface} onChange={(e) => setSurface(e.target.value)} type="number" name=""  step="0.01" min="0"  id="1" placeholder="surface*" required/>
//                 <input className="inputBoxland" defaultValue={nombre_parcelle} onChange={(e) => setNombre_parcelle(e.target.value)} min="0" max={20} type="number" name="" id="2" placeholder="Number parcelle"/>
//                 <input className="inputBoxland" defaultValue={nombre_parcelle} onChange={(e) => setNombre_parcelle(e.target.value)} min="0" max={20} type="number" name="" id="2" placeholder="Number parcelle"/>
//                 <div className="inputBoxland">
//                     <input  type="file" accept="image/*" name=""/>
//                 </div> 
//                 <input type="submit" value="Add Ground"/>
//             </form>
//         </div>
//         <div className="retour">
//             <a className="lien-retour" onClick={retour}>
//                 <img src={right} alt=""/>
//             </a>
//         </div>
//     </main> 
//     </>
//     );
//   }
//   export default AddTerrain;

import React, { useEffect, useState } from 'react';
import LogoWhiteImage from '../assets/img/logoWhite.png';
import right from '../assets/img/right.png';
import MenuSlider from '../components/MenuSlider';
import { ApiUrl } from '../ApiUrl';
import axios from 'axios';

const AddTerrain: React.FC = () => {
  const [id_proprietaire, setId_proprietaire] = useState<number | null>(null);
  const [desc_terrain, setDesc_terrain] = useState<string>('');
  const [coord_location, setCoord_location] = useState<string>('');
  const [surface, setSurface] = useState<number | null>(null);
  const [nombre_parcelle, setNombre_parcelle] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = ApiUrl();

  const retour = () => {
    window.location.href = "/accueil";
  };

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios.post(`${apiUrl}proprietaires/auth`, {}, config)
      .then(response => {
        if (response.status === 200) {
          setId_proprietaire(response.data.data);
          console.table(response.data.data); // eslint-disable-line no-console
        }
      })
      .catch(error => {
        setError(error.response.data.message);
        console.log(error.response.data.message); // eslint-disable-line no-console
      });
  }, [apiUrl]);

  const addTerrain = () => {
    axios.post(`${apiUrl}terrains`, {
      id_proprietaire: id_proprietaire,
      desc_terrain: desc_terrain,
      coord_location: coord_location,
      surface: surface,
      nombre_parcelle: nombre_parcelle,
    })
      .then(response => {
        if (response.status === 200) {
          console.table(response.data.data); // eslint-disable-line no-console
          window.location.href = "/landList";
        }
      })
      .catch(error => {
        setError(error.response.data.message);
        console.log(error.response.data.message); // eslint-disable-line no-console
      });
  };

  return (
    <>
      <MenuSlider />
      <main>
        <div className="en-tete">
          <div className="logo">
            <img src={LogoWhiteImage} alt="" />
          </div>
          <div className="title">
            <h1>Add new Ground</h1>
            <p style={{ color: 'red' }}>{error}</p>
          </div>
        </div>
        <div className="formulaire">
          <span className="borderLine"></span>
          <form onSubmit={(e) => { e.preventDefault(); addTerrain(); }}>
            <input className="inputBoxland" value={desc_terrain} onChange={(e) => setDesc_terrain(e.target.value)} type="text" placeholder="Description*" required />
            <input className="inputBoxland" value={coord_location} onChange={(e) => setCoord_location(e.target.value)} type="text" placeholder="Coordinates*" required />
            <input className="inputBoxland" value={surface || ''} onChange={(e) => setSurface(Number(e.target.value))} type="number" step="0.01" min="0" placeholder="Surface*" required />
            <input className="inputBoxland" value={nombre_parcelle || ''} onChange={(e) => setNombre_parcelle(Number(e.target.value))} type="number" min="0" max={20} placeholder="Number of parcels" />
            <div className="inputBoxland">
              <input type="file" accept="image/*" />
            </div>
            <input type="submit" value="Add Ground" />
          </form>
        </div>
        <div className="retour">
          <a className="lien-retour" onClick={retour}>
            <img src={right} alt="" />
          </a>
        </div>
      </main>
    </>
  );
};

export default AddTerrain;
