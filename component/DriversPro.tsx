import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import profilePic from "../assets/ProfilePicture.png";

const DriversPro = (data: any) => {
  return (
    <Box
      key={data.index}
      width="80%"
      height={100}
      borderRadius={2}
      sx={{ backgroundColor: "#fff" }}
      alignItems="center"
      display="flex"
    >
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <Image
          src={data?.el?.img}
          alt="profile picture"
          width={80}
          height={80}
          className={styles.profilepic}
        />
      </Box>
      <Box flex={2} display="flex" flexDirection="column">
        <Box flex={1} display="flex" alignItems="self-end">
          <Typography sx={{ fontSize: 14, color: "#000" }}>
            {data?.el?.firstname} {data?.el?.lastname}
          </Typography>
        </Box>
        <Box flex={1}>
          <Box display="flex" alignItems="center" gap={1}>
            <EmailOutlinedIcon sx={{ fontSize: 12, color: "#707070" }} />
            <Typography sx={{ fontSize: 10, color: "#707070" }}>
              {data?.el?.email}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <PhoneOutlinedIcon sx={{ fontSize: 12, color: "#707070" }} />
            <Typography sx={{ fontSize: 10, color: "#707070" }}>
              {data?.el?.phonenumber}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DriversPro;
