import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import CustomLoader from "./components/ReuseableComps/Loader";
import { useEffect, useState } from "react";
function App() {
  const router = useLocation();
  const Navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (router.pathname === "/") {
      Navigate("/search-tracking");
    }
  }, [router.pathname]);
  return (
    <>
      <Nav />
      <Container
        sx={{
          paddingX: {
            laptop: "102px",
            mobile: "20px",
          },
          pb: {
            laptop: "80px",
            mobile: "50px",
          },
          height: {
            laptop: "calc(100vh - 220px)",
            mobile: "calc(100vh - 220px)",
          },
          overflow: "auto",
        }}
      >
        <Outlet />
      </Container>
      <Footer />
      <CustomLoader setLoader={setLoader} loader={loader} delay={2000}>
        Loading...
      </CustomLoader>
    </>
  );
}

export default App;
