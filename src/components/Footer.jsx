import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
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
        <img src="/images/footer-logo.png" />
      </div>
    </Box>
  );
};

export default Footer;
