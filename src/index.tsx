import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// Vérifiez si l'élément avec l'id "page" existe
const container = document.getElementById('page');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion

if (container) {
    // Créez le root seulement si l'élément DOM existe
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
  console.error('Le conteneur DOM avec l\'id "page" n\'a pas été trouvé.'); // eslint-disable-line no-console
}

serviceWorkerRegistration.unregister();
reportWebVitals();


