import { Box, Typography } from "@mui/material";
import React from "react";

const TableCard = ({ it, selected }) => {
  return (
    <Box
      variant="div"
      sx={{
        background: selected ? "#0066B1" : "white",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        gap: {
          laptop: "16px",
          mobile: "5px",
        },
        px: {
          laptop: "60px",
          mobile: "36px",
        },
        py: {
          laptop: "30px",
          mobile: "10px",
        },
        color: "#252222",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            laptop: "16px",
            mobile: "9px",
          },
          fontWeight: "400",
          lineHeight: "normal",
          textTransform: "capitalize",
          color: selected ? "white" : "black",
        }}
      >
        {it.first}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            laptop: "18px",
            mobile: "12px",
          },
          fontWeight: "700",
          lineHeight: "normal",
          color: selected ? "white" : "black",
        }}
      >
        {it.second}
      </Typography>
    </Box>
  );
};

export default TableCard;
