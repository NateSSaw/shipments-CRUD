import { useSelector } from 'react-redux';
import { getShipmentsList } from 'redux/shipments/selectors';

export const LoadMoreBtn = ({ page, onNextPage, onPrevPage }) => {

    const shipments = useSelector(getShipmentsList);

    return <div className="center">
      {page>1 && <button className="load" type="button" onClick={onPrevPage}>Prev Page</button>}
      {shipments?.length > 0 && page<10 && <button className="load" type="button" onClick={onNextPage}>Next Page</button>}
      </div>;
  };