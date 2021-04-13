import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { useGoogleAvatarStyles } from '@mui-treasury/styles/avatar/google';
import PropTypes from 'prop-types';

const MyAvatar = React.memo(function CustomAvatar({ large }) {
    const googleStyles = useGoogleAvatarStyles({
        ringSize: large ? 88 : 0,
        avatarSize: large ? 150 : 76,
    });
    const avatar = (
        <Box className={googleStyles.root} ml={3}>
            <Avatar src={'/api/assets/me.jpg'} alt='Siddharth Gupta' />
        </Box>
    );
    // return centered ? <center>{avatar}</center> : avatar;
    return <center>{avatar}</center>; // avatar;
});

MyAvatar.propTypes = {
    large: PropTypes.bool,
    // avatarSize: PropTypes.number,
};

MyAvatar.defaultProps = {
    large: false,
    // avatarSize: 76,
};

export default MyAvatar;
