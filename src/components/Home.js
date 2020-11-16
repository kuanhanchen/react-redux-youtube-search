import React, { useState } from "react";
import Modal from "./Modal";
import Calculator from "./Calculator";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
  };
  
  return (
    <div>
      <button onClick={toggleModal}>Open Calculator</button>
      {isModalOpen &&
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <Calculator />
        </Modal>
      }
    </div>
)};

export default Home;
