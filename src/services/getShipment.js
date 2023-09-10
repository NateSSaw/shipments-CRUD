import axios from 'axios';

const getShipmentByNo = async id => {
  try {
    const { data } = await axios.get(`/shipments/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getShipmentByNo;