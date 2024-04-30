import React from "react";
import { NavLink } from "react-router-dom";

const CarouselProduct = ({ product }) => {
  return (
    <div>
      <NavLink
        to={{
          pathname: `/product/${product.id}`,
        }}
        className={"text-decoration-none"}
      >
        <div className="card w-20 m-2" style={{ height: 300 }}>
          <img
            src={product.images[0]}
            className="card-img-top p-2 "
            alt={product.title}
            style={{ height: 200, borderRadius: 20 }}
          />
          <div className="card-body"></div>
          <div className="card-footer text-center bg-dark text-white h-25 d-flex align-items-center justify-content-center">
            <h6>
              {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
            </h6>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CarouselProduct;
