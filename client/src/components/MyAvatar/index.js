import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { useGoogleAvatarStyles } from '@mui-treasury/styles/avatar/google';
import PropTypes from 'prop-types';

const MyAvatar = React.memo(function CustomAvatar({ centered }) {
    const googleStyles = useGoogleAvatarStyles({ ringSize: 88, avatarSize: 76 });
    const avatar = (
        <Box className={googleStyles.root} ml={3}>
            <Avatar src={'/api/assets/me.jpg'} alt='Siddharth Gupta' />
        </Box>
    );
    return centered ? <center>{avatar}</center> : avatar;
});

MyAvatar.propTypes = {
    centered: PropTypes.bool,
};

MyAvatar.defaultProps = {
    centered: false,
};

export default MyAvatar;
