import {
  Container,
  Box,
  TextField,
  MenuItem,
  Input,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { Datepickers, Upload } from "../../component";

const InputMasuk = () => {
  const [input, setInput] = useState({
    pengirim: "",
    nomor: "",
    agenda: "",
    ringkasan: "",
    keterangan: "",
  });

  const [klasifi, setKlasifi] = useState("adminisrasi");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const klasifikasi = [
    {
      jenis: "administrasi",
    },
    {
      jenis: "umum",
    },
  ];

  const handleSubmit = () => {
    console.log("klasifi", klasifi);
    console.log("kinpu", input);
  };

  return (
    <div>
      <Container>
        <Box>
          <form onSubmit={handleSubmit}>
            <Box className="top">
              <TextField
                id="outlined-basic"
                label="Pengirim"
                variant="outlined"
                size="small"
                className="text"
                onChange={handleInput}
                value={input.pengirim}
              />
              <TextField
                id="outlined-basic"
                label="Nomor Surat"
                variant="outlined"
                size="small"
                className="text"
                value={input.nomor}
                onChange={handleInput}
              />
              <TextField
                id="outlined-basic"
                label="Agenda"
                variant="outlined"
                size="small"
                className="text"
                value={input.agenda}
                onChange={handleInput}
              />
            </Box>
            <Box className="top">
              <Datepickers label="Tanggal Surat" />
              <Datepickers label="Tanggal Diterima" />
            </Box>
            <Box className="top">
              <TextField
                id="outlined-multiline-flexible"
                label="Ringkasan"
                onChange={handleInput}
                value={input.ringkasan}
                multiline
                rows={4}
                size="small"
                fullWidth
              />
            </Box>

            <Box className="top">
              <TextField
                id="outlined-select-currency"
                select
                label="Kode Klasifikasi"
                defaultValue="Administrasi"
                size="small"
                onChange={setKlasifi((e) => e.target.value)}
                value={klasifi}
                fullWidth
                sx={{
                  marginRight: "10px", // Adjust the margin as needed
                }}
              >
                {klasifikasi.map((option) => (
                  <MenuItem key={option.jenis} value={option.jenis}>
                    {option.jenis}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-basic"
                label="Keterangan"
                variant="outlined"
                size="small"
                className="text"
                fullWidth
                sx={{
                  marginRight: "10px", // Adjust the margin as needed
                }}
              />
              <Upload />
            </Box>
            <Box className="top">
              <Button variant="contained">Simpan</Button>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default InputMasuk;
