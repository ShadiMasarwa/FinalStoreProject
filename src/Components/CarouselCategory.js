import { NavLink } from "react-router-dom";

export const CarouselCategory = ({ category, indx }) => {
  return (
    <div>
      <NavLink
        to={{
          pathname: `/category/${indx}`,
        }}
        className={"text-decoration-none"}
      >
        <div className="card w-20 m-2" style={{ height: 300 }}>
          <img
            src={category.thumbnail}
            alt={category.name}
            className="card-img-top p-2 "
            style={{ height: 200, borderRadius: 20 }}
          />
          <div className="card-body"></div>
          <div className="card-footer text-center bg-dark text-white h-25 d-flex align-items-center justify-content-center">
            <h6>
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </h6>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
