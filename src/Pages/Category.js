import React from "react";
import Product from "../Components/Product";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Layout from "../Components/Layout";
import Missing from "../Components/Missing";

const Category = () => {
  const { id } = useParams();
  const { categories, storeProducts } = useContext(GlobalContext);

  return (
    <>
      <Layout>
        <div className="d-flex" style={{ minHeight: "75vh" }}>
          <div className="container">
            <div className="row ">
              {storeProducts.length > 0 && categories.length > id ? (
                storeProducts.map((el) =>
                  el.category === categories[id].name ? (
                    <Product {...el} sender="main" key={el.id} />
                  ) : (
                    ""
                  )
                )
              ) : (
                <Missing>No Such Category</Missing>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Category;
