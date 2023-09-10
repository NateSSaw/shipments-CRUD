import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteShipment } from 'redux/shipments/operations';
import { getShipmentsList } from 'redux/shipments/selectors';
import css from './TableRow.module.css'

export const TableRow = () => {
    const shipments = useSelector(getShipmentsList);
    const dispatch = useDispatch();

    const handleDelete = id => {
      dispatch(deleteShipment(id))
  }

  return (
    <tbody className={css.body}>
      {shipments && shipments.map(
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
                <Link
                  className={css.edit}
                  to={`/shipments/${id}`}
                ></Link>
            
                <button    
                  type="button"
                  className={css.delete}
                onClick={() => handleDelete(id)}
                ></button></div>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};
