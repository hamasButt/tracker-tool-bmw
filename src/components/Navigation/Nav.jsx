import { Box, Typography, useMediaQuery } from "@mui/material";
import ToggleViews from "./ToggleViews";
import { useTheme } from "@mui/material/styles";
import Image from "../ReuseableComps/Image";

const Nav = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("laptop"));
  console.log({ matches });
  return (
    <>
      {!matches ? (
        <Box
          component="nav"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "20px",
            position: "sticky",
            top: "0",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M4 9.33203H28"
              stroke="#262626"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M4 16H28"
              stroke="#262626"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M4 22.668H28"
              stroke="#262626"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <Image width={50} height={50} src="/images/bmw-logo.png" />
        </Box>
      ) : (
        <Box
          component="nav"
          sx={{
            marginX: "auto",
            display: {
              laptop: "flex",
              mobile: "",
            },
            gap: {
              laptop: "40px",
              mobile: "",
            },
            maxWidth: {
              laptop: "760px",
            },
          }}
        >
          <Image width={50} height={50} src="/images/bmw-logo.png" />
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "9px",
            }}
          >
            <Box
              component={"div"}
              sx={{
                display: "flex",
                gap: "22px",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "32px",
                maxHeight: "32px",
              }}
            >
              <ToggleViews />
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  gap: "27px",
                  alignItems: "center",
                }}
              >
                <svg
                  width={15}
                  height={16}
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_316_1767)">
                    <path
                      d="M9.5 0.75C6.45 0.75 4 3.2 4 6.25C4 7.6 4.5 8.8 5.25 9.75L0.15 14.9C-0.05 15.1 -0.05 15.4 0.15 15.6C0.35 15.8 0.65 15.8 0.85 15.6L6 10.5C6.95 11.3 8.2 11.75 9.5 11.75C12.55 11.75 15 9.3 15 6.25C15 3.2 12.55 0.75 9.5 0.75ZM9.5 10.75C7 10.75 5 8.75 5 6.25C5 3.75 7 1.75 9.5 1.75C12 1.75 14 3.75 14 6.25C14 8.75 12 10.75 9.5 10.75Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_316_1767">
                      <rect
                        width={15}
                        height={15}
                        fill="white"
                        transform="translate(0 0.75)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={2}
                  height={23}
                  viewBox="0 0 2 23"
                  fill="none"
                >
                  <path d="M1 0V22.5" stroke="#E7E7E7" strokeWidth="0.6" />
                </svg>

                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    fontSize: "8px",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_316_1772)">
                      <path
                        d="M7.65789 14.4868C3.94737 14.4868 0.947368 11.5658 0.947368 8.17105C0.947368 4.46053 3.94737 1.53947 7.65789 1.53947C11.3684 1.53947 14.3684 4.38158 14.3684 8.01316C14.3684 11.4868 11.3684 14.3289 7.65789 14.3289M7.65789 0.75C3.71053 0.75 0 3.90789 0 8.0921C0 12.0395 3.39474 15.4342 7.73684 15.4342C12 15.4342 15.3947 12.2763 15.3947 8.0921C15.3947 4.14474 12 0.828947 7.73684 0.75"
                        fill="black"
                      />
                      <path
                        d="M13.8943 7.85567C13.7364 8.01357 13.6574 8.25041 13.7364 8.48725C13.7364 8.64515 13.7364 8.80304 13.5785 8.96094V8.64515H13.4206C13.2627 8.40831 13.2627 8.25041 13.2627 8.09252C13.2627 7.93462 13.2627 7.69778 13.1048 7.53989L12.868 7.38199H12.3943C12.3943 7.38199 12.3943 7.69778 12.2364 7.85567C12.2364 8.17146 11.9206 8.25041 11.6048 8.32936C11.368 8.32936 11.1311 8.48725 10.9732 8.09252C10.9732 8.09252 10.6574 8.09252 10.5785 7.93462L10.2627 7.69778V7.0662V8.17146C10.5785 8.5662 10.8153 8.5662 11.0522 8.5662H11.6048C11.6048 8.5662 11.4469 8.5662 11.6048 8.80304C11.6048 9.03989 11.6048 9.11883 11.368 9.27673L10.9732 9.67146L10.4995 10.0662C10.3416 10.303 10.2627 10.6188 10.3416 10.8557H11.1311V11.6451C11.1311 11.6451 10.9732 11.882 10.7364 11.882C10.4995 12.1188 10.2627 12.1188 10.1048 11.882L9.86796 11.5662C9.63112 12.0399 9.47322 12.3557 8.84164 12.5136C8.6048 12.5136 8.36796 12.5136 8.36796 12.8294C8.05217 12.8294 7.81533 12.4346 7.73638 12.0399V11.803C7.49954 11.6451 7.49954 11.4873 7.49954 11.3294C7.49954 11.0136 7.49954 10.6978 7.18375 10.5399L6.78901 9.90831V9.43462C6.55217 9.27673 6.39427 9.19778 6.15743 9.27673C5.68375 9.27673 5.13112 9.27673 4.57849 9.03989C4.57849 9.03989 4.57849 8.88199 4.34164 8.80304V7.53989C4.34164 7.30304 4.34164 6.98725 4.81533 6.75041C4.81533 6.51357 5.05217 6.43462 5.21006 6.43462C5.21006 6.43462 5.44691 6.43462 5.52585 6.27673V6.03989V5.25041C5.99954 5.25041 6.15743 5.25041 6.31533 5.01357L5.99954 4.69778H5.52585C5.52585 4.38199 5.92059 4.0662 6.31533 3.90831C6.55217 4.14515 6.55217 4.69778 7.1048 4.69778V4.46094C7.2627 4.14515 7.42059 3.90831 7.34164 3.51357C7.34164 3.11883 7.73638 2.7241 8.13112 2.96094H8.52585L8.92059 2.7241C9.07849 2.7241 9.15743 2.7241 9.15743 2.88199V3.11883C9.47322 3.27673 9.71006 3.43462 10.1048 3.27673C10.2627 3.27673 10.3416 3.11883 10.4995 3.03989C10.1837 2.48725 9.86796 2.25041 9.47322 2.25041C7.89427 1.69778 6.47322 1.69778 4.97322 2.25041L4.18375 2.80304V3.35567C4.18375 3.51357 4.02585 3.59252 4.18375 3.67146C4.18375 3.82936 4.34164 3.98725 4.18375 4.14515H3.94691V4.69778C3.71006 4.69778 3.63112 4.69778 3.55217 4.85567C3.55217 5.32936 3.55217 5.32936 2.99954 5.32936H2.84164C2.84164 5.32936 2.68375 5.32936 2.68375 5.48725C2.68375 5.64515 2.44691 5.7241 2.28901 5.80304C1.81533 5.80304 1.49954 5.96094 1.49954 6.27673C1.49954 6.82936 1.49954 7.30304 1.2627 7.85567V8.64515C1.2627 8.80304 1.42059 8.88199 1.57848 8.88199C1.89427 8.88199 1.97322 8.88199 1.97322 9.19778C1.97322 9.35567 2.36796 9.75041 2.52585 9.82936H3.15743C3.63112 9.98725 3.78901 10.303 3.71006 10.6188V11.803C3.55217 11.803 3.55217 11.803 3.55217 11.9609V12.3557C3.71006 12.3557 3.71006 12.3557 3.71006 12.5136H3.94691C5.99954 14.0925 9.07849 14.0925 11.289 12.5136C11.6837 12.2767 11.8416 11.9609 12.0785 11.7241C12.0785 11.4083 12.0785 11.4083 12.2364 11.3294C12.7101 11.3294 13.0259 10.9346 13.0259 10.5399V10.2241L13.2627 9.90831C13.4206 9.90831 13.4206 9.75041 13.4995 9.59252V9.43462C13.8943 8.96094 13.9732 8.40831 13.8943 7.85567Z"
                        fill="black"
                      />
                      <path
                        d="M7.57884 5.32931H7.342L6.94727 5.4872C7.10516 5.4872 7.342 5.4872 7.4999 5.6451C7.65779 5.6451 7.81569 5.6451 7.89463 5.80299C8.13148 6.27668 8.44727 6.27668 8.842 6.19773C9.23674 5.88194 9.31569 6.19773 9.63148 6.19773V6.27668C9.78937 6.27668 9.94727 6.43457 10.0262 6.27668C10.1841 6.27668 10.2631 6.11878 10.2631 5.96089C10.2631 5.96089 10.2631 5.72404 10.1052 5.6451L9.71042 5.4872L8.44727 5.25036H8.28937L7.81569 4.93457H7.342M10.2631 3.90825C10.5788 3.75036 11.0525 3.67141 11.3683 3.75036C11.1315 3.59246 10.9736 3.51352 10.7367 3.51352C10.4999 3.51352 10.342 3.67141 10.2631 3.90825ZM7.73674 4.22404C7.97358 4.22404 8.13148 4.22404 8.36832 4.06615C8.52621 4.06615 8.52621 3.82931 8.36832 3.75036L8.05253 3.43457C8.05253 3.90825 7.89463 4.06615 7.73674 4.22404Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_316_1772">
                        <rect
                          width="15.7895"
                          height={15}
                          fill="white"
                          transform="translate(0 0.75)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  BMW in your country
                </div>
              </Box>
            </Box>
            <Typography
              sx={{
                alignSelf: "end",
                fontSize: "12px",
              }}
            >
              Sheer Driving <span style={{ fontWeight: 700 }}>Pleasure</span>
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Nav;
