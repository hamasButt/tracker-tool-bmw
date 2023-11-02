import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Dropdown from "./DropDown";
import TableCard from "../Card/TableCard";
import PaginationCustom from "./Pagination";

const TrackerDetailsDropdown = ({
  title,
  isOpen,
  setIsOpen,
  carArray,
  cardId,
  setCardId,
}) => {
  return (
    <Dropdown
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      title={title}
      border={false}
    >
      <Box
        variant="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          py: {
            mobile: "20px",
          },
        }}
      >
        <Box
          variant="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: {
              mobile: "start",
              laptop: "center",
            },
            maxWidth: {
              mobile: "100%",
              laptop: "582px",
            },
          }}
        >
          <Box
            variant="div"
            sx={{
              display: "flex",
              flexDirection: {
                mobile: "column",
                laptop: "row",
              },
              alignItems: {
                mobile: "start",
                laptop: "center",
              },
              gap: {
                mobile: "10px",
              },
            }}
          >
            <Typography
              sx={{
                color: "#4A4848",
                fontSize: { mobile: "10px", laptop: "14px" },
              }}
            >
              Date:
            </Typography>
            <Typography
              sx={{
                fontSize: { mobile: "13px", laptop: "16px" },
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              Tue Jul 18 2023
            </Typography>
          </Box>
          <Divider
            sx={{
              height: "20px",
              alignSelf: "center",
            }}
            orientation="vertical"
          />
          <Box
            variant="div"
            sx={{
              display: "flex",
              flexDirection: {
                mobile: "column",
                laptop: "row",
              },
              alignItems: {
                mobile: "start",
                laptop: "center",
              },
              gap: {
                mobile: "10px",
              },
            }}
          >
            <Typography
              sx={{
                color: "#4A4848",
                fontSize: { mobile: "10px", laptop: "14px" },
              }}
            >
              Created by:
            </Typography>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ width: 25, height: 25 }} src="/images/adam.png" />
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
          </Box>
        </Box>
        <Grid
          container
          justifyContent="start"
          columnSpacing={{ mobile: 2, laptop: 4 }}
          rowSpacing={{ mobile: 2, laptop: 4 }}
          sx={{
            mx: "auto",
          }}
        >
          {carArray.map((it, id) => {
            return (
              <Grid onClick={() => setCardId(id)} item key={id}>
                <TableCard it={it} selected={id === cardId ? true : false} />
              </Grid>
            );
          })}
        </Grid>
        <PaginationCustom />
      </Box>
    </Dropdown>
  );
};

export default TrackerDetailsDropdown;
