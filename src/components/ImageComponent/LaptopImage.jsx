import { Box, Stack } from "@mui/material";
import Image from "../ReuseableComps/Image";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ArrowTooltip from "../ReuseableComps/ToolTip";

const LaptopImage = () => {
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(0.5),
      border: 0,
      "&.Mui-disabled": {
        border: 0,
      },
      "&:not(:first-of-type)": {
        borderRadius: theme.shape.borderRadius,
      },
      "&:first-of-type": {
        borderRadius: theme.shape.borderRadius,
      },
    },
  }));
  const [expand, setExpand] = React.useState("false");
  const imageExpand = (event, value) => {
    setExpand((pre) => !pre);
  };
  return (
    <Stack
      sx={{
        position: "relative",
      }}
    >
      <Image src="/images/mobile-img.png" />
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: "20px",
          top: "14px",
          gap: "10px",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            flexWrap: "wrap",
          }}
        >
          <StyledToggleButtonGroup
            size="small"
            value={!expand}
            exclusive
            onClick={imageExpand}
          >
            <ToggleButton
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "black",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                },
                "&:hover": {
                  backgroundColor: "unset",
                },
              }}
              value="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M13 12.9976L17.2222 8.77539M17.2222 8.77539H14.0556M17.2222 8.77539V11.9421"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 13.0004L8.77778 17.2227M8.77778 17.2227H11.9444M8.77778 17.2227V14.056"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.55566 12.9991C4.55566 9.01838 4.55566 7.02801 5.79232 5.79135C7.02898 4.55469 9.01936 4.55469 13.0001 4.55469C16.9809 4.55469 18.9712 4.55469 20.2079 5.79135C21.4446 7.02801 21.4446 9.01838 21.4446 12.9991C21.4446 16.9799 21.4446 18.9703 20.2079 20.2069C18.9712 21.4436 16.9809 21.4436 13.0001 21.4436C9.01936 21.4436 7.02898 21.4436 5.79232 20.2069C4.55566 18.9703 4.55566 16.9799 4.55566 12.9991Z"
                  stroke="black"
                  strokeWidth="1.5"
                />
              </svg>
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Paper>
      </div>
      {/* INFO SVG */}
      <ArrowTooltip />
    </Stack>
  );
};

export default LaptopImage;
