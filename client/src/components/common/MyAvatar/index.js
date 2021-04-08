import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { useGoogleAvatarStyles } from '@mui-treasury/styles/avatar/google';
import PropTypes from 'prop-types';

const MyAvatar = React.memo(function CustomAvatar({ centered, avatarSize }) {
    const googleStyles = useGoogleAvatarStyles({
        ringSize: avatarSize === 76 ? 88 : 0,
        avatarSize,
    });
    const avatar = (
        <Box className={googleStyles.root} ml={3}>
            <Avatar src={'/api/assets/me.jpg'} alt='Siddharth Gupta' />
        </Box>
    );
    return centered ? <center>{avatar}</center> : avatar;
});

MyAvatar.propTypes = {
    centered: PropTypes.bool,
    avatarSize: PropTypes.number,
};

MyAvatar.defaultProps = {
    centered: false,
    avatarSize: 76,
};

export default MyAvatar;
