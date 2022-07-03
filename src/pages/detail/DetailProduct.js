import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import serviceCallApi from "../../services/serviceApi";
import "./../../assets/css/style.css";
import { useCart } from "react-use-cart";
import MainLayout from "./../main";

const DetailProduct = () => {
  const [product, setProduct] = useState([]);
  const [quantity, SetQuantity] = useState(1);
  const { product_id } = useParams();
  const { addItem } = useCart();

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    try {
      const response = await serviceCallApi(`products/${product_id}`, "GET");

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addItemToCart = () => {
    const data = {
      id: product.id,
      name: product.name,
      price: product.price,
      avatar: product.avatar,
      detail: product.detail,
      cate_id: product.cate_id,
      product_id: product.id
    };
    addItem(data, parseInt(quantity));
  };
  const LayoutDetailPage = () => {
    return (
      <main className="mt-5 pt-4">
        <div className="container dark-grey-text mt-5">
          {/*Grid row*/}
          <div className="row wow fadeIn">
            {/*Grid column*/}
            <div className="col-md-6 mb-4">
              <img src={product.avatar} className="img-fluid" alt="" />
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-6 mb-4">
              {/*Content*/}
              <div className="p-4">
                <div className="mb-3">
                  <span className="badge purple mr-1">Category 2</span>
                </div>
                <p className="lead">
                  <span>{product.price} VND</span>
                </p>
                <p className="lead font-weight-bold">Description</p>
                <p>{product.detail}</p>
                <div className="d-flex justify-content-left">
                  {/* Default input */}
                  <input
                    type="number"
                    defaultValue={quantity}
                    className="form-control"
                    style={{ width: "100px" }}
                    onChange={(e) => SetQuantity(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-primary btn-md my-0 p"
                    onClick={() => addItemToCart()}
                  >
                    Add to cart
                    <i className="fas fa-shopping-cart ml-1" />
                  </button>
                </div>
              </div>
              {/*Content*/}
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
          <hr />
        </div>
      </main>
    );
  };

  return (
    <>
      <MainLayout content={<LayoutDetailPage />} />
    </>
  );
};

export default DetailProduct;
