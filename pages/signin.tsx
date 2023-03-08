import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import imgBack from "../assets/mapbackground.png";
import bus from "../assets/Bus.png";
import pushpin from "../assets/Round Pushpin.png";
import wave from "../assets/Wave.png";

import classes from "../styles/Home.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          backgroundColor: "#fff",
          color: "#000",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            gap: 3,
          }}
        >
          <Typography>Тавтай морил!</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            placeholder="И-мэйл"
            inputRef={emailRef}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            placeholder="Нууц үг"
            inputRef={passwordRef}
          />
          <Button
            sx={{ backgroundColor: "#000", color: "#fff" }}
            variant="contained"
            onClick={()=>router.push("/drivers")}
          >
            НЭВТРЭХ
          </Button>
        </Box>
      </Box>
      <Box
        flex={1}
        sx={{
          position: "relative",
          display: { xs: "none", sm: "flex" },
          backgroundColor: "#ffffff10"
        }}
      >
        <Image
          src={imgBack}
          alt="Picture of the author"
          className={classes.image}
        />
        <Box
          sx={{ display: "flex", position: "absolute", top: 250, left: 200 }}
        >
          <Image src={wave} width={50} height={50} alt="bus" />
          <Image src={bus} width={50} height={50} alt="bus" />
          <Image src={pushpin} width={50} height={50} alt="bus" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            width: 400,
            alignItems: "flex-end",
            bottom: 50,
            right: 50,
          }}
        >
          <Typography sx={{ fontSize: 50, fontStyle: "italic" }}>
            Хязгааргүйн
          </Typography>
          <Typography sx={{ fontSize: 15 }}>уудам руу</Typography>
          <Typography sx={{ fontSize: 50, fontStyle: "italic" }}>
            Хамтдаа
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
