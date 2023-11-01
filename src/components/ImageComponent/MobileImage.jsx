import {
  Box,
  Button,
  ClickAwayListener,
  Popper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "../ReuseableComps/Image";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const MobileImage = () => {
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
  const [mode, setMode] = React.useState("image");
  const [expand, setExpand] = React.useState(false);
  const handleModes = (event, value) => {
    setMode(value);
  };
  const imageExpand = (event, value) => {
    setExpand((pre) => !pre);
  };
  const [popperOpen, setPopperOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleButtonClick = (event) => {
    setPopperOpen((prevOpen) => !prevOpen);
    setAnchorEl(event.currentTarget);
  };

  const handlePopperClose = () => {
    setPopperOpen(false);
  };

  const handleClickAway = () => {
    setPopperOpen(false);
  };
  return (
    <Stack
      sx={{
        position: "relative",
        display: {
          laptop: "none",
        },
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
            value={mode}
            exclusive
            onChange={handleModes}
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
              value="image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M4.7085 13.3437C4.7085 9.3635 4.7085 7.37339 5.94499 6.13689C7.18149 4.90039 9.1716 4.90039 13.1518 4.90039C17.1321 4.90039 19.1222 4.90039 20.3587 6.13689C21.5952 7.37339 21.5952 9.3635 21.5952 13.3437C21.5952 17.324 21.5952 19.3141 20.3587 20.5506C19.1222 21.7871 17.1321 21.7871 13.1518 21.7871C9.1716 21.7871 7.18149 21.7871 5.94499 20.5506C4.7085 19.3141 4.7085 17.324 4.7085 13.3437Z"
                  stroke={mode === "image" ? "white" : "black"}
                  strokeWidth="1.40385"
                />
                <ellipse
                  cx="16.5295"
                  cy="9.96992"
                  rx="1.68867"
                  ry="1.68867"
                  stroke={mode === "image" ? "white" : "black"}
                  strokeWidth="1.40385"
                />
                <path
                  d="M4.7085 13.7687L6.18742 12.4746C6.95683 11.8014 8.11646 11.84 8.83938 12.5629L12.4613 16.1849C13.0416 16.7651 13.955 16.8443 14.6264 16.3724L14.8782 16.1955C15.8443 15.5165 17.1514 15.5952 18.0291 16.3851L20.7508 18.8347"
                  stroke={mode === "image" ? "white" : "black"}
                  strokeWidth="1.40385"
                  strokeLinecap="round"
                />
              </svg>
            </ToggleButton>
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
              value="video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M17.0657 11.2355L17.6215 10.9576C19.2645 10.1361 20.086 9.72537 20.6867 10.0966C21.2873 10.4678 21.2873 11.3863 21.2873 13.2232V13.4696C21.2873 15.3065 21.2873 16.2249 20.6867 16.5962C20.086 16.9674 19.2645 16.5566 17.6215 15.7351L17.0657 15.4572V11.2355Z"
                  stroke={mode === "video" ? "white" : "black"}
                  strokeWidth="1.40385"
                />
                <path
                  d="M14.1623 9.49595C14.6569 9.99055 14.6569 10.7925 14.1623 11.2871C13.6677 11.7816 12.8658 11.7816 12.3712 11.2871C11.8766 10.7925 11.8766 9.99055 12.3712 9.49595C12.8658 9.00135 13.6677 9.00135 14.1623 9.49595Z"
                  stroke={mode === "video" ? "white" : "black"}
                  strokeWidth="1.40385"
                />
                <path
                  d="M4.40063 12.9223C4.40063 10.1466 4.40063 8.75875 5.16725 7.82462C5.3076 7.65361 5.4644 7.49681 5.63541 7.35646C6.56954 6.58984 7.9574 6.58984 10.7331 6.58984C13.5089 6.58984 14.8967 6.58984 15.8309 7.35646C16.0019 7.49681 16.1587 7.65361 16.299 7.82462C17.0656 8.75875 17.0656 10.1466 17.0656 12.9223V13.7667C17.0656 16.5424 17.0656 17.9303 16.299 18.8644C16.1587 19.0354 16.0019 19.1922 15.8309 19.3326C14.8967 20.0992 13.5089 20.0992 10.7331 20.0992C7.9574 20.0992 6.56954 20.0992 5.63541 19.3326C5.4644 19.1922 5.3076 19.0354 5.16725 18.8644C4.40063 17.9303 4.40063 16.5424 4.40063 13.7667V12.9223Z"
                  stroke={mode === "video" ? "white" : "black"}
                  strokeWidth="1.40385"
                />
              </svg>
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Paper>
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
      {/* <Tooltip placement="left" arrow>
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
      </Tooltip> */}
      <div>
        <Button onClick={handleButtonClick}>Click me</Button>
        <Popper
          open={popperOpen}
          anchorEl={anchorEl}
          transition
          disablePortal
          placement="left"
        >
          {({ TransitionProps }) => (
            <ClickAwayListener onClickAway={handleClickAway}>
              <Paper {...TransitionProps}>
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
              </Paper>
            </ClickAwayListener>
          )}
        </Popper>
      </div>
    </Stack>
  );
};

export default MobileImage;
