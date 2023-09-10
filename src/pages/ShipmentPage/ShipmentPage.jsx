import { useEffect } from 'react';
import css from './ShipmentPage.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import getShipmentByNo from 'services/getShipment';
import { useState } from 'react';
import { changeShipmentData } from 'redux/shipments/operations';

export default function ShipmentPage() {
    const [formData, setFormData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);
    const {orderNo }= useParams();

  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        getShipmentByNo(orderNo).then(data => {
            if (data) {
                setFormData(data);
            } else {
                setFormData('');
                navigate('/notFound');
            }
        })
 }, [orderNo, navigate]);
     

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevData => ({
    ...prevData,
    [name]: value
  }));
    console.log(formData)
  setIsFormChanged(true);
};

    const onSubmit = (e) => {
        e.preventDefault();
    dispatch(changeShipmentData(orderNo ,formData)).then((response) => {
        console.log(response);
        setIsFormChanged(false);
      })
      .catch((error) => {
        console.log(error);
      });setIsFormChanged(false);
  };



    

  return (
   <>
    <form onSubmit={onSubmit}>
        <h2>Shipment Details</h2>
       
          <label htmlFor="id">Order No:</label>
          <input
            type="text"
            id="id"
            disabled
            name="id"
            value={formData.id || ""}
          />
       
     
          <label htmlFor="customer">Customer:</label>
          <input
            type="text"
            id="customer"
            name="customer"
            value={formData.customer || ""}
            onChange={handleInputChange}
          />
      
    
          <label htmlFor="trackingNo">Tracking No:</label>
          <input
            type="text"
            id="trackingNo"
            name="trackingNo"
            value={formData.trackingNo || ""}
            onChange={handleInputChange}
          />
       
        
          <label htmlFor="consignee">Consignee:</label>
          <input
            type="text"
            id="consignee"
            name="consignee"
            value={formData.consignee || ""}
            onChange={handleInputChange}
          />
       
    
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status || ""}
            onChange={handleInputChange}
          />
        
        <button type="submit" disabled={!isFormChanged}>Submit</button>
      </form>
    </>)
};
