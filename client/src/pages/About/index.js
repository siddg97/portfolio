import React from 'react';
import Typography from '@material-ui/core/Typography';
import SectionCard from 'components/cards/SectionCard/index';
import { linkToSFU, linkToTeradici, linkToVancouver } from 'constants/index';
import GridN from 'components/layout/GridN/index';
import BaseCard from 'components/cards/BaseCard/index';

const About = () => {
    const overline = 'A little bit';
    const title = 'About Me';
    const content = (
        <>
            <Typography gutterBottom>
                I&apos;m Siddharth, a <b>software engineer</b> residing in{' '}
                <b>{linkToVancouver}</b>. I enjoy building software in both individual and
                team environments. My passion is fueled by my understanding of
                technologies in the field of computing science and fascination of how two
                bits 0 and 1 have transformed technology and software today.
            </Typography>
            <br />
            <Typography gutterBottom>
                I am always looking to apply my problem-solving skills into software I
                develop and have a knack for high quality code. I also am an active member
                and reviewer of the stackoverflow online community where I help other
                developers resolve their problems related to software development.
            </Typography>
            <br />
            <Typography gutterBottom>
                After completing my secondary education from Gurgaon, India , I moved to
                Canada to pursue my post-secondary education. I am currently in my final
                year of studies whilst pursuing a Bachelor&apos;s in Computing Science
                from <b>{linkToSFU}</b>, Burnaby. My expected graduation date is{' '}
                <b>June, 2021</b>.
            </Typography>
            <br />
            <Typography gutterBottom>
                Currently working as <b>Associate Frontend Developer @{linkToTeradici}</b>{' '}
                in Burnaby
            </Typography>
        </>
    );

    return (
        <GridN>
            <SectionCard overline={overline} title={title} />
            <BaseCard>{content}</BaseCard>
        </GridN>
    );
};

export default About;
