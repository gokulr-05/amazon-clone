import React from "react";
import "./product.css";
import { useSelector } from "react-redux";
import ProductItem from "../productItem/ProductItem";

const Product = () => {
  let productData = useSelector((state) => {
    return state.productSliceReducer.productData;
  });

  return productData?.length === 0 ? (
    <div className="no-products">
      <h2>No Products Found</h2>
    </div>
  ) : (
    <div className="product-area py-3">
      <div className="product-sec ">
        <div className="row gx-5 gy-3">
          {productData.map((val) => {
            return (
              <ProductItem
                key={val.id}
                id={val.id}
                title={val.title}
                price={val.price}
                ratings={val.ratings}
                pic={val.pic}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  // <div className="product-area py-3">
  //   <div className="product-sec ">
  //     <div className="row gx-5 gy-3">
  //       {productData.map((val) => {
  //         return (
  //           <ProductItem
  //             key={val.id}
  //             id={val.id}
  //             title={val.title}
  //             price={val.price}
  //             ratings={val.ratings}
  //             pic={val.pic}
  //           />
  //         );
  //       })}
  //     </div>
  //   </div>
  // </div>
};

export default Product;
