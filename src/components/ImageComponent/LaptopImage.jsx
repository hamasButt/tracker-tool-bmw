import { Box, Stack, Tooltip, Typography } from "@mui/material";
import Image from "../ReuseableComps/Image";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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
  const [expand, setExpand] = React.useState('false');
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
            value={expand}
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
      <Tooltip placement="right" title={"ss"} arrow>
        <svg
          style={{
            position: "absolute",
            cursor: "pointer",
            right: "20px",
            bottom: "24px",
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
      </Tooltip>
    </Stack>
  );
};

export default LaptopImage;
