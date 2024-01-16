import React, { createContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Product from "../product/Product";
import { products } from "../product/ProductsData";
import ChildrenTest from "./ChildrenTest";
import MasterDetail from "./MasterDetail";
import Searchbar from "./SearchBar";
import "./styles.css";

export const activeCategoryContext = createContext("piano");

const MainLayout = () => {
  const [activeCategory, setActiveCategory] = useState("piano");
  const [searchTerm, setSearchTerm] = useState(null);
  const [productsToDisplay, setProductsToDisplay] = useState(
    products.filter((product) => product.category === "piano")
  );

  const refreshProducts = (activeTab, name) => {
    let productsToDisplay = [];
    if (name && name.trim()) {
      productsToDisplay = products.filter(
        (product) =>
          product.category === activeTab &&
          product.name.toLowerCase().includes(name)
      );
    } else {
      productsToDisplay = products.filter(
        (product) => product.category === activeTab
      );
    }
    setProductsToDisplay(productsToDisplay);
    setActiveCategory(activeTab);
    setSearchTerm(name);
  };

  const handleFilter = (name) => {
    refreshProducts(activeCategory, name);
  };

  const handleActiveTabChange = (activeTab) => {
    refreshProducts(activeTab, searchTerm);
  };

  const handleShowAll = () => {
    setActiveCategory(null);
    setProductsToDisplay(products);
  };

  const images = [
    require("../img/drum tama.jpg"),
    require("../img/12.jpg"),
    require("../img/1.jpg"),
    // Add more images as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
  };
  const imageStyle = {
    width: "100%", // Set width to cover the entire width of the card
    objectFit: "cover",
    maxHeight: "300px", // Set a maximum height to control the size
  };

  return (
    <React.Fragment>
      <div className="container-fluid content my-5 pt-5">
        <div className="row ">
          <div className="col-md-3">
            <MasterDetail
              onActiveCategoryChange={(activeTab) =>
                handleActiveTabChange(activeTab)
              }
            />
            <button className="btn btn-primary mt-3" onClick={handleShowAll}>
              Show All
            </button>
          </div>
          <div className="col-md-9">
            <Searchbar onFilter={handleFilter} />
            <div class="card mb-3">
              <Slider {...sliderSettings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Set ${index + 1}`}
                      style={imageStyle}
                    />
                  </div>
                ))}
              </Slider>
              <div class="card-body">
                <h5 class="card-title text-center">
                  Welcome To orah's Digital Shoppers
                </h5>
              </div>
            </div>
            <div className="row">
              {productsToDisplay.map((product, index) => (
                <div
                  key={product.category + index}
                  className="col-md-4 product"
                >
                  <Product product={product} children={ChildrenTest} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
