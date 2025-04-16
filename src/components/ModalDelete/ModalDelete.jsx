import css from "./ModalDelete.module.css";

export default function Modal({ message, onConfirm, onCancel }) {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <p>{message}</p>
        <div className={css.actions}>
          <button className={css.btn} onClick={onConfirm}>
            Confirm
          </button>
          <button className={css.btn} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}