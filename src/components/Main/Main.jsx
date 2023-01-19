import React, { useState, useEffect, useContext } from "react";
// J'importe mon contexte ApiContext pour pouvoir récupérer la valeur de l'URL de mon API stockée dans le contexte ApiContext
import { ApiContext } from '../../context/ApiContext';
import useAxiosData from "../../hooks/useAxiosData";
import Loading from "../Loading/Loading";
import Mushrooms from "../Mushrooms/Mushrooms";



// import PropTypes from "prop-types";



import styles from "./Main.module.scss";

function Main() {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  // J'utilise le hook useContext pour récupérer la valeur de l'URL de mon API stockée dans le contexte ApiContext
  const API_URL = useContext(ApiContext);

  const [[mushrooms, setMushrooms], loading] = useAxiosData(API_URL, page);


  function handleInput(e) {
    // Je récupère la valeur de l'input et je la stocke dans une constante filter
    const filter = e.target.value;
    // Ensuite ma constante est "filter" à mon hook useState pour stocker la valeur de l'input dans mon tableau filter et pouvoir l'utiliser dans ma méthode filter pour filtrer mes données de l'API en fonction de la valeur de l'input  et je la passe en minuscule pour que la recherche soit insensible à la casse  et je la trim pour supprimer les espaces avant et après la valeur de l'input
    setFilter(filter.trim().toLowerCase())

  }

  function updateMushroom(updatedMushroom) {
    // J'udpate mon tableau mushrooms avec la méthode map pour mettre à jour les données de l'API en fonction de l'id de l'objet qui est passé en paramètre de la fonction updateMushroom
    setMushrooms(
      mushrooms.map((m) => (m._id === updatedMushroom._id ? updatedMushroom : m))
    );
  }


  function deleteMushroom(_id) {
    setMushrooms(mushrooms.filter((m) => m._id !== _id));
  }




  return (
    <div className="flex-fill container  d-flex flex-column p-20">
      <h1 className="my-30"> Quelques champignons </h1>
      <div className={`card d-flex flex-fill flex-column p-20 mb-20 ${styles.contentCard} br`}>
        <div className={`d-flex flex-row justify-content-center align-item-center  my-30 ${styles.searchBar}`} >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input onInput={handleInput} className="flex-fill" type="text" placeholder="Rechercher" />
        </div>
        {loading // J'affiche le composant Loading si loading est à true et je cache le composant Loading si loading est à false  et je filtre mes données de l'API en fonction de la valeur de l'input et je les affiche ensuite avec la méthode map dans mon composant Mushrooms qui est un composant enfant de Main  et qui reçoit en props les données de l'API. 
          ? (
            <Loading />)
          : (
            <div className={styles.grid}>
              {mushrooms.filter((m) => m.title.toLowerCase().startsWith(filter)).map((m) => (
                <Mushrooms key={m._id} mushroom={m} updateMushroom={updateMushroom} deleteMushroom={deleteMushroom} />
              ))}
            </div>
          )}
        <div className="d-flex flex-row justify-content-center align-items-center p-20">
          <button onClick={() => setPage(page + 1)} className="btn btn-primary ">Voir plus</button>

        </div>
      </div>
    </div >
  );
}
Main.propTypes = {};

Main.defaultProps = {};

export default React.memo(Main);
