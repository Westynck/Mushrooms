import axios from "axios";
import { data } from "./Mushrooms";



//cette fonction est appelée dans le fichier seed.js pour alimenter la base de données avec les données du fichier Mushrooms.js
export async function seedMushrooms() {
  try {
    const response = await axios.post("https://restapi.fr/api/mushrooms", data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}