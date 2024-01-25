import ReactDom from "react-dom";

const MODAL2_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translat(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

const Modal = ({ open, children, isClosed }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLE}></div>
      <div style={MODAL2_STYLE}>
        <button onClick={isClosed}>Close Modal</button>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
