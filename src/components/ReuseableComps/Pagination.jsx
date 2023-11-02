import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { styled } from "@mui/system";

const CustomPaginationItem = styled(PaginationItem)({
  borderRadius: 0,
  border: "1px solid black",
  padding: "13px",
  margin: "0 15px 0 0",
  "&:not(:last-child)": {
    margin: "0",
  },
  "&.Mui-selected": {
    backgroundColor: "black",
    color: "white",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  "& .MuiPaginationItem-page": {
    padding: "5px 10px", // Adjust the padding within each item
  },
});

const MyPagination = styled(Pagination)({
  "& .MuiPagination-ul": {
    justifyContent: "center",
    alignItems: "center",
    gap:'10px'
  },
});
export default function PaginationCustom() {
  return (
    <MyPagination
      count={5}
      renderItem={(item) => {
        if (item.type === "previous" || item.type === "next") {
          return (
            <CustomPaginationItem
              {...item}
              component="div"
              // Custom SVG arrows
              children={
                item.type === "previous" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="3"
                    viewBox="0 0 15 3"
                    fill="currentColor"
                  >
                    <path
                      opacity="0.3"
                      d="M1 1.24121L13.4825 1.24122"
                      stroke="#0E1112"
                      stroke-width="1.96"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="10" height="10">
                    <path d="M 0,0 L 10,5 L 0,10 Z" fill="currentColor" />
                  </svg>
                )
              }
            />
          );
        }
        return <CustomPaginationItem {...item} />;
      }}
    />
  );
}
