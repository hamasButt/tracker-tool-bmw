import { Box, Typography } from "@mui/material";
import Image from "./ReuseableComps/Image";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        zIndex:'21',
        bottom: "0",
        bgcolor: "#000",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        gap: {
          laptop: "10px",
          mobile: "6px",
        },
        py: {
          laptop: "40px",
          mobile: "25px",
        },
      }}
    >
      <div className="footer-details">
        <Typography
          sx={{
            fontSize: {
              laptop: "18px!important",
              mobile: "12px",
            },
          }}
        >
          Powered by
        </Typography>
        <Image src="/images/footer-logo.png" />
      </div>
    </Box>
  );
};

export default Footer;
