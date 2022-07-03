import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import serviceCallApi from "../../services/serviceApi";
import { userData } from "../../utils";
import MainLayout from "../main";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { selectSignin } from "./../../features/login/loginSlice";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { loggedInUser } = useSelector(selectSignin);
  console.log(loggedInUser);
  const {
    isEmpty,
    emptyCart,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    //get thông tin từ form
    // get thông tin đơn hàng
    const orderData = {
      user_id: userData.data.id,
      full_name: data.full_name,
      phone: data.phone,
      address: data.address,
      item: items,
    };
    try {
      await serviceCallApi(
        "order",
        "POST",
        orderData,
        null,
        userData.data.token
      );
      setLoading(false);
      emptyCart();
      navigate("/thank");
    } catch (error) {
      console.log(error);
    }
  };

  if (isEmpty) return <p>Your cart is empty</p>;
  const LayoutCheckout = () => {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            {loading ? (
              <div className='text-center d-flex justify-content-center'>
                <ReactLoading
                  type='spin'
                  color='blue'
                  height={"20%"}
                  width={"20%"}
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                  <label>Họ tên</label>
                  <input
                    type='text'
                    readOnly
                    className='form-control'
                    defaultValue={loggedInUser ? loggedInUser.name : ""}
                    {...register("full_name", { required: true })}
                  />
                  <div className='text-danger'>
                    {errors.full_name && <span>This field is required</span>}
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <label>Email</label>
                  <input
                    type='email'
                    readOnly
                    className='form-control'
                    defaultValue={loggedInUser ? loggedInUser.email : ""}
                    {...register("email", { required: true })}
                  />
                </div>
                <div className='form-group mt-3'>
                  <label>Số điện thoại nhận hàng</label>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Nhập vào địa chỉ nhận hàng'
                    defaultValue=''
                    {...register("phone", { required: true })}
                  />
                  <div className='text-danger'>
                    {errors.phone && <span>This field is required</span>}
                  </div>
                </div>

                <div className='form-group mt-3'>
                  <label>Địa chỉ nhận hàng</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Nhập vào địa chỉ nhận hàng'
                    defaultValue=''
                    {...register("address", { required: true })}
                  />
                  <div className='text-danger'>
                    {errors.address && <span>This field is required</span>}
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <button type='submit' className='btn btn-success'>
                    Completed order
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className='col-4'>
            <h1>Cart ({totalUniqueItems})</h1>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.quantity} x {item.name} &mdash;
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button onClick={() => removeItem(item.id)}>&times;</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  return <MainLayout content={<LayoutCheckout />} />;
};

export default Checkout;
