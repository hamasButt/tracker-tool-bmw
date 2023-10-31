import { Typography } from "@mui/material";
import { useEffect } from "react";

export default function CustomLoader({ children, delay, loader, setLoader }) {
  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, delay);
  }, []);
  if (loader) {
    return (
      <div className="loader-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={149}
          height={149}
          viewBox="0 0 149 149"
          fill="none"
          className="animated-loader"
        >
          <path
            d="M86.6554 5.06346C101.213 7.63042 114.585 14.7402 124.854 25.3739C135.123 36.0076 141.761 49.6192 143.819 64.2579C145.876 78.8966 143.246 93.8108 136.306 106.863C129.366 119.915 118.472 130.435 105.186 136.916C91.8995 143.396 76.9026 145.504 62.3446 142.937C47.7867 140.37 34.415 133.26 24.1462 122.626C13.8774 111.992 7.23857 98.3808 5.18123 83.7421C3.1239 69.1034 5.75368 54.1892 12.6937 41.137"
            stroke="white"
            strokeWidth={9}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M65.9683 124.282C55.3499 122.48 45.5745 117.363 38.0431 109.664C30.5116 101.965 25.6108 92.0796 24.0431 81.4242C22.4753 70.7687 24.3211 59.8905 29.3158 50.3486C34.3106 40.8067 42.1979 33.0909 51.8474 28.3072C61.4968 23.5234 72.413 21.9173 83.0314 23.719C93.6497 25.5207 103.425 30.6377 110.957 38.3366C118.488 46.0355 123.389 55.9211 124.957 66.5765C126.524 77.2319 124.679 88.1102 119.684 97.6521"
            stroke="#8AB9DB"
            strokeWidth={9}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "25px",
            fontWeight: 500,
            lineHeight: "120%",
            color: "white",
          }}
        >
          {children}
        </Typography>
      </div>
    );
  } else {
    return;
  }
}
