import { createContext } from "react";


// je crée un contexte qui contient l'URL de l'API que je vais utiliser dans mon application  (ici, une API de champignons)
export const ApiContext = createContext('https://restapi.fr/api/mushrooms');