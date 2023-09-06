import { TableHeader } from "components/TableHeader/TableHeader";
import { TableRow } from "components/TableRow/TableRow";
import { useState } from "react";

export default function ShipmentsTable({ children }) {
     const [shipments, setShipments] = useState([]);
//   localStorage.setItem('list', JSON.stringify(shipments));

  const handleDelete = orderNo => {
    setShipments(prevShipments => {
      return prevShipments.filter(shipments => shipments.orderNo !== orderNo);
    });
  };

    return <table>
        <TableHeader />
        <TableRow data={shipments} onDelete={handleDelete} />
        </table>;
}
