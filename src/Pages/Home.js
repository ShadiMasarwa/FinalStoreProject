import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import CarouselProduct from "../Components/CarouselProduct";
import Layout from "../Components/Layout";
import storeImage from "../images/store.jpg";
import Product from "../Components/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarouselCategory } from "../Components/CarouselCategory";

const Home = () => {
  const { randomProducts, categories, storeProducts } =
    useContext(GlobalContext);

  return (
    <div>
      <Layout>
        <div className="w-100">
          <div className="position-relative">
            <img
              src={storeImage}
              alt="store"
              style={{
                height: "300px",
                width: "100vw",
                objectFit: "cover",
              }}
            />
            <h1
              style={{
                position: "absolute",
                top: "40%",
                left: "35%",
                color: "white",
                backgroundColor: "rgba(13,113,172,0.7)",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              Shop online with confident...
            </h1>
          </div>

          <div className="container ">
            <h3 className="pt-5">Our Categories</h3>

            <Swiper
              spaceBetween={50}
              slidesPerView={5}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              style={{ height: 350 }}
            >
              {categories.map((el, indx) => {
                return (
                  <SwiperSlide>
                    <CarouselCategory category={el} indx={indx} key={indx} />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <h3 className="pt-5">Random Products</h3>

            <Swiper
              spaceBetween={50}
              slidesPerView={5}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              style={{ height: 350 }}
            >
              {randomProducts.map((el, indx) => {
                return (
                  <SwiperSlide>
                    <CarouselProduct product={el} key={indx} />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <h3 className="pt-5">
              Featured Products (15% Discount and more!!!)
            </h3>
            <div className="row">
              {storeProducts.map((el) =>
                el.discountPercentage >= 15 ? (
                  <Product {...el} sender="main" key={el.id} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
