import { Box, Button, Divider, Stack, styled } from "@mui/material";
import React from "react";

const Dropdown = ({
  isOpen,
  zIndex = "15",
  setIsOpen,
  title,
  children,
  border = true,
}) => {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const HistoryButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    color: "#4B4949",
    padding: "6px 12px",
    border: "1px solid #4B4949",
    lineHeight: 1.5,
    borderColor: "#4B4949",
    "&:hover": {
      backgroundColor: "transparent",
      borderColor: "#4B4949",
    },
  });

  return (
    <Box
      variant="div"
      sx={{
        zIndex: { zIndex },
        border: !border
          ? ""
          : "1px solid var(--bmw-blue-bmw-blue-200, #8AB9DB)",
      }}
      className={`dropdown `}
    >
      {!title ? (
        <Box variant="div" className="dropdown-header" onClick={toggleDropdown}>
          <Stack>
            <HistoryButton
              sx={{
                fontSize: "14px",
                padding: "10px 20px",
              }}
              variant="outlined"
            >
              History 1
            </HistoryButton>
          </Stack>

          <svg
            className={`chevron ${!isOpen ? "open" : ""}`}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.05994 11.2871L7.94994 6.39711C8.52744 5.81961 9.47244 5.81961 10.0499 6.39711L14.9399 11.2871"
              stroke="#0E1112"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      ) : (
        <Box
          variant="div"
          sx={{
            fontSize: {
              mobile: "14px",
              laptop: "18px",
            },
            color: "#000",
          }}
          className="dropdown-header"
          onClick={toggleDropdown}
        >
          {title}
          <svg
            className={`chevron ${!isOpen ? "open" : ""}`}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.05994 11.2871L7.94994 6.39711C8.52744 5.81961 9.47244 5.81961 10.0499 6.39711L14.9399 11.2871"
              stroke="#0E1112"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      )}
      {isOpen && (
        <Box
          variant="div"
          sx={{
            px: {
              laptop: "20px",
              mobile: "15px",
            },
            opacity: isOpen ? 1 : 0,
            overflow: "hidden", // Hide overflow when closed
            backgroundColor: "#F4F4F4",
          }}
        >
          <Divider />
          <Box variant="div" className={`dropdown-content`}>
            <Box variant="div">{children}</Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Dropdown;
