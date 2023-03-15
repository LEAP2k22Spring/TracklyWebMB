import { useCollection } from "@/firebase/useFirebase";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { serverTimestamp } from "firebase/firestore";
const AddDriver = ({ isOpen, setIsOpen }: { isOpen: any; setIsOpen: any }) => {
  const handleClose = () => setIsOpen(false);
  const {createUserData}  = useCollection('users')
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        onSubmit={async (event:any) => {
          event.preventDefault();
          const data = new FormData(event.target);
          const lastname = data.get("lastname");
          const firstname = data.get("firstname");
          const phonenumber = data.get("phonenumber");
          const email = data.get("email");
          createUserData({
            createdAt: serverTimestamp(),
            lastname: lastname,
            firstname: firstname,
            phonenumber: phonenumber,
            email: email,
            status: "deactive",
            role: "STAFF",
            img: "https://firebasestorage.googleapis.com/v0/b/tracklyappmb.appspot.com/o/3584.jpg?alt=media&token=1736f1f9-9be2-48dc-bac4-368f295d2dc4",
          });
          alert("Амжилттай хадгаллаа");
          setIsOpen(false);
        }}
        sx={[
          style,
          { display: "flex", flexDirection: "column", color: "#000" },
        ]}
      >
        <Box flex={1} alignItems="center">
          <Typography fontWeight="700" fontSize={20}>
            Жолооч бүртгэх
          </Typography>
        </Box>
        <Box flex={3} display="flex" flexDirection="column" gap={1}>
          {fromData.map(({ type, label, name }, index) => {
            return (
              <TextField
                required
                key={index}
                id={label}
                name={label}
                type={type}
                variant="outlined"
                size="small"
                placeholder={name}
              />
            );
          })}
        </Box>
        <Box
          flex={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              width: "40%",
              height: 40,
              ":hover": {
                bgcolor: "#fff", // theme.palette.primary.main
                color: "#000",
                border: "1px solid",
              },
            }}
            type="submit"
          >
             Хадгалах
          </Button>
          <Button
            sx={{
              border: "1px solid",
              borderColor: "#000",
              color: "#000",
              width: "40%",
              height: 40,
              ":hover": {
                bgcolor: "#000", // theme.palette.primary.main
                color: "white",
              },
            }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Хаах
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
const fromData = [
  { name: "Овог", label: "lastname", type: "text" },
  { name: "Нэр", label: "firstname", type: "text" },
  {
    name: "Утасны дугаар",
    label: "phonenumber",
    type: "number",
  },
  { name: "И-Мэйл", label: "email", type: "email" },
];
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
  borderRadius: 5,
};
export default AddDriver;
