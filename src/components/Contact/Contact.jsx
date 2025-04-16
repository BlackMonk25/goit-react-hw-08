import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import Modal from "../ModalDelete/ModalDelete";
import toast from "react-hot-toast";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => {
        toast.success(`Contact "${contact.name}" deleted successfully!`);
      })
      .catch(() => {
        toast.error("Failed to delete contact. Please try again.");
      })
      .finally(() => {
        setIsModalOpen(false);
      });
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.contact}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <FaUser />
          {contact.name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt />
          {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
      {isModalOpen && (
        <Modal
          message={`Are you sure you want to delete ${contact.name}?`}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}




