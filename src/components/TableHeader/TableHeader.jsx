import { useState } from 'react';
import './TableHeader.module.css';
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
        <th
          onClick={() => {
            sortData('customer');
          }}
        >
          <span>CUSTOMER</span>
          <ArrowUp
            onClick={() => {
              sortData('customer');
            }}
          />
          <ArrowDown
            onClick={() => {
              sortData('customer');
            }}
          />
        </th>
        <th
          onClick={() => {
            sortData('trackingNo');
          }}
        >
          <span>TRACKINGNO</span>
          <ArrowUp
            onClick={() => {
              sortData('trackingNo');
            }}
          />
          <ArrowDown
            onClick={() => {
              sortData('trackingNo');
            }}
          />
        </th>
        <th
          onClick={() => {
            sortData('status');
          }}
        >
          <span>STATUS</span>
          <ArrowUp
            onClick={() => {
              sortData('status');
            }}
          />
          <ArrowDown
            onClick={() => {
              sortData('status');
            }}
          />
        </th>
        <th
          colSpan="2"
          onClick={() => {
            sortData('consignee');
          }}
        >
          <span>CONSIGNEE</span>
          <ArrowUp
            onClick={() => {
              sortData('consignee');
            }}
          />
          <ArrowDown
            onClick={() => {
              sortData('consignee');
            }}
          />
        </th>
      </tr>
    </thead>
  );
};
