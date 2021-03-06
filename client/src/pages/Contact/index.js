import React, { Fragment, useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import GridN from 'components/layout/GridN/index';
import SectionCard from 'components/cards/SectionCard/index';
import BaseCard from 'components/cards/BaseCard/index';
import { makeStyles, Button } from '@material-ui/core';
import { useSendMail } from 'hooks/queries';
import Notification from 'components/common/Notification/index';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(({ spacing, zIndex }) => ({
    btn: {
        marginRight: spacing(2),
    },
    backdrop: {
        zIndex: zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Contact = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [successNotification, setSuccessNotification] = useState(false);
    const [errorNotification, setErrorNotification] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onChange = (modifier) => ({ target: { value } }) => modifier(value);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sendMailOpts = {
        onSuccess() {
            onClearAllClick();
            setSuccessNotification(true);
        },
        onError(error) {
            const msg = error.response.data.reason[0].details;
            setErrorMessage(msg);
            setErrorNotification(true);
        },
    };

    const { status, refetch: onSendClick } = useSendMail(
        {
            name,
            email,
            subject,
            message,
        },
        sendMailOpts
    );

    const onClearAllClick = () => {
        setName('');
        setMessage('');
        setSubject('');
        setEmail('');
    };

    const fields = [
        {
            type: 'text',
            label: 'Name',
            value: name,
            onChange: onChange(setName),
            placeholder: 'Enter full name',
        },
        {
            type: 'text',
            label: 'Email',
            value: email,
            onChange: onChange(setEmail),
            placeholder: 'Enter email address',
        },
        {
            type: 'text',
            label: 'Subject',
            value: subject,
            onChange: onChange(setSubject),
            placeholder: 'This message is regarding...',
        },
        {
            type: 'text',
            label: 'Message',
            value: message,
            onChange: onChange(setMessage),
            placeholder: 'Enter message...',
            rows: 12,
            multiline: true,
        },
    ];

    const actions = [
        {
            text: 'Send',
            handler: onSendClick,
            color: 'primary',
            disabled: name === '' || email === '' || subject === '' || message === '',
        },
        {
            text: 'Clear All',
            handler: onClearAllClick,
            color: 'default',
            disabled: name === '' && email === '' && subject === '' && message === '',
        },
    ];

    const renderTextField = ({ type, label, onChange, value, placeholder, ...rest }) => (
        <TextField
            color='primary'
            key={`${type}-${label}`}
            variant='outlined'
            fullWidth
            required
            type={type}
            label={label}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...rest}
        />
    );

    const renderActionBtn = ({ text, handler, color, ...rest }) => (
        <Button
            variant='contained'
            color={color}
            key={`contact-${text}-btn`}
            size='large'
            onClick={handler}
            className={classes.btn}
            disableElevation
            {...rest}
        >
            {text}
        </Button>
    );

    const headerContent = (
        <Typography indent={'small'}>
            If you want to ask me a question, discuss potential employment opportunities
            or just say hi, send me a message and I will get back to you on my earliest
            convenience!
        </Typography>
    );

    return (
        <>
            <GridN>
                <SectionCard
                    title={'Get In Touch'}
                    overline={'Siddharth Gupta'}
                    content={headerContent}
                />
                <BaseCard>
                    <GridN>
                        {fields.map(renderTextField)}
                        <Fragment>{actions.map(renderActionBtn)}</Fragment>
                    </GridN>
                </BaseCard>
            </GridN>
            <Notification
                open={successNotification}
                setOpen={setSuccessNotification}
                type='success'
                message='Your message was sent successfully!'
            />
            <Notification
                open={errorNotification}
                setOpen={setErrorNotification}
                type='error'
                message={errorMessage}
            />
            <Backdrop className={classes.backdrop} open={status === 'loading'}>
                <CircularProgress color='primary' />
            </Backdrop>
        </>
    );
};

export default Contact;
