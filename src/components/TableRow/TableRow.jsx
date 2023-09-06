import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const TableRow = ({ data, onDelete }) => {
  const [openedRow, setOpenedRow] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);

  const handleShow = (
    orderNo,
    date,
    customer,
    trackingNo,
    status,
    consignee
  ) => {
    setIsShowModal(true);
    setOpenedRow({ orderNo, date, customer, trackingNo, status, consignee });
  };

  const closeModal = () => setIsShowModal(false);

  return (
    <tbody>
      {data.map(
        ({ orderNo, date, customer, trackingNo, status, consignee }) => {
          return (
            <tr key={orderNo}>
              <td>{orderNo}</td>
              <td>{date}</td>
              <td>{customer}</td>
              <td>{trackingNo}</td>
              <td>{status}</td>
              <td>{consignee}</td>
              <td>
                <button
                  type="button"
                  className="edit"
                  onClick={() =>
                    handleShow(
                      orderNo,
                      date,
                      customer,
                      trackingNo,
                      status,
                      consignee
                    )
                  }
                ></button>
                {isShowModal && (
                  <Modal data={openedRow} closeModal={closeModal}></Modal>
                )}
                <button
                  type="button"
                  className="delete"
                  onClick={() => onDelete(orderNo)}
                ></button>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};
