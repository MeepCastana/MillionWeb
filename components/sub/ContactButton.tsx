// ModalButton.tsx
import React, { useEffect } from "react";
import ContactForm from "./ContactForm";

const ModalButton: React.FC = () => {
  useEffect(() => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        modal.close();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const openModal = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    modal.showModal();
  };

  return (
    <>
      <button className="btn bg-purple-700 text-white hover:bg-purple-900"  onClick={openModal}>
        Hire Us
      </button>
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box bg-opacity-60 backdrop-blur-md">
          <ContactForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalButton;
