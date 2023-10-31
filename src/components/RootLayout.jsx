import { Outlet } from "react-router-dom";
import Nav from "./Navigation/Nav";
import { Container } from "@mui/material";
import Footer from "./Footer";
import CustomLoader from "./Loader/Loader";
import { useState } from "react";

const RootLayout = () => {
  const [loader, setLoader] = useState(false);

  return (
    <>
      <Container
        sx={{
          paddingX: {
            laptop: "102px",
            mobile: "20px",
          },
          mt: {
            laptop: "30px",
            mobile: "14px",
          },
        }}
      >
        <Nav />
        <Outlet />
      </Container>
      <Footer />
      <CustomLoader setLoader={setLoader} loader={loader} delay={1000}>
        Loading...
      </CustomLoader>
    </>
  );
};

export default RootLayout;
