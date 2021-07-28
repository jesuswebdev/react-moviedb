import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Navbar";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
