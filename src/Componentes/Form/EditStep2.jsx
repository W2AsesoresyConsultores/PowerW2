import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const EditStep2 = ({ data = {}, handleChange, nextStep, prevStep, errors = {} }) => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 0, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>

      <TextField
        label="Requisitos"
        variant="outlined"
        name="requisitos"
        value={data.requisitos || ""}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        multiline
        rows={4}
        error={!!errors.requisitos}
        helperText={errors.requisitos || ""}
      />

      <TextField
        label="Funciones"
        variant="outlined"
        name="funciones"
        value={data.funciones || ""}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        multiline
        rows={4}
        error={!!errors.funciones}
        helperText={errors.funciones || ""}
      />
 <TextField
        label="Beneficios"
        variant="outlined"
        name="beneficios"
        value={data.beneficios || ""}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        multiline
        rows={4}
        error={!!errors.beneficios}
        helperText={errors.beneficios || ""}
      />

      
      <Box mt={3} display="flex" justifyContent="space-between">
                        <Button
                              onClick={prevStep}
                              sx={{
                                color: "#1E50A2",
                                fontWeight: "bold",
                                textTransform: "none"
                              }}
                            >
                              ← Volver
                            </Button>
                            <Button onClick={nextStep}
                                        variant="contained"
                                        sx={{
                                          bgcolor: "#1E50A2",
                                          color: "white",
                                          fontWeight: "bold",
                                          textTransform: "none",
                                          display: "flex",
                                          alignItems: "center",
                                          gap: 1
                                        }}
                                      >
                                        Continuar →
                                      </Button>
                  
                  </Box>
    </Box>
  );
};

export default EditStep2;
