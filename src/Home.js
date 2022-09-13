import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/Aug-ART-22/GW/Event/Hero/NTA/Aug_ART_PC_LIVE_now_UNREC_FDFO._CB630844079_.jpg"
          className="home__image"
        />

        <div className="home_row">
          <Product
            title="the lean image"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/LATV-PC-CC-1x._SY304_CB630561735_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            title="Amazon Echo (3rd generation) Smart speaker with Alexa, CharcoalFabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            title="Samsung LC49RG90SSUXEN 49' Curved"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor"
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="Samsung LC49RG90SSUXEN 49' Curved"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
