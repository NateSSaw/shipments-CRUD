import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteShipment } from 'redux/shipments/operations';
import css from './TableRow.module.css';
import { getSortedShipments } from 'redux/sort/selectors';
import { getShipmentsList } from 'redux/shipments/selectors';

export const TableRow = () => {
  const shipments = useSelector(getShipmentsList);
  const sortedShipmentsData = useSelector(getSortedShipments);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteShipment(id));
  };
const data = sortedShipmentsData.length >0 ? sortedShipmentsData : shipments
   
  return (
    <tbody className={css.body}>
      {data?.map(
        ({ id, date, customer, trackingNo, status, consignee }) => {
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{date}</td>
              <td>{customer}</td>
              <td>{trackingNo}</td>
              <td>{status}</td>
              <td>{consignee}</td>
              <td>
                <div className={css.container__btn}>
                  <Link className={css.edit} to={`/shipments/${id}`}></Link>

                  <button
                    type="button"
                    className={css.delete}
                    onClick={() => handleDelete(id)}
                  ></button>
                </div>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};
