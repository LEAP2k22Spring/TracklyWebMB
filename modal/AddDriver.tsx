import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AddDriver = ({ isOpen, setIsOpen }: { isOpen: any; setIsOpen: any }) => {
  const handleClose = () => setIsOpen(false);
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
  
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={[
          style,
          { display: "flex", flexDirection: "column", color: "#000" },
        ]}
      >
        <Box flex={1} alignItems='center' >
          <Typography fontWeight='700' fontSize={20}>Жолооч бүртгэх</Typography>
        </Box>
        <Box flex={3} display="flex" flexDirection="column" gap={1}>
          {["Овог", "Нэр", "Утасны дугаар", "И-Мэйл"].map((el, index) => {
            return (
              <TextField
                key={index}
                id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder={el}
              />
            );
          })}
        </Box>
        <Box flex={1} display="flex" justifyContent='space-between' alignItems='center'>
          <Button
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              width: "40%",
              height: 40,
              ':hover': {
                bgcolor: '#fff', // theme.palette.primary.main
                color: '#000',
                border:'1px solid'
              },
            }}
            onClick={()=>{alert('Амжилттай хадгаллаа'), setIsOpen(false)}}
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
              ':hover': {
                bgcolor: '#000', // theme.palette.primary.main
                color: 'white',
              },
            }}
            onClick={()=>{setIsOpen(false)}}
          >
            Хаах
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default AddDriver;
