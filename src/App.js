import React, { Fragment } from "react";
import About from "./pages/about/About";
import Banner from "./pages/banner/Banner";
import Download from "./pages/download/Download";
import Faq from "./pages/faq/Faq";
import Feature from "./pages/features/Feature";
import FullFeature from "./pages/full-features/FullFeature";
import NewsLatter from "./pages/newslatter/NewsLatter";
import Product from "./pages/product/Product";
import WhyChoose from "./pages/why-choose/WhyChoose";
import ProductCount from "./pages/product-count/ProductCount";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Banner />
      <Feature />
      <FullFeature />
      <About />
      <Download />
      <WhyChoose />
      <Product />
      <NewsLatter />
      <Faq />
      <ProductCount />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
