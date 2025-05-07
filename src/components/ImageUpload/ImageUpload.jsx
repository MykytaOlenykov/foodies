import React, { useState, useRef, useEffect } from 'react';
import MockOfPicture from '../../assets/images/mock-of-picture.svg?react';
import * as styles from './ImageUpload.module.css';

const ImageUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
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
    onUpload(picked);
  };

  const openFileDialog = () => {
    inputRef.current.click();
  };

  return (
    <div className={styles.ImageUpload}>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleChange}
        style={{ display: 'none' }}
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
    </div>
  );
};

export { ImageUpload };
