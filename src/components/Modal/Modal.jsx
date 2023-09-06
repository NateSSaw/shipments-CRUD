import { useEffect } from 'react';
import css from './Modal.module.css';
export const Modal = ({ closeModal, data }) => {
  const { orderNo, date, customer, trackingNo, status, consignee } = data;
  useEffect(() => {
    const handlePressESC = e => {
      if (e.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handlePressESC);
    return () => {
      window.removeEventListener('keydown', handlePressESC);
    };
  }, [closeModal]);

  return (
    <div className={css.modal}>
      <div className={css.modal__dialog}>
        <div className={css.modal__header}>
          <h2 className={css.modal__title}>Shipment Details</h2>
          <button
            type="button"
            className={css.btn__close}
            aria-label="Close"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <div className={css.modal__body}>
          <ul className={css.modal__list}>
            <li className={css.modal__item}>
              <h3 className={css.item__title}>orderNo</h3>
              <p className={css.item__data}>{orderNo}</p>
            </li>
            <li className={css.modal__item}>
              <h3 className={css.item__title}>date</h3>
              <p className={css.item__data}>{date}</p>
            </li>
            <li className={css.modal__item}>
              <h3 className={css.item__title}>customer</h3>
              <p className={css.item__data}>{customer}</p>
            </li>
            <li className={css.modal__item}>
              <h3 className={css.item__title}>trackingNo</h3>
              <p className={css.item__data}>{trackingNo}</p>
            </li>
            <li className={css.modal__item}>
              <h3 className={css.item__title}>consignee</h3>
              <p className={css.item__data}>{consignee}</p>
            </li>
            <li className={css.modal__item}>
              <h3 className={css.item__title}>status</h3>
              <p className={css.item__data}>{status}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
