import "./Modal.css";
import InsideModal from "./InsideModal/InsideModal";
import { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [insideModal, setInsideModal] = useState(false);
  const [text, setText] = useState("");

  const handleModal = () =>{
    setModal(true)
    setText('')
  }
  return (
    <>
      <section className="container">
        {modal &&  (
          <InsideModal
            modal={modal}
            setModal={setModal}
            insidemodal={insideModal}
            setInsideModal={setInsideModal}
            text={text}
            setText={setText}
          />
        )}
        <button onClick={handleModal} className="btn_container">
          Open Confirmation Modal
        </button>
        <p className="text__">{text}</p>
      </section>
    </>
  );
};

export default Modal;
