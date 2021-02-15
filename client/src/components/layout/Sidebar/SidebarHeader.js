import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MyAvatar from 'components/common/MyAvatar';
import SocialLinks from 'components/common/SocialLink';

const SidebarHeader = ({ collapsed }) => {
    return (
        <>
            <div style={{ padding: collapsed ? 8 : 16, transition: '0.3s' }}>
                <MyAvatar />
                <div style={{ paddingBottom: 16 }} />
                <Typography variant={'h6'} noWrap>
                    Siddharth Gupta
                </Typography>
                <Typography color={'textSecondary'} noWrap gutterBottom>
                    g.sidd97@gmail.com
                </Typography>
                <SocialLinks type='header' />
            </div>
            <Divider />
        </>
    );
};

SidebarHeader.propTypes = {
    collapsed: PropTypes.bool.isRequired,
};

export default SidebarHeader;
