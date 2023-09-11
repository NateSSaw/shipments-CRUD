import { useState } from 'react';
import './TableHeader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getShipmentsList } from 'redux/shipments/selectors';
import Arrow from 'components/ArrowUp/Arrow/Arrow';
import { getSortedShipments } from 'redux/sort/selectors';
import { sortShipmentsData } from 'redux/sort/slice';
export const TableHeader = () => {
      const [fieldData, setFieldData] = useState('');
  const [directionSort, setDirectionSort] = useState(true);
    const shipmnetsData = useSelector(getShipmentsList);
    const sortList = useSelector(getSortedShipments);
    const dispatch = useDispatch()

    const sortData = field => {
        const sortedData = [...shipmnetsData];

        if (directionSort) {
            sortedData.sort((a, b) => {
                return a[field] > b[field] ? 1 : -1;
            });
        } else {
            sortedData.reverse((a, b) => {
                return a[field] > b[field] ? -1 : 1;
            });
        }
        
        if (sortData) {
            dispatch(sortShipmentsData(sortedData))
        }
        
        dispatch(sortShipmentsData(sortedData))
        setDirectionSort(prevState => !prevState);
        setFieldData(field);
       
    };
  return (
    <thead>
      <tr>
        <th
          onClick={() => {
            sortData('id');
          }}
        >
          ORDERNO
          {fieldData === 'id' ? <Arrow directionSort={directionSort} /> : null}
        </th>
        <th
          onClick={() => {
            sortData('date');
          }}
        >
          DELIVERYDATE
          {fieldData === 'date' ? (
            <Arrow directionSort={directionSort} />
          ) : null}
        </th>
        <th
          onClick={() => {
            sortData('customer');
          }}
        >
          CUSTOMER
          {fieldData === 'customer' ? (
            <Arrow directionSort={directionSort} />
          ) : null}
        </th>
        <th
          onClick={() => {
            sortData('trackingNo');
          }}
        >
          TRACKINGNO
          {fieldData === 'trakingNo' ? (
            <Arrow directionSort={directionSort} />
          ) : null}
        </th>
        <th
          onClick={() => {
            sortData('status');
          }}
        >
          STATUS
          {fieldData === 'status' ? (
            <Arrow directionSort={directionSort} />
          ) : null}
        </th>
        <th
          onClick={() => {
            sortData('consignee');
          }}
          colSpan="2"
        >
          CONSIGNEE
          {fieldData === 'consignee' ? (
            <Arrow directionSort={directionSort} />
          ) : null}
        </th>
      </tr>
    </thead>
  );
};
