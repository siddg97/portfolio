import React, { useState } from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  TextField,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    backgroundColor: theme.palette.background.input,
  },
  btn: {
    borderRadius: 999,
  },
  subtitle: {
    fontSize: 18,
  },
}));

function Notification(props) {
  const { type, message, open, setOpen } = props;
  const handleClose = () => setOpen(false);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={2500}
      onClose={handleClose}
      message={message}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={type}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

const Contact = (props) => {
  const css = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successNotification, setSuccessNotification] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);

  const handleReset = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSend = () => {
    const data = { name, email, subject, message };
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/send-mail`, data)
      .then((res) => res.data)
      .then((data) => {
        if (data.msg === "success") {
          setSuccessNotification(true);
          handleReset();
        } else {
          setErrorNotification(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorNotification(true);
      });
  };

  return (
    <React.Fragment>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={12} md={10} xl={8}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} className={css.gridItem}>
              <Typography variant="h2" color="primary" gutterBottom>
                Get In Touch
              </Typography>
              <Typography variant="body1" gutterBottom className={css.subtitle}>
                I'm currently looking for full-time and co-op opportunities. If
                you want to hire me, ask me a question or just say hi, send me a
                message and I will get back to you on my earliest convenience!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                value={name}
                onChange={({ target: { value } }) => setName(value)}
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                required
                className={css.input}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                required
                error={email !== "" && !isEmail(email)}
                className={css.input}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="subject"
                value={subject}
                onChange={({ target: { value } }) => setSubject(value)}
                label="Subject"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                type="text"
                className={css.input}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                margin="normal"
                rows={12}
                required
                type="text"
                className={css.input}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={handleSend}
                className={css.btn}
              >
                Send
              </Button>
            </Grid>
            <Grid item xs={false} sm={6}></Grid>
            <Grid item xs={12} sm={3}>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                fullWidth
                onClick={handleReset}
                className={css.btn}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Notification
        open={successNotification}
        setOpen={setSuccessNotification}
        type="success"
        message="Message sent successfully!"
      />
      <Notification
        open={errorNotification}
        setOpen={setErrorNotification}
        type="error"
        message="Message could not be sent! Try again later"
      />
    </React.Fragment>
  );
};

export default Contact;
