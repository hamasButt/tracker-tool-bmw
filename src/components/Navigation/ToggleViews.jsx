import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const router = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  React.useEffect(() => {
    if (router.pathname === "/tracker-tool") {
      setValue(6);
    }
  }, [router.pathname]);
  console.log({ value });
  return (
    <Box sx={{ width: "100%", maxWidth: "470px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "#E7E7E7" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#0066B1",
            },
          }}
        >
          {[
            "Home",
            "Circular World",
            "Digital Journey",
            "Electic Future",
            "Freude",
            "Models",
            "Tracker Tool",
          ].map((it, id) => {
            return (
              <Tab
                onClick={() => {
                  if (it === "Tracker Tool") {
                    navigate("/tracker-tool");
                    return;
                  } else {
                    navigate("/not-available");
                    return;
                  }
                }}
                key={id}
                sx={{
                  fontSize: "12px",
                  paddingX: "4px",
                  pt: "8px",
                  pb: "0",
                  lineHeight: "normal",
                  color: id === value ? "#0066B1" : "#000",
                  display: "flex",
                  minWidth: 0,
                  textTransform: "capitalize",
                  minHeight: "38px",
                  maxHeight: "38px",
                }}
                label={it}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
}
