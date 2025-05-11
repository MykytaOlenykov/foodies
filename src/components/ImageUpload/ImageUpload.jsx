import React, { useState, useRef, useEffect } from 'react';
import MockOfPicture from '../../assets/images/mock-of-picture.svg?react';
import * as styles from './ImageUpload.module.css';
import { ErrorMessage } from "formik";
import { TypographyError } from "../Typography/Typography.jsx";
import { useUncontrolled } from "../../hooks/useUncontrolled.js";

/**
 * @param {Object} props
 * @param {File} props.value - The current file object
 * @param {File} [props.defaultValue] - The default file object
 * @param {(file: File) => void} props.onUpload - Callback function to handle file upload
 * @param {string} [props.name] - The name attribute for the input element
 * @param {string} [props.error] - Error message to display
 * @returns {JSX.Element}
 */
const ImageUpload = ({
  value,
  defaultValue = null,
  onUpload,
  name,
  error
}) => {
  const [file, setFile] = useUncontrolled(value, defaultValue, onUpload);
  const [previewUrl, setPreviewUrl] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleChange = (e) => {
    const picked = e.target.files[0];
    if (!picked) return;
    setFile(picked);
  };

  const openFileDialog = () => {
    inputRef.current.click();
  };

  return (
    <div className={styles.ImageUpload}>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        ref={inputRef}
        onChange={handleChange}
        style={{ display: 'none' }}
        name={name}
      />

      {previewUrl ? (
        <>
          <div className={styles.ImageUpload__preview}>
            <img
              src={previewUrl}
              alt="Selected"
              className={styles.ImageUpload__img}
            />

          </div>
          <button
            type="button"
            onClick={openFileDialog}
            className={styles.ImageUpload__replaceButton}
          >
            Upload another photo
          </button>
        </>
        ) : (
        <div
          className={styles.ImageUpload__placeholder}
          onClick={openFileDialog}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') openFileDialog(); }}
        >
          <div className={styles.ImageUpload__icon}><MockOfPicture /></div>
          <div className={styles.ImageUpload__text}>Upload a photo</div>
        </div>
      )}
      {error && <ErrorMessage name={name} component={TypographyError} /> }
    </div>
  );
};

export { ImageUpload };
