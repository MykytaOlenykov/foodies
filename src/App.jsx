import { useState } from "react";
import Modal from "./components/Modal/Modal"; // Предполагаем, что Modal компонент работает корректно

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Изначально модалка закрыта

  const toggleModal = () => {
    setIsModalOpen((prev)=> {
      return !prev
    }); 
  };


  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isModalOpen && <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <h2>Modal Content</h2>
        <p>This is some content inside the modal!</p>
      </Modal>}
      
      
    </div>
  );
};
