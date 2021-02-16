import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Notification = ({ type, message, open, setOpen }) => {
    const handleClose = () => setOpen(false);
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={open}
            autoHideDuration={2500}
            onClose={handleClose}
            message={message}
        >
            <MuiAlert
                elevation={6}
                variant='filled'
                onClose={handleClose}
                severity={type}
            >
                {message}
            </MuiAlert>
        </Snackbar>
    );
};

Notification.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default Notification;
