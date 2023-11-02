import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Avatar, Stack } from "@mui/material";
const CustomTooltip = styled(Tooltip)(({ theme }) => ({
  "& .MuiTooltip-popperArrow": {
    fill: "red",
  },
  "& .MuiTooltip-arrow": {
    fill: "red",
  },
  "& .MuiTooltip-tooltipArrow": {
    fill: "red",
    top: "10px",
  },
}));
function ArrowTooltip() {
  const [open, setOpen] = useState(false);
  return (
    <CustomTooltip
      sx={{
        position: "absolute",
        cursor: "pointer",
        right: {
          laptop: "20px",
          mobile: "15px",
        },
        bottom: {
          laptop: "24px",
          mobile: "54px",
        },
      }}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: "white",
            mb: "100px",
          },
        },
      }}
      placement="left"
      title={
        <Card
          sx={{
            border: "none",
            outline: "none",
            minWidth: "210px",
            maxWidth: "210px",
          }}
          variant="outlined"
        >
          <CardContent
            sx={{
              padding: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: "14px",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ width: 30, height: 30 }} src="/images/adam.png" />
              </Stack>
              <Typography
                sx={{
                  color: " #4B4949",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "130%",
                }}
                variant="h5"
              >
                Adam wick
              </Typography>
            </div>
            <Typography variant="body2">Image Changed</Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "130%",
                mt: "5px",
              }}
              variant="body2"
              color="text.secondary"
            >
              Sat 20 Sep 2023 at 10:36pm
            </Typography>
          </CardContent>
        </Card>
      }
    >
      <svg
        onMouseEnter={() => {
          setTimeout(() => {
            setOpen(true);
          }, 200);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setOpen(false);
          }, 200);
        }}
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.8332 12.5013C20.8332 17.1037 17.1022 20.8346 12.4998 20.8346C7.89746 20.8346 4.1665 17.1037 4.1665 12.5013C4.1665 7.89893 7.89746 4.16797 12.4998 4.16797C17.1022 4.16797 20.8332 7.89893 20.8332 12.5013ZM12.4998 17.293C12.845 17.293 13.1248 17.0131 13.1248 16.668V11.668C13.1248 11.3228 12.845 11.043 12.4998 11.043C12.1547 11.043 11.8748 11.3228 11.8748 11.668V16.668C11.8748 17.0131 12.1547 17.293 12.4998 17.293ZM12.4998 8.33464C12.9601 8.33464 13.3332 8.70773 13.3332 9.16797C13.3332 9.62821 12.9601 10.0013 12.4998 10.0013C12.0396 10.0013 11.6665 9.62821 11.6665 9.16797C11.6665 8.70773 12.0396 8.33464 12.4998 8.33464Z"
          fill="#D9D9D9"
        />
      </svg>
      {open && <span className={`${!open ? "" : "arrow"} arrowRight `} />}
    </CustomTooltip>
  );
}

export default ArrowTooltip;
