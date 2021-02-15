import React from 'react';
import styled from 'styled-components';
import { getFooter } from '@mui-treasury/layout';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MyAvatar from 'components/MyAvatar/index';
import GridN from 'components/GridN/index';
import SocialLinks from 'components/SocialLink/index';

const styles = ({ spacing, palette: { type, grey } }) => ({
    root: {
        marginTop: 'auto',
        padding: spacing(4),
        bottom: 0,
        background: type === 'light' ? grey[100] : grey[900],
        textAlign: 'center',
    },
});

const BaseFooter = getFooter(styled);

const Footer = ({ classes }) => {
    return (
        <BaseFooter className={classes.root}>
            <GridN>
                <MyAvatar centered />
                <Typography variant='body1' align={'center'}>
                    Made with <FavoriteIcon color='secondary' /> by Siddharth Gupta - 2021
                </Typography>
                <SocialLinks />
            </GridN>
        </BaseFooter>
    );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
