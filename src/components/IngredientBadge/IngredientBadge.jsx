import React from "react";
import * as styles from "./IngredientBadge.module.css";
import { Image } from "../Image/Image";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import XIcon from "../../assets/icons/x.svg?react";

/**
 * @param {object} props
 * @param {string} props.imgURL — URL of the ingredient image.
 * @param {string} props.name — Name of the ingredient.
 * @param {string} props.measure — Measure string to display.
 * @param {() => void} [props.onDelete] — Optional delete handler.
 */
const IngredientBadge = ({ imgURL, name, measure, onDelete }) => {
  return (
    <div className={styles.IngredientBadge}>
      <div className={styles.imageWrapper}>
        <Image src={imgURL} alt={name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <span className={styles.name} title={name}>
          {name}
        </span>

        <span className={styles.measure} title={measure}>
          {measure}
        </span>
      </div>

      {onDelete && (
        <div className={styles.deleteButton}>
          <ButtonIcon icon={<XIcon />} onClick={onDelete} />
        </div>
      )}
    </div>
  );
};

export { IngredientBadge };
