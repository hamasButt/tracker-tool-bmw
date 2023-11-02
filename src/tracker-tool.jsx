import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MobileImage from "./components/ImageComponent/MobileImage";
import { useTheme } from "@emotion/react";
import LaptopImage from "./components/ImageComponent/LaptopImage";
import DropDown from "./components/ReuseableComps/DropDown";
import { Fragment, useState } from "react";
import PaginationCustom from "./components/ReuseableComps/Pagination";
import TableCard from "./components/Card/TableCard";
import TrackerDetailsDropdown from "./components/ReuseableComps/TrackerDetailsDropdown";

const TrackerTool = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("laptop"));
  const [cardId, setCardId] = useState(0);
  const [cardId1, setCardId1] = useState(0);
  const [open, setOpen] = useState({
    first: false,
    second: true,
    third: true,
  });
  function handleOpen(name, value) {
    setOpen((pre) => ({ ...pre, [name]: value }));
  }
  function createData(event, svg, img, price, from, to, date) {
    return { event, svg, img, price, from, to, date };
  }
  let tableCardValues = [
    { first: "Color", second: "Amber" },
    { first: "Color", second: "Amber" },
    { first: "Color", second: "Amber" },
    { first: "Color", second: "Amber" },
    { first: "Color", second: "Amber" },
    { first: "Color", second: "Amber" },
  ];

  const rows = [
    createData(
      "Brought",
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33398 11.3333C3.33398 8.81918 3.33398 7.5621 4.11503 6.78105C4.89608 6 6.15316 6 8.66732 6H11.334C13.8481 6 15.1052 6 15.8863 6.78105C16.6673 7.5621 16.6673 8.81918 16.6673 11.3333C16.6673 13.8475 16.6673 15.1046 15.8863 15.8856C15.1052 16.6667 13.8481 16.6667 11.334 16.6667H8.66732C6.15316 16.6667 4.89608 16.6667 4.11503 15.8856C3.33398 15.1046 3.33398 13.8475 3.33398 11.3333Z"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M12.6663 5.9987C12.6663 4.74162 12.6663 4.11308 12.2758 3.72256C11.8853 3.33203 11.2568 3.33203 9.99967 3.33203C8.7426 3.33203 8.11406 3.33203 7.72353 3.72256C7.33301 4.11308 7.33301 4.74162 7.33301 5.9987"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M10.0003 13.5569C10.7367 13.5569 11.3337 13.0594 11.3337 12.4457C11.3337 11.8321 10.7367 11.3346 10.0003 11.3346C9.26395 11.3346 8.66699 10.8372 8.66699 10.2235C8.66699 9.60987 9.26395 9.11241 10.0003 9.11241M10.0003 13.5569C9.26395 13.5569 8.66699 13.0594 8.66699 12.4457M10.0003 13.5569V14.0013M10.0003 8.66797V9.11241M10.0003 9.11241C10.7367 9.11241 11.3337 9.60987 11.3337 10.2235"
          stroke="#4B4949"
          strokeWidth="1.07143"
          strokeLinecap="round"
        />
      </svg>,
      "/images/adam.png",
      "555.3",
      "Adam wick",
      "0×5dd...4f12",
      "10:10 PM 17 July 2023"
    ),
    createData(
      "Brought",
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33398 11.3333C3.33398 8.81918 3.33398 7.5621 4.11503 6.78105C4.89608 6 6.15316 6 8.66732 6H11.334C13.8481 6 15.1052 6 15.8863 6.78105C16.6673 7.5621 16.6673 8.81918 16.6673 11.3333C16.6673 13.8475 16.6673 15.1046 15.8863 15.8856C15.1052 16.6667 13.8481 16.6667 11.334 16.6667H8.66732C6.15316 16.6667 4.89608 16.6667 4.11503 15.8856C3.33398 15.1046 3.33398 13.8475 3.33398 11.3333Z"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M12.6663 5.9987C12.6663 4.74162 12.6663 4.11308 12.2758 3.72256C11.8853 3.33203 11.2568 3.33203 9.99967 3.33203C8.7426 3.33203 8.11406 3.33203 7.72353 3.72256C7.33301 4.11308 7.33301 4.74162 7.33301 5.9987"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M10.0003 13.5569C10.7367 13.5569 11.3337 13.0594 11.3337 12.4457C11.3337 11.8321 10.7367 11.3346 10.0003 11.3346C9.26395 11.3346 8.66699 10.8372 8.66699 10.2235C8.66699 9.60987 9.26395 9.11241 10.0003 9.11241M10.0003 13.5569C9.26395 13.5569 8.66699 13.0594 8.66699 12.4457M10.0003 13.5569V14.0013M10.0003 8.66797V9.11241M10.0003 9.11241C10.7367 9.11241 11.3337 9.60987 11.3337 10.2235"
          stroke="#4B4949"
          strokeWidth="1.07143"
          strokeLinecap="round"
        />
      </svg>,
      "/images/table2.png",
      "555.3",
      "Adam wick",
      "0×5dd...4f12",
      "10:10 PM 17 July 2023"
    ),
    createData(
      "Brought",
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33398 11.3333C3.33398 8.81918 3.33398 7.5621 4.11503 6.78105C4.89608 6 6.15316 6 8.66732 6H11.334C13.8481 6 15.1052 6 15.8863 6.78105C16.6673 7.5621 16.6673 8.81918 16.6673 11.3333C16.6673 13.8475 16.6673 15.1046 15.8863 15.8856C15.1052 16.6667 13.8481 16.6667 11.334 16.6667H8.66732C6.15316 16.6667 4.89608 16.6667 4.11503 15.8856C3.33398 15.1046 3.33398 13.8475 3.33398 11.3333Z"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M12.6663 5.9987C12.6663 4.74162 12.6663 4.11308 12.2758 3.72256C11.8853 3.33203 11.2568 3.33203 9.99967 3.33203C8.7426 3.33203 8.11406 3.33203 7.72353 3.72256C7.33301 4.11308 7.33301 4.74162 7.33301 5.9987"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M10.0003 13.5569C10.7367 13.5569 11.3337 13.0594 11.3337 12.4457C11.3337 11.8321 10.7367 11.3346 10.0003 11.3346C9.26395 11.3346 8.66699 10.8372 8.66699 10.2235C8.66699 9.60987 9.26395 9.11241 10.0003 9.11241M10.0003 13.5569C9.26395 13.5569 8.66699 13.0594 8.66699 12.4457M10.0003 13.5569V14.0013M10.0003 8.66797V9.11241M10.0003 9.11241C10.7367 9.11241 11.3337 9.60987 11.3337 10.2235"
          stroke="#4B4949"
          strokeWidth="1.07143"
          strokeLinecap="round"
        />
      </svg>,
      "/images/table3.png",
      "555.3",
      "Adam wick",
      "0×5dd...4f12",
      "10:10 PM 17 July 2023"
    ),
    createData(
      "Brought",
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33398 11.3333C3.33398 8.81918 3.33398 7.5621 4.11503 6.78105C4.89608 6 6.15316 6 8.66732 6H11.334C13.8481 6 15.1052 6 15.8863 6.78105C16.6673 7.5621 16.6673 8.81918 16.6673 11.3333C16.6673 13.8475 16.6673 15.1046 15.8863 15.8856C15.1052 16.6667 13.8481 16.6667 11.334 16.6667H8.66732C6.15316 16.6667 4.89608 16.6667 4.11503 15.8856C3.33398 15.1046 3.33398 13.8475 3.33398 11.3333Z"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M12.6663 5.9987C12.6663 4.74162 12.6663 4.11308 12.2758 3.72256C11.8853 3.33203 11.2568 3.33203 9.99967 3.33203C8.7426 3.33203 8.11406 3.33203 7.72353 3.72256C7.33301 4.11308 7.33301 4.74162 7.33301 5.9987"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M10.0003 13.5569C10.7367 13.5569 11.3337 13.0594 11.3337 12.4457C11.3337 11.8321 10.7367 11.3346 10.0003 11.3346C9.26395 11.3346 8.66699 10.8372 8.66699 10.2235C8.66699 9.60987 9.26395 9.11241 10.0003 9.11241M10.0003 13.5569C9.26395 13.5569 8.66699 13.0594 8.66699 12.4457M10.0003 13.5569V14.0013M10.0003 8.66797V9.11241M10.0003 9.11241C10.7367 9.11241 11.3337 9.60987 11.3337 10.2235"
          stroke="#4B4949"
          strokeWidth="1.07143"
          strokeLinecap="round"
        />
      </svg>,
      "/images/table4.png",
      "555.3",
      "Adam wick",
      "0×5dd...4f12",
      "10:10 PM 17 July 2023"
    ),
    createData(
      "Brought",
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33398 11.3333C3.33398 8.81918 3.33398 7.5621 4.11503 6.78105C4.89608 6 6.15316 6 8.66732 6H11.334C13.8481 6 15.1052 6 15.8863 6.78105C16.6673 7.5621 16.6673 8.81918 16.6673 11.3333C16.6673 13.8475 16.6673 15.1046 15.8863 15.8856C15.1052 16.6667 13.8481 16.6667 11.334 16.6667H8.66732C6.15316 16.6667 4.89608 16.6667 4.11503 15.8856C3.33398 15.1046 3.33398 13.8475 3.33398 11.3333Z"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M12.6663 5.9987C12.6663 4.74162 12.6663 4.11308 12.2758 3.72256C11.8853 3.33203 11.2568 3.33203 9.99967 3.33203C8.7426 3.33203 8.11406 3.33203 7.72353 3.72256C7.33301 4.11308 7.33301 4.74162 7.33301 5.9987"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M10.0003 13.5569C10.7367 13.5569 11.3337 13.0594 11.3337 12.4457C11.3337 11.8321 10.7367 11.3346 10.0003 11.3346C9.26395 11.3346 8.66699 10.8372 8.66699 10.2235C8.66699 9.60987 9.26395 9.11241 10.0003 9.11241M10.0003 13.5569C9.26395 13.5569 8.66699 13.0594 8.66699 12.4457M10.0003 13.5569V14.0013M10.0003 8.66797V9.11241M10.0003 9.11241C10.7367 9.11241 11.3337 9.60987 11.3337 10.2235"
          stroke="#4B4949"
          strokeWidth="1.07143"
          strokeLinecap="round"
        />
      </svg>,
      "/images/adam.png",
      "555.3",
      "Adam wick",
      "0×5dd...4f12",
      "10:10 PM 17 July 2023"
    ),
    createData(
      "Brought",
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33398 11.3333C3.33398 8.81918 3.33398 7.5621 4.11503 6.78105C4.89608 6 6.15316 6 8.66732 6H11.334C13.8481 6 15.1052 6 15.8863 6.78105C16.6673 7.5621 16.6673 8.81918 16.6673 11.3333C16.6673 13.8475 16.6673 15.1046 15.8863 15.8856C15.1052 16.6667 13.8481 16.6667 11.334 16.6667H8.66732C6.15316 16.6667 4.89608 16.6667 4.11503 15.8856C3.33398 15.1046 3.33398 13.8475 3.33398 11.3333Z"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M12.6663 5.9987C12.6663 4.74162 12.6663 4.11308 12.2758 3.72256C11.8853 3.33203 11.2568 3.33203 9.99967 3.33203C8.7426 3.33203 8.11406 3.33203 7.72353 3.72256C7.33301 4.11308 7.33301 4.74162 7.33301 5.9987"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M10.0003 13.5569C10.7367 13.5569 11.3337 13.0594 11.3337 12.4457C11.3337 11.8321 10.7367 11.3346 10.0003 11.3346C9.26395 11.3346 8.66699 10.8372 8.66699 10.2235C8.66699 9.60987 9.26395 9.11241 10.0003 9.11241M10.0003 13.5569C9.26395 13.5569 8.66699 13.0594 8.66699 12.4457M10.0003 13.5569V14.0013M10.0003 8.66797V9.11241M10.0003 9.11241C10.7367 9.11241 11.3337 9.60987 11.3337 10.2235"
          stroke="#4B4949"
          strokeWidth="1.07143"
          strokeLinecap="round"
        />
      </svg>,
      "/images/table5.png",
      "555.3",
      "Adam wick",
      "0×5dd...4f12",
      "10:10 PM 17 July 2023"
    ),
    createData(
      "Brought",
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33398 11.3333C3.33398 8.81918 3.33398 7.5621 4.11503 6.78105C4.89608 6 6.15316 6 8.66732 6H11.334C13.8481 6 15.1052 6 15.8863 6.78105C16.6673 7.5621 16.6673 8.81918 16.6673 11.3333C16.6673 13.8475 16.6673 15.1046 15.8863 15.8856C15.1052 16.6667 13.8481 16.6667 11.334 16.6667H8.66732C6.15316 16.6667 4.89608 16.6667 4.11503 15.8856C3.33398 15.1046 3.33398 13.8475 3.33398 11.3333Z"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M12.6663 5.9987C12.6663 4.74162 12.6663 4.11308 12.2758 3.72256C11.8853 3.33203 11.2568 3.33203 9.99967 3.33203C8.7426 3.33203 8.11406 3.33203 7.72353 3.72256C7.33301 4.11308 7.33301 4.74162 7.33301 5.9987"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M10.0003 13.5569C10.7367 13.5569 11.3337 13.0594 11.3337 12.4457C11.3337 11.8321 10.7367 11.3346 10.0003 11.3346C9.26395 11.3346 8.66699 10.8372 8.66699 10.2235C8.66699 9.60987 9.26395 9.11241 10.0003 9.11241M10.0003 13.5569C9.26395 13.5569 8.66699 13.0594 8.66699 12.4457M10.0003 13.5569V14.0013M10.0003 8.66797V9.11241M10.0003 9.11241C10.7367 9.11241 11.3337 9.60987 11.3337 10.2235"
          stroke="#4B4949"
          strokeWidth="1.07143"
          strokeLinecap="round"
        />
      </svg>,
      "/images/table5.png",
      "555.3",
      "Adam wick",
      "0×5dd...4f12",
      "10:10 PM 17 July 2023"
    ),
    createData(
      "Brought",
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33398 11.3333C3.33398 8.81918 3.33398 7.5621 4.11503 6.78105C4.89608 6 6.15316 6 8.66732 6H11.334C13.8481 6 15.1052 6 15.8863 6.78105C16.6673 7.5621 16.6673 8.81918 16.6673 11.3333C16.6673 13.8475 16.6673 15.1046 15.8863 15.8856C15.1052 16.6667 13.8481 16.6667 11.334 16.6667H8.66732C6.15316 16.6667 4.89608 16.6667 4.11503 15.8856C3.33398 15.1046 3.33398 13.8475 3.33398 11.3333Z"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M12.6663 5.9987C12.6663 4.74162 12.6663 4.11308 12.2758 3.72256C11.8853 3.33203 11.2568 3.33203 9.99967 3.33203C8.7426 3.33203 8.11406 3.33203 7.72353 3.72256C7.33301 4.11308 7.33301 4.74162 7.33301 5.9987"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M10.0003 13.5569C10.7367 13.5569 11.3337 13.0594 11.3337 12.4457C11.3337 11.8321 10.7367 11.3346 10.0003 11.3346C9.26395 11.3346 8.66699 10.8372 8.66699 10.2235C8.66699 9.60987 9.26395 9.11241 10.0003 9.11241M10.0003 13.5569C9.26395 13.5569 8.66699 13.0594 8.66699 12.4457M10.0003 13.5569V14.0013M10.0003 8.66797V9.11241M10.0003 9.11241C10.7367 9.11241 11.3337 9.60987 11.3337 10.2235"
          stroke="#4B4949"
          strokeWidth="1.07143"
          strokeLinecap="round"
        />
      </svg>,
      "/images/adam.png",
      "555.3",
      "Adam wick",
      "0×5dd...4f12",
      "10:10 PM 17 July 2023"
    ),
    createData(
      "Brought",
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33398 11.3333C3.33398 8.81918 3.33398 7.5621 4.11503 6.78105C4.89608 6 6.15316 6 8.66732 6H11.334C13.8481 6 15.1052 6 15.8863 6.78105C16.6673 7.5621 16.6673 8.81918 16.6673 11.3333C16.6673 13.8475 16.6673 15.1046 15.8863 15.8856C15.1052 16.6667 13.8481 16.6667 11.334 16.6667H8.66732C6.15316 16.6667 4.89608 16.6667 4.11503 15.8856C3.33398 15.1046 3.33398 13.8475 3.33398 11.3333Z"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M12.6663 5.9987C12.6663 4.74162 12.6663 4.11308 12.2758 3.72256C11.8853 3.33203 11.2568 3.33203 9.99967 3.33203C8.7426 3.33203 8.11406 3.33203 7.72353 3.72256C7.33301 4.11308 7.33301 4.74162 7.33301 5.9987"
          stroke="#4B4949"
          strokeWidth="1.07143"
        />
        <path
          d="M10.0003 13.5569C10.7367 13.5569 11.3337 13.0594 11.3337 12.4457C11.3337 11.8321 10.7367 11.3346 10.0003 11.3346C9.26395 11.3346 8.66699 10.8372 8.66699 10.2235C8.66699 9.60987 9.26395 9.11241 10.0003 9.11241M10.0003 13.5569C9.26395 13.5569 8.66699 13.0594 8.66699 12.4457M10.0003 13.5569V14.0013M10.0003 8.66797V9.11241M10.0003 9.11241C10.7367 9.11241 11.3337 9.60987 11.3337 10.2235"
          stroke="#4B4949"
          strokeWidth="1.07143"
          strokeLinecap="round"
        />
      </svg>,
      "/images/adam.png",
      "555.3",
      "Adam wick",
      "0×5dd...4f12",
      "10:10 PM 17 July 2023"
    ),
  ];

  return (
    <Grid
      container
      spacing={{
        mobile: 2,
        laptop: "20px",
      }}
      sx={{
        mt: {
          laptop: "60px",
          mobile: "30px",
        },
      }}
    >
      {matches ? (
        <Grid item laptop={6}>
          <LaptopImage />
        </Grid>
      ) : (
        <Grid item mobile={12}>
          <MobileImage />
        </Grid>
      )}
      <Grid
        sx={{
          maxWidth: {
            mobile: "100%",
          },
        }}
        item
        mobile={12}
        laptop={6}
      >
        <Box
          variant="div"
          sx={{
            display: {
              mobile: "flex",
            },
            maxHeight: {
              laptop: "528px",
              mobile: "388px",
            },
            minHeight: {
              laptop: "528px",
              mobile: "388px",
            },
            flexDirection: {
              mobile: "column",
            },
            gap: {
              mobile: "20px",
              laptop: "40px",
            },
          }}
        >
          <Box
            variant="div"
            sx={{ maxWidth: "220px", display: "flex", gap: "13px" }}
          >
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ width: 45, height: 45 }} src="/images/canon.png" />
            </Stack>
            <Box
              variant="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                lineHeight: "120%" /* 16.8px */,
              }}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: {
                    mobile: "14px",
                    laptop: "18px",
                  },
                  fontStyle: "normal",
                  fontWeight: "700",
                  letterSpacing: "0.28px",
                }}
                variant="h5"
              >
                Jacob & Co
              </Typography>
              <Typography
                sx={{
                  color: "#4A4848",
                  fontSize: {
                    mobile: "11px",
                    laptop: "14px",
                  },
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: " 120%" /* 13.2px */,
                  letterSpacing: "0.22px",
                }}
                variant="p"
              >
                Creator
              </Typography>
            </Box>
          </Box>
          <Box
            variant="div"
            sx={{
              display: {
                mobile: "flex",
              },
              flexDirection: {
                mobile: "column",
              },
              gap: {
                mobile: "12px",
              },
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: {
                  mobile: "20px",
                  laptop: "30px",
                },
                fontStyle: "normal",
                fontWeight: "400",
                textTransform: "uppercase",
              }}
              variant="h5"
            >
              Luxury Stainless Watch
            </Typography>
            <Typography
              sx={{
                color: "#4A4848",
                fontSize: {
                  mobile: "12px",
                  laptop: "16px",
                },
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "160%",
              }}
              variant="h5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
              facilisis tortor, ut molestie. In rhoncus aliquam dui, vitae
              sollicitudin justo, cursus maecenas. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lobortis facilisis tortor, ut
              molestie. In rhoncus aliquam dui, vitae sollicitudin justo, cursus
              maecenas. In rhoncus aliquam dui, vitae sollicitudin justo, cursus
              maecenas.
              <div
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "160%",
                }}
              >
                Read More
              </div>
            </Typography>
          </Box>
          <Box
            variant="div"
            sx={{
              maxWidth: "296px",
              display: {
                mobile: "flex",
              },
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  color: "#4A4848",
                  fontSize: {
                    mobile: "12px",
                  },
                  fontStyle: "normal",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                variant="h5"
              >
                Current Owner
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      src="/images/adam.png"
                    />
                  </Stack>
                  <Typography
                    sx={{
                      color: "#4A4848",
                      fontSize: {
                        mobile: "14px",
                      },
                      fontStyle: "normal",
                      fontWeight: "500",
                      textTransform: "capitalize",
                    }}
                    variant="h5"
                  >
                    Adam wick
                  </Typography>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M11.7333 10.2666L18.3333 3.6666M18.3333 3.6666H14.4145M18.3333 3.6666V7.58535"
                    stroke="#0066B1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3334 11.0003C18.3334 14.4573 18.3334 16.1858 17.2595 17.2597C16.1855 18.3337 14.457 18.3337 11.0001 18.3337C7.54312 18.3337 5.81463 18.3337 4.74069 17.2597C3.66675 16.1858 3.66675 14.4573 3.66675 11.0003C3.66675 7.54336 3.66675 5.81488 4.74069 4.74093C5.81463 3.66699 7.54312 3.66699 11.0001 3.66699"
                    stroke="#0066B1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <Button
              sx={{
                color: "#252222",
                background: "#C7C7C74D",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "500",
                px: "20px",
                py: "11px",
                lineHeight: "normal",
                maxHeight: "38px",
                alignSelf: "end",
              }}
              variant="contained"
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={17}
                  viewBox="0 0 15 17"
                  fill="none"
                >
                  <path
                    d="M13.9573 5.99405C13.1199 2.30932 9.90569 0.650391 7.08232 0.650391C7.08232 0.650391 7.08232 0.650391 7.07435 0.650391C4.25896 0.650391 1.03681 2.30134 0.199373 5.98607C-0.733773 10.1015 1.78652 13.5868 4.06754 15.7801C4.91296 16.5936 5.99764 17.0004 7.08232 17.0004C8.16701 17.0004 9.25169 16.5936 10.0891 15.7801C12.3702 13.5868 14.8904 10.1095 13.9573 5.99405ZM7.08232 9.98983C5.69457 9.98983 4.57001 8.86527 4.57001 7.47751C4.57001 6.08976 5.69457 4.9652 7.08232 4.9652C8.47008 4.9652 9.59464 6.08976 9.59464 7.47751C9.59464 8.86527 8.47008 9.98983 7.08232 9.98983Z"
                    fill="#252222"
                  />
                </svg>
              }
            >
              View map
            </Button>
          </Box>
          <Box variant="div" sx={{ width: "100%" }}>
            <DropDown
              title={"Proof of Authenticity"}
              isOpen={open.first}
              zIndex="16"
              setIsOpen={(val) => handleOpen("first", val)}
            >
              <Box
                variant="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  py: "20px",
                }}
              >
                {["POA 1", "POA 2", "POA 3"].map((it, id) => {
                  return (
                    <Fragment key={id}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography>{it} </Typography>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9.6 8.40039L15 3.00039M15 3.00039H11.7938M15 3.00039V6.20664"
                            stroke="#0066B1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 9C15 11.8284 15 13.2426 14.1213 14.1213C13.2426 15 11.8284 15 9 15C6.17157 15 4.75736 15 3.87868 14.1213C3 13.2426 3 11.8284 3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3"
                            stroke="#0066B1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      {id !== 2 ? <Divider /> : ""}
                    </Fragment>
                  );
                })}
              </Box>
            </DropDown>
          </Box>
        </Box>
      </Grid>
      <Grid item laptop={12} mobile={12}>
        <TrackerDetailsDropdown
          cardId={cardId}
          isOpen={open.second}
          setIsOpen={(val) => handleOpen("second", val)}
          title="Attribute"
          setCardId={setCardId}
          carArray={tableCardValues}
        />
      </Grid>
      <Grid item laptop={12} mobile={12}>
        <TrackerDetailsDropdown
          cardId={cardId1}
          isOpen={open.third}
          setIsOpen={(val) => handleOpen("third", val)}
          setCardId={setCardId1}
          carArray={tableCardValues}
        />
      </Grid>
      <Grid item laptop={12} mobile={12}>
        <Typography
          sx={{
            color: "#4B4949",
            fontSize: {
              mobile: "20px",
              laptop: "28px",
            },
            lineHeight: "normal",
            textAlign: "center",
            py: {
              laptop: "20px",
              mabile: "12px",
            },
          }}
        >
          Metadata & Ownership Activities
        </Typography>
      </Grid>
      <Grid item laptop={12} mobile={12}>
        <Box
          variant="div"
          sx={{
            background: "#F4F4F4",
            p: {
              laptop: "40px",
              mobile: "16px",
            },
            display: {
              mobile: "flex",
            },
            flexDirection: "column",
            gap: {
              laptop: "40px",
              mobile: "20px",
            },
          }}
        >
          <Box
            variant="div"
            sx={{
              maxWidth: "259px",
              display: "flex",
              alignItems: "center",
              gap: {
                laptop: "30px",
                mobile: "20px",
              },
            }}
          >
            <Typography
              sx={{
                color: "#4B4949",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "130%",
                minWidth: "58px",
              }}
            >
              Filter by:
            </Typography>
            <FormControl sx={{ m: 1, minWidth: "166px" }} size="small">
              <InputLabel
                sx={{
                  color: "#4B4949",
                  fontSize: "14px",
                  pl: "6px",
                }}
                id="demo-select-small-label"
              >
                Sales items type
              </InputLabel>
              <Select
                sx={{
                  outline: "none",
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={age}
                label="Sales items type"

                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box variant="div" sx={{}}>
            <TableContainer component={Paper}>
              <Table
                sx={{
                  minWidth: {
                    mobile: "830px",
                  },
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#4B4949",
                        fontSize: "12px",
                        pl: "33px",
                      }}
                    >
                      Event
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#4B4949",
                        fontSize: "12px",
                      }}
                      align="center"
                    >
                      Price
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#4B4949",
                        fontSize: "12px",
                      }}
                      align="center"
                    >
                      From
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#4B4949",
                        fontSize: "12px",
                      }}
                      align="center"
                    >
                      To
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#4B4949",
                        fontSize: "12px",
                      }}
                      align="center"
                    >
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, id) => (
                    <TableRow
                      key={id}
                      sx={{
                        "&.MuiTableRow-root": {
                          background: "#F4F4F4",
                          boxShadow: "none ",
                        },
                      }}
                    >
                      <TableCell
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#4B4949",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                        component="th"
                        scope="row"
                      >
                        <span
                          style={{
                            background: "white",
                            padding: "3px 7px",
                            borderRadius: "50%",
                          }}
                        >
                          {row.svg}
                        </span>{" "}
                        {row.event}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#4B4949",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        {row.price}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#4B4949",
                          fontSize: "14px",
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                        align="center"
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              alignItems: "center",
                            }}
                          >
                            <Stack direction="row" spacing={2}>
                              <Avatar
                                sx={{ width: 30, height: 30 }}
                                src={row.img}
                              />
                            </Stack>
                            <Typography
                              sx={{
                                color: "#4A4848",
                                fontSize: {
                                  mobile: "14px",
                                },
                                fontStyle: "normal",
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                              variant="h5"
                            >
                              Adam wick
                            </Typography>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11.7333 10.2666L18.3333 3.6666M18.3333 3.6666H14.4145M18.3333 3.6666V7.58535"
                              stroke="#0066B1"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.3334 11.0003C18.3334 14.4573 18.3334 16.1858 17.2595 17.2597C16.1855 18.3337 14.457 18.3337 11.0001 18.3337C7.54312 18.3337 5.81463 18.3337 4.74069 17.2597C3.66675 16.1858 3.66675 14.4573 3.66675 11.0003C3.66675 7.54336 3.66675 5.81488 4.74069 4.74093C5.81463 3.66699 7.54312 3.66699 11.0001 3.66699"
                              stroke="#0066B1"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#4B4949",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        {row.to}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#4B4949",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                        align="center"
                      >
                        {row.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TrackerTool;
