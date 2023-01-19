import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { ApiContext } from "./context/ApiContext";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* J'entoure mon composant App de mon contexte ApiContext et je lui passe en valeur l'URL de mon API  pour pouvoir la récupérer dans mon composant Main  et pouvoir l'utiliser dans ma fonction asynchrone pour récupérer mes données de l'API */}
    <ApiContext.Provider value="https://restapi.fr/api/mushrooms">
      <App />
    </ApiContext.Provider>
  </React.StrictMode>
);
