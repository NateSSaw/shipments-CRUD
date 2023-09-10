import  './TableHeader.module.css'
export const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>ORDERNO</th>
        <th>DELIVERYDATE</th>
        <th>CUSTOMER</th>
        <th>TRACKINGNO</th>
        <th>STATUS</th>
        <th colSpan="2">CONSIGNEE</th>
      </tr>
    </thead>
  );
};
