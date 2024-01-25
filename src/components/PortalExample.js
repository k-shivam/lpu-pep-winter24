import { useState } from "react";
import Modal from "./Modal";

const BUTTON_STYLE = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLE = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

const PortalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div style={BUTTON_STYLE}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} isClosed={onClose}>
          My Modal
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLE}>Other Content</div>
    </>
  );
};

export default PortalExample;
