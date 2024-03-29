import { Box, Button, Typography } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import { useRouter } from "next/router";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DriversPro from "@/component/DriversPro";
import AddIcon from "@mui/icons-material/Add";
import AddDriver from "@/modal/AddDriver";
import dynamic from "next/dynamic";
import { useAuth } from "@/provider/AuthProvider";
import { useCollection } from "@/firebase/useFirebase";
import LoadingSpinner from "@/component/Spinner";
const DynamicHeader = dynamic(() => import("../component/MapRender"), {
  ssr: false,
});

const Drivers = () => {
  const [isTrueDriver, setIsTrueDriver] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { logout } = useAuth();
  const { snapData, loading } = useCollection("users");
  const deActive = snapData?.filter((el) => el.status === "deactive");
  const active = snapData?.filter((el) => el.status === "active");
  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
      <Box
        flex={1}
        bgcolor="#0C1219"
        color="#ffffff"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        {!loading && <LoadingSpinner />}
        <Box
          flex={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Бүтээгдэхүүний нэр</Typography>
        </Box>
        <Box flex={6} display="flex" justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            width="100%"
          >
            <Button
              onClick={() => setIsTrueDriver(false)}
              startIcon={<MapOutlinedIcon />}
              sx={[
                { color: "#fff", width: "100%" },
                isTrueDriver ? { borderLeft: 0 } : { borderLeft: 5 },
              ]}
            >
              Явц харах
            </Button>
            <Button
              onClick={() => setIsTrueDriver(true)}
              startIcon={<BadgeOutlinedIcon />}
              sx={[
                {
                  color: "#fff",
                  width: "100%",
                  borderColor: "#FFF",
                },
                isTrueDriver ? { borderLeft: 5 } : { borderLeft: 0 },
              ]}
            >
              Ажилчид
            </Button>
          </Box>
        </Box>
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            onClick={() => {
              logout();
            }}
            startIcon={<ExitToAppOutlinedIcon />}
            sx={[
              {
                color: "#fff",
                width: "100%",
                borderColor: "#FFF",
              },
            ]}
          >
            Гарах
          </Button>
        </Box>
      </Box>
      {isTrueDriver && (
        <Box flex={1.5} display="flex" flexDirection="column" bgcolor="#EEF1F4">
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              sx={{
                width: "80%",
                height: 50,
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                pl: 3,
                pr: 3,
                color: "#000",
              }}
              endIcon={
                <AddIcon
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: 1,
                    backgroundColor: "#EEF1F4",
                    color: "#707070",
                    p: 0.7,
                  }}
                />
              }
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Жолооч нэмэх
            </Button>
          </Box>
          <Box
            color="#62C762"
            ml={5}
            display="flex"
            gap={1}
            alignItems="center"
          >
            <FiberManualRecordIcon sx={{ fontSize: 10 }} />
            <Typography>Идэвхтэй</Typography>
          </Box>
          <Box
            flex={3}
            display="flex"
            flexDirection="column"
            gap={1}
            alignItems="center"
          >
            {active?.map((el: any, index: any) => (
              <DriversPro el={el} index={index} />
            ))}
          </Box>
          <Box
            color="#5C5C5C"
            ml={5}
            display="flex"
            gap={1}
            alignItems="center"
          >
            <FiberManualRecordIcon sx={{ fontSize: 10 }} />
            <Typography>Идэвхгүй</Typography>
          </Box>
          <Box
            flex={3}
            display="flex"
            flexDirection="column"
            gap={1}
            alignItems="center"
          >
            {deActive?.map((el: any, index: any) => (
              <DriversPro el={el} index={index} />
            ))}
          </Box>
        </Box>
      )}
      <Box sx={isTrueDriver ? { flex: 3 } : { flex: 4.5 }}>
        <DynamicHeader />
      </Box>
      <AddDriver isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};
export default Drivers;
