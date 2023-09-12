import { useState } from 'react';
import css from './TableHeader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getShipmentsList } from 'redux/shipments/selectors';
import { sortShipmentsData } from 'redux/sort/slice';
import ArrowDown from 'components/ArrowDown/ArrowDown';
import ArrowUp from 'components/ArrowUp/ArrowUp';
export const TableHeader = () => {
  const [directionSort, setDirectionSort] = useState(true);
  const shipmnetsData = useSelector(getShipmentsList);
  const dispatch = useDispatch();

  const sortData = field => {
    const sortedData = [...shipmnetsData];
    if (directionSort) {
      if (typeof field === 'number') {
        sortedData.sort((a, b) => {
          return a[field] - b[field];
        });
      } else if (typeof field === 'string') {
        sortedData.sort((a, b) => {
          return a[field].localeCompare(b[field]);
        });
      }
    } else {
      if (typeof field === 'number') {
        sortedData.sort((a, b) => {
          return b[field] - a[field];
        });
      } else if (typeof field === 'string') {
        sortedData.sort((a, b) => {
          return b[field].localeCompare(a[field]);
        });
      }
    }
    dispatch(sortShipmentsData(sortedData));
    setDirectionSort(prevState => !prevState);
  };

  return (
    <thead>
      <tr>
        <th>ORDERNO</th>
        <th>DELIVERYDATE</th>
        <th>
          <span className={css.customer}>CUSTOMER</span>
          <button
            className={css.svg}
            type="button"
            onClick={() => {
              sortData('customer');
            }}
          >
            <ArrowUp />
          </button>
          <button
            className={css.svg}
            type="button"
            onClick={() => {
              sortData('customer');
            }}
          >
            <ArrowDown />
          </button>
        </th>
        <th>
          <span className={css.trackingNo}>TRACKINGNO</span>
          <button
            className={css.svg}
            type="button"
            onClick={() => {
              sortData('trackingNo');
            }}
          >
            <ArrowUp />
          </button>
          <button
            className={css.svg}
            type="button"
            onClick={() => {
              sortData('trackingNo');
            }}
          >
            <ArrowDown />
          </button>
        </th>
        <th>
          <span className={css.status}>STATUS</span>
          <button
            className={css.svg}
            type="button"
            onClick={() => {
              sortData('status');
            }}
          >
            <ArrowUp />
          </button>
          <button
            className={css.svg}
            type="button"
            onClick={() => {
              sortData('status');
            }}
          >
            <ArrowDown />
          </button>
        </th>
              <th colSpan="2">
                  <span className={css.consignee}>CONSIGNEE</span>

          <button
            className={css.svg}
            type="button"
            onClick={() => {
              sortData('consignee');
            }}
          >
            <ArrowUp />
          </button>
          <button
            className={css.svg}
            type="button"
            onClick={() => {
              sortData('consignee');
            }}
          >
            <ArrowDown />
          </button>
        </th>
      </tr>
    </thead>
  );
};
