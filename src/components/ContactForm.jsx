import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  useTheme 
} from "@mui/material";

function ContactForm() {
  const form = useRef();
  const theme = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0eydyth', 'template_lnd2aoq', form.current, 'wtRwDST0ZepAbm-GZ')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          form.current.reset();
          alert("Thank you for contacting me!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: '600px', md: '800px', lg: '1000px' }, // Responsive max-width
        margin: '0 auto',
        padding: { xs: '20px', sm: '30px', md: '40px' },
        backgroundColor: theme.palette.mode === 'light' ? '#FFFFFFCC' : '#2A3032CC',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: '1.5rem', md: '2rem' }, // Responsive gap
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '1.8em', sm: '2em', md: '2.5em', lg: '3em' }, // Larger on desktop
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          color: theme.palette.text.primary,
          textAlign: 'center',
          letterSpacing: '2px',
          textShadow: theme.palette.mode === 'light'
            ? '2px 2px 4px rgba(47, 46, 65, 0.1)'
            : '2px 2px 4px rgba(237, 237, 237, 0.1)',
        }}
      >
        LET'S TALK
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem', lg: '1.5rem' },
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 400,
          color: theme.palette.text.secondary,
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        Drop me a message
      </Typography>

      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '1.5rem', md: '2rem' },
          width: '100%',
          maxWidth: { xs: '100%', md: '700px', lg: '900px' }, // Form fields scale within container
        }}
      >
        <TextField
          label="Name"
          name="name"
          required
          variant="outlined"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              fontFamily: "'Roboto', sans-serif",
              fontSize: { xs: '1rem', md: '1.1rem' },
              '& fieldset': {
                borderColor: theme.palette.secondary.main,
              },
              '&:hover fieldset': {
                borderColor: theme.palette.secondary.dark,
              },
            },
            '& .MuiInputLabel-root': {
              fontFamily: "'Roboto', sans-serif",
              color: theme.palette.text.secondary,
              fontSize: { xs: '1rem', md: '1.1rem' },
            },
          }}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          required
          variant="outlined"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              fontFamily: "'Roboto', sans-serif",
              fontSize: { xs: '1rem', md: '1.1rem' },
              '& fieldset': {
                borderColor: theme.palette.secondary.main,
              },
              '&:hover fieldset': {
                borderColor: theme.palette.secondary.dark,
              },
            },
            '& .MuiInputLabel-root': {
              fontFamily: "'Roboto', sans-serif",
              color: theme.palette.text.secondary,
              fontSize: { xs: '1rem', md: '1.1rem' },
            },
          }}
        />

        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          required
          variant="outlined"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              fontFamily: "'Roboto', sans-serif",
              fontSize: { xs: '1rem', md: '1.1rem' },
              '& fieldset': {
                borderColor: theme.palette.secondary.main,
              },
              '&:hover fieldset': {
                borderColor: theme.palette.secondary.dark,
              },
            },
            '& .MuiInputLabel-root': {
              fontFamily: "'Roboto', sans-serif",
              color: theme.palette.text.secondary,
              fontSize: { xs: '1rem', md: '1.1rem' },
            },
          }}
        />

        <FormControl fullWidth>
          <InputLabel 
            sx={{ 
              fontFamily: "'Roboto', sans-serif", 
              color: theme.palette.text.secondary,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            How would you rate my website?
          </InputLabel>
          <Select
            name="rating"
            defaultValue=""
            variant="outlined"
            sx={{
              borderRadius: '12px',
              fontFamily: "'Roboto', sans-serif",
              fontSize: { xs: '1rem', md: '1.1rem' },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.main,
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.dark,
              },
            }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          sx={{
            alignSelf: 'center',
            padding: { xs: '8px 30px', md: '10px 40px' },
            borderRadius: '30px',
            background: theme.palette.mode === 'light'
              ? 'linear-gradient(45deg, #DBA39A, #A8A2B9)'
              : 'linear-gradient(45deg, #E8A9A9, #8B95A1)',
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            fontSize: { xs: '1rem', md: '1.1rem' },
            textTransform: 'uppercase',
            letterSpacing: '1px',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default ContactForm;