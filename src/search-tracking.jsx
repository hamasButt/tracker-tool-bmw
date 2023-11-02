import {
  Box,
  Button,
  Input,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const Search = () => {
  const HistoryButton = styled(Button)({
    textTransform: "none",

    color: "#000",

    border: "1px solid #4B4949",
    lineHeight: 1.5,
    borderColor: "#4B4949",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "transparent",
      borderColor: "#4B4949",
    },
  });

  return (
    <Box
      variant="main"
      sx={{
        pt: {
          laptop: "100px",
          mobile: "40px",
        },
        maxWidth: {
          laptop: "668px",
          mobile: "378px",
        },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mx: "auto",
        gap: {
          laptop: "20px",
          mobile: "10px",
        },
      }}
    >
      <Box
        variant="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: {
            laptop: "50px",
            mobile: "20px",
          },
          minWidth: {
            laptop: "598px",
            mobile: "378px",
          },
          maxWidth: {
            laptop: "598px",
            mobile: "378px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              laptop: "32px",
              mobile: "24px",
              textTransform: "uppercase",
            },
          }}
        >
          Track your NFT history
        </Typography>
        <Box
          sx={{
            background: "#F4F4F4",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            py: {
              mobile: "5px",
            },
            pr: "5px",
            pl: "20px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Enter Serial Number"
            variant="standard"
          />
          <HistoryButton
            sx={{
              padding: {
                mobile: "12px 24px",
                laptop: "20px 45px",
              },
              fontSize: {
                mobile: "14px",
                laptop: "16px",
              },
            }}
          >
            Track
          </HistoryButton>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: {
            laptop: "16px",
            mobile: "12px",
          },
          color: "#4A4848",
          // maxWidth: {
          //   mobile: "308px",
          //   laptop: "100%",
          // },
          textAlign: "center",
          px: {
            mobile: "35px",
            laptop: "0",
          },
        }}
      >
        By initiating authentication, you declare that you accept or legal
        Notice and Privacy Policy
      </Typography>
    </Box>
  );
};

export default Search;
