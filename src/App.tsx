import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Presentation from './pages/Presentation';
import Accueil from './pages/Accueil';
import LandList from './pages/LandList';
import Register from './pages/Register';
import Login from './pages/Login';
import LandDetails from './pages/LandDetails';
import PartielDetails from './pages/PartielDetails';
import AddTerrain from './pages/AddTerrain';
import './assets/css/style.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/presentation">
          <Presentation />
        </Route>
        <Route exact path="/">
          <Redirect to="/presentation" />
        </Route>
        <Route exact path="/accueil">
          <Accueil />
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/landDetails">
          <LandDetails />
        </Route>
        <Route exact path="/landList">
          <LandList />
        </Route>
        <Route exact path="/partielDetails">
          <PartielDetails />
        </Route>
        <Route exact path="/addTerrain">
          <AddTerrain />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
