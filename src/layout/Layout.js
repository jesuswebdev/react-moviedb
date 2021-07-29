import React from "react";
import { useRouteMatch } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Navbar";

const Layout = ({ children }) => {
  const { path, isExact } = useRouteMatch();
  const styles =
    path === "/" && isExact
      ? {
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no repeat",
          backgroundImage: `url('/img/background.jpg')`
        }
      : {
          minHeight: "85vh",
          marginBottom: "30px"
        };

  return (
    <>
      <Header />
      <div className="container" style={styles}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
