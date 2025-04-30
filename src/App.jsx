
import { Route, Routes } from "react-router";
import { checkApiConnection } from "./services/api.js";
import { useEffect, useState } from "react";
import Modal from "./components/Modal/Modal.jsx";

export const App = () => {
   useEffect(() => {
    checkApiConnection()
      .then(() => console.log('✅ API is reachable'))
      .catch((err) => console.error('❌ API connection failed:', err));
  }, []);

const [isModalOpen, setIsModalOpen] = useState(false)

const toggleModal = () => {
  setIsModalOpen((prev)=> {
    return !prev
  }); 
};

  return (
    <div>
    <button onClick={toggleModal}>click</button>
      {isModalOpen && <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <p>ergjtnrsmtm</p>
      </Modal> }
    </div>
  );
};
