import React from 'react';
import left from '../assets/img/left.png';
import partielVide from '../assets/img/partielVide.jpg';

interface CardListProps 
{
    partielle: string;
    texte: string;
    id_terrain: string;
    id_parcelle: string;
}
const CardList: React.FC<CardListProps> = (props) => {
  function versLandDetails() {
    if (props.id_parcelle===null || props.id_parcelle===undefined || props.id_parcelle==='') {
      window.localStorage.setItem("id_terrain",props.id_terrain);
      window.location.href = `/landDetails`
    } else {
      window.localStorage.setItem("id_parcelle",props.id_parcelle);
      window.location.href = `/partielDetails` 
    }
  }
  return (
    <div className="card" style={{backgroundImage: `url(${partielVide})`}}>
        <a className="link" onClick={versLandDetails}>
            <div className="context">
                <h1>{props.partielle}</h1>
                <p>{props.texte}</p>
            </div>
            <div className="icon">
            <img src={left} alt=""/>
            </div>
        </a>
    </div>  
  );
};

export default CardList;
