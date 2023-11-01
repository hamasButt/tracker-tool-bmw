import { Box } from "@mui/material";
import React from "react";

const Image = ({ customStyles, alt, src, width, height }) => {
  return (
    <Box
      component="img"
      width={width}
      height={height}
      sx={customStyles}
      alt={alt || ""}
      src={src}
    />
  );
};

export default Image;
