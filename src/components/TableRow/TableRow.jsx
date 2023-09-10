import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getShipmentsList } from 'redux/shipments/selectors';

export const TableRow = () => {
    const shipments = useSelector(getShipmentsList);
    //   const deleteRow = () =>


 

  return (
    <tbody>
      {shipments.length>0 && shipments?.map(
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
                <Link
                  className="edit"
                  to={`/shipments/${id}`}
                ></Link>
            
                <button
                  type="button"
                  className="delete"
                 
                ></button>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};
