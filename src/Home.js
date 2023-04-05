import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/619rl+QqjwL._SX3000_.jpg"
          alt="Img"
        />

        <div className="home_row">
          <Product
            id={100}
            title="ASUS ROG Strix G17 (2022), 17.3 (43.94 cms) FHD 360Hz/3ms, AMD Ryzen 7-6800H, RTX 3060"
            price={199.99}
            image="https://m.media-amazon.com/images/I/81isDVo0CmL._SX355_.jpg"
            rating={5}
          />
          <Product
          id={101}
          title="Rossmann Professional Diecast Aluminium Stand Mixer, Powerful 1800 Watts, 7 Lit SS Bowl"
          price={99.99}
          image="https://m.media-amazon.com/images/I/81fZlkgZ6uL._SX355_.jpg"
          rating={4} />
        </div>

        <div className="home_row">
          <Product 
          id={102}
            title="Noise ColorFit Ultra 2 Buzz 1.78 AMOLED Bluetooth Calling Watch" 
            price={49.99}
            image="https://m.media-amazon.com/images/I/41wlZ0cZChL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={5}/>
          <Product 
          id={103}
           title="Echo Studio- Our best-sounding smart speaker ever - With Dolby Atmos"
           price={119.99}
           image="https://m.media-amazon.com/images/I/41kCNGqQbXL._SX425_.jpg"
           rating={5}/>
          <Product 
          id={103}
           title="Apple 2022 12.9-inch iPad Pro (Wi-Fi + Cellular, 512GB) - Space Grey (6th Generation)"
           price={319.99}
           image="https://m.media-amazon.com/images/I/81hAx31maUL._SX522_.jpg"
           rating={4} />
        </div>

        <div className="home_row">
            <Product 
            id={104}
             title="LG 86cm Ultra Wide Curved Gaming LCD Monitor 160Hz 1ms -QHD (2K 3440 x 1440 Pixels) sRGB HDR 10 Color"
             price={169.99}
             image="https://m.media-amazon.com/images/I/61Y0JHgpWJL._SY450_.jpg"
             rating={4}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
