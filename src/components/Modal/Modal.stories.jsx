import { useState } from "react";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen ?? true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal {...args} isOpen={isOpen} closeModal={closeModal}>
        <div style={{ padding: "1rem" }}>
          <h2>Modal Title</h2>
          <p>This is modal content.</p>
        </div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};
