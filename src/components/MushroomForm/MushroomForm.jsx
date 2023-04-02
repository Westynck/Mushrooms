import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ApiContext } from "../../Context/ApiContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// import PropTypes from "prop-types";

import styles from "./mushroomFormStyles.module.scss";

function MushroomForm() {
  const API_URL = useContext(ApiContext);

  const defaultValues = {
    title: "",
    image: "",
  };

  const mushroomSchema = yup.object({
    title: yup
      .string()
      .required("Le nom du champignon doit être renseigné")
      .min(4, "Le nom doit etre explicite")
      .max(10, "le nom doit être succinct"),
    image: yup
      .string()
      .required("Il faut renseigner une image")
      .url("L'image doit être un lien valide"),
  });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(mushroomSchema),
  });

  async function submit(values) {
    console.log(values);
    try {
      clearErrors();
      const response = await axios.post(API_URL, values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response) {
        reset();
      } else {
        setError("generic", {
          type: "deneric",
          message: "Une erreur est survenue",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`d-flex flex-column card p-20 ${styles.mushroomForm} `}
    >
      <h2 className="mb-20">Ajout d'un champignon</h2>
      <div className="d-flex flex-column mb-20">
        <label>Nom du champignon </label>
        <input
          className={`${styles.inputForm}`}
          {...register("title")}
          type="text"
        />
        {errors.title && <p className="form-error">{errors.title.message}</p>}
      </div>
      <div className="d-flex flex-column mb-20">
        <label> Lien image du champignon </label>
        <input
          className={`${styles.inputForm}`}
          {...register("image")}
          type="text"
        />
        {errors.image && <p className="form-error">{errors.image.message}</p>}
      </div>
      {errors.generic && (
        <p className="form-error"> {errors.generic.message}</p>
      )}
      <div>
        <button disabled={isSubmitting} className="btn btn-primary">
          Sauvegarder
        </button>
      </div>
    </form>
  );
}
// MushroomForm.propTypes = {};

// MushroomForm.defaultProps = {};

export default React.memo(MushroomForm);
