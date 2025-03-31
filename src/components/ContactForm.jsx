import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, Typography, TextField, Button, useTheme } from "@mui/material";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const theme = useTheme();

  const validate = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = "Name is required";
    if (!email) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      tempErrors.email = "Invalid email format";
    if (!message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs
      .send(
        "service_jxxtqaa",
        "template_lwf93gc",
        { name, email, message },
        "wtRwDST0ZepAbm-GZ"
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
          alert("Thank you for contacting, I will reach you out soon");
        },
        () => {
          alert("Could not send the message");
        }
      );
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "30px",
        backgroundColor:
          theme.palette.mode === "light" ? "#FFFFFFCC" : "#2A3032CC",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: theme.palette.text.primary,
          textAlign: "center",
        }}
      >
        LET'S TALK
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem", lg: "1.5rem" },
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 400,
          color: theme.palette.text.secondary,
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Drop me a message
      </Typography>

      <Box
        component="form"
        onSubmit={sendEmail}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={!!errors.message}
          helperText={errors.message}
          fullWidth
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            alignSelf: "center",
            padding: "10px 40px",
            borderRadius: "30px",
            background:
              theme.palette.mode === "light"
                ? "linear-gradient(45deg, #DBA39A, #A8A2B9)"
                : "linear-gradient(45deg, #E8A9A9, #8B95A1)",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1px",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 25px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
