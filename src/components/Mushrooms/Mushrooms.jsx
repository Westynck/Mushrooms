import React, { useContext } from "react";
import { ApiContext } from "../../Context/ApiContext";

import axios from "axios";

// import PropTypes from "prop-types";

import styles from "./Mushrooms.module.scss";

function Mushrooms({
  mushroom: { image, title, _id, liked },
  updateMushroom,
  deleteMushroom,
}) {
  const API_URL = useContext(ApiContext);

  async function handleClickLike() {
    try {
      const response = await axios.patch(`${API_URL}/${_id}`, {
        liked: !liked,
      });
      if (response) {
        const { data } = response;
        updateMushroom(data);
        console.log(response.data.liked);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleClickDelete(e) {
    e.stopPropagation();
    try {
      const response = await axios.delete(`${API_URL}/${_id}`);
      if (response) {
        deleteMushroom(_id);
        console.log(response.config.method);
      }
    } catch (error) {
      console.log("Error deleting mushroom");
    }
  }

  return (
    <div className={styles.mushroom}>
      <i onClick={handleClickDelete} className="fa-solid fa-xmark"></i>
      <div className={styles.imageMushroom}>
        <img src={image} alt={title} />
      </div>
      <div
        onClick={handleClickLike}
        className={`${styles.mushroomTitle} d-flex flex-column justify-content-center align-items-center `}
      >
        <h3 className="mb-10">{title}</h3>
        <i className={`fa-solid fa-heart  ${liked ? "text-primary" : ""}`} />
      </div>
    </div>
  );
}
Mushrooms.propTypes = {};

Mushrooms.defaultProps = {};

export default React.memo(Mushrooms);
