import React from 'react';
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import ProductList from "../Components/Products/ProductList";
import Bayilerimiz from "../Components/Bayilerimiz";
import Referances from "../Components/Referances";
import PaymentMethods from "../Components/PaymentMethods";
import Sss from "../Components/Sss";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <ProductList />
            <Bayilerimiz />
            <Referances />
            <PaymentMethods />
            <Sss />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;