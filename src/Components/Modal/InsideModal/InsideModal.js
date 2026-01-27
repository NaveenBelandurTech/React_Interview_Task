import "./InsideModal.css";

const InsideModal = ({  setInsideModal, setText ,setModal,modal}) => {
  const handleConfirm = () => {
    setInsideModal(true);
    setText("Confirm");
    setModal(!modal)
  };

  const handleCancel = () => {
    setInsideModal(false);
    setText("Cancelled");
    setModal(!modal)
  };



  return (
    <section className="inside_container">
      <div className="modal_box">
        <h3>Confirm Action</h3>
        <p>Are you sure want to proceed ? </p>
        <div className="btn_second_box">
          <button onClick={handleConfirm} className="btn_green">
            Confirm
          </button>
          <button onClick={handleCancel} className="btn_red">
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsideModal;
