import React from "react";
import LogoWhiteImage from "../assets/img/logoWhite.png";
import "./MenuSlider.css";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../assets/css/style.css";

function MenuSlider() {

  const accueil = () => {
    window.location.href ='/accueil';
  };
  const landDetails = () => {
    window.location.href ='/landDetails';
  };
  const landList = () => {
    window.location.href ='/landList';
  };
  const addTerrain = () => {
    window.location.href ='/addTerrain';
  };
  const presentation = () => {
    window.location.href ='/presentation';
  };

  return (
    <>
      <IonMenu
        contentId="main-content"
        style={{ background: "backDropBlur: (1px)" }}
      >
        <IonHeader>
          <IonToolbar className="titleHeader">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div
            className="button"
            style={{
              width: "100%",
              display: "flex",
              height: "70px",
              
              marginTop: "5px",
            }}
          >
            <a
              style={{
                width: "98%",
                margin: "0 auto",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}

              onClick={accueil}
            >
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#0e0e0e",
                  margin: "auto",
                }}
              >
                Accueil
              </p>
             
            </a>
          </div>
          <div
            className="button"
            style={{
              width: "100%",
              display: "flex",
              height: "70px",
              
              marginTop: "5px",
            }}
          >
            <a
              style={{
                width: "98%",
                margin: "0 auto",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}

              onClick={landDetails}
            >
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#0e0e0e",
                  margin: "auto",
                }}
              >
                Land Details
              </p>
             
            </a>
          </div>
          <div
            className="button"
            style={{
              width: "100%",
              display: "flex",
              height: "70px",
              
              marginTop: "5px",
            }}
          >
            <a
              style={{
                width: "98%",
                margin: "0 auto",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}

              onClick={addTerrain}
            >
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#0e0e0e",
                  margin: "auto",
                }}
              >
               Add Terrain
              </p>
             
            </a>
          </div>
          <div
            className="button"
            style={{
              width: "100%",
              display: "flex",
              height: "70px",
              
              marginTop: "5px",
            }}
          >
            <a
              style={{
                width: "98%",
                margin: "0 auto",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}

              onClick={landList}
            >
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#0e0e0e",
                  margin: "auto",
                }}
              >
              Land List
              </p>
             
            </a>
          </div>
          <div
            className="button"
            style={{
              width: "100%",
              display: "flex",
              height: "70px",
              letterSpacing: "11px",
              marginTop: "5px",
            }}
          >
            <a
              style={{
                width: "98%",
                margin: "0 auto",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}

              onClick={presentation}
            >
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#0e0e0e",
                  margin: "auto",
                }}
              >
                Log Out
              </p>
             
            </a>
          </div>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader style={{ boxShadow: "none", position: "absolute" }}>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonToolbar style={{ display: "none" }}>
            <IonTitle className="titleHeader">
              <div className="logo">
                <img src={LogoWhiteImage} alt="" />
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">gsjl;kdfjgkls;dfgjfld;j</IonContent>
      </IonPage>
    </>
  );
}

export default MenuSlider;
