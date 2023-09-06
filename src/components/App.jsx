// import * as API from './servises/Api';
import ShipmentsTable from './ShipmentsTable/ShipmentsTable';
import { TableHeader } from './TableHeader/TableHeader';
import { TableRow } from './TableRow/TableRow';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
  const [shipments, setShipments] = useState(data);
  localStorage.setItem('list', JSON.stringify(shipments));

  const handleDelete = orderNo => {
    setShipments(prevShipments => {
      return prevShipments.filter(shipments => shipments.orderNo !== orderNo);
    });
  };

  return (
    <div>
      <ShipmentsTable>
        <TableHeader />
        <TableRow data={shipments} onDelete={handleDelete} />
      </ShipmentsTable>
    </div>
  );
};
