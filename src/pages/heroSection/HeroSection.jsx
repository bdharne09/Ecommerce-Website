import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
function HeroSection() {
  return (
    <>
      <Layout>
        <div style={{ marginBottom: "29px" }}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
            alt=""
          />
        </div>
        <Track />
        <Testimonial />
      </Layout>
    </>
  );
}

export default HeroSection;
