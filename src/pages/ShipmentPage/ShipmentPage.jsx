import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import getShipmentByNo from 'services/getShipment';
import { useState } from 'react';
import { changeShipmentData } from 'redux/shipments/operations';
import css from './ShipmentPage.module.css'

export default function ShipmentPage() {
    const [formData, setFormData] = useState('');
    const [isFormChanged, setIsFormChanged] = useState(false);
    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getShipmentByNo(id).then(data => {
            if (data) {
                setFormData(data);
            } else {
                setFormData('');
                navigate('/notFound');
            }
        })
    }, [id, navigate]);

    const handleInputChange =  (e) => {
        const { name, value } = e.target;
        if (formData[name] !== value) {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
            console.log(formData);
            setIsFormChanged(true);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(changeShipmentData(formData))
        setIsFormChanged(false);
    };

    return (
        <div className={css.block}>
        <div className={css.page__container}>
                <h2 className={css.shipment__title}>Shipment Details</h2>
                
            <form onSubmit={onSubmit} className={css.shipment__form}>
                <div className={css.shipment__container}>
                    <label htmlFor="id" className={css.shipment__lable}>orderNo:</label>
                    <input
                        type="text"
                        id="id"
                        disabled
                        name="id"
                        value={formData.id || ""}
                        className={css.shipment__input}
                    />
                </div>
                <div className={css.shipment__container}>
                    <label htmlFor="date" className={css.shipment__lable}>date:</label>
                    <input
                        type="text"
                        id="date"
                        name="date"
                        value={formData.date || ""}
                        onChange={handleInputChange}
                        className={css.shipment__input}
                    />
                </div>
                <div className={css.shipment__container}>
                    <label htmlFor="customer" className={css.shipment__lable}>customer:</label>
                    <input
                        type="text"
                        id="customer"
                        name="customer"
                        value={formData.customer || ""}
                        onChange={handleInputChange}
                        className={css.shipment__input}
                    />
                </div>
                <div className={css.shipment__container}>
                    <label htmlFor="trackingNo" className={css.shipment__lable}>trackingNo:</label>
                    <input
                        type="text"
                        id="trackingNo"
                        name="trackingNo"
                        value={formData.trackingNo || ""}
                        onChange={handleInputChange}
                        className={css.shipment__input}
                    />
                </div>
                <div className={css.shipment__container}>
                    <label htmlFor="consignee" className={css.shipment__lable}>consignee:</label>
                    <input
                        type="text"
                        id="consignee"
                        name="consignee"
                        value={formData.consignee || ""}
                        onChange={handleInputChange}
                        className={css.shipment__input}
                    />
                </div>
                <div className={css.shipment__container}>
                    <label htmlFor="status" className={css.shipment__lable}>status:</label>
                    <input
                        type="text"
                        id="status"
                        name="status"
                        value={formData.status || ""}
                        onChange={handleInputChange}
                        className={css.shipment__input}
                    />
                </div>
                <button type="submit" disabled={!isFormChanged} className={css.shipment__submit}>Edit</button>
            </form>
            </div>
        </div>)
};
