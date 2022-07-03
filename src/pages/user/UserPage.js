import React, { useEffect, useState } from "react";
import serviceCallApi from "../../services/serviceApi";
import { userData } from "../../utils";
const UserPage = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    getOrder();
  }, []);
  const getOrder = async () => {
    try {
      const res = await serviceCallApi(
        "order",
        "GET",
        null,
        null,
        userData.data.token
      );
      setOrderData(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Hello: {userData.data.name}</h1>
    </div>
  );
};

export default UserPage;
