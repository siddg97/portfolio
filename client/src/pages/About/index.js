import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SectionCard from 'components/cards/SectionCard/index';

const About = () => {
    const overline = 'Siddharth Gupta';
    const content = (
        <>
            <Typography gutterBottom indent={'small'}>
                I&apos;m Siddharth, a software engineer and developer in the Greater
                Vancouver Area, BC, Canada. I enjoy building software in both individual
                and team environments. My passion is fueled by my understanding of
                technologies in the field of computing science and fascination of how two
                bits 0 and 1 have transformed technology and software today.
            </Typography>
            <br />
            <Typography gutterBottom indent={'small'}>
                I am always looking to apply my problem-solving skills into software I
                develop and have a knack for high quality code. I also am an active member
                and reviewer of the stackoverflow online community where I help other
                developers resolve their problems related to software development.
            </Typography>
            <br />
            <Typography gutterBottom indent={'small'}>
                After completing my secondary education from Gurgaon, India , I moved to
                Canada to pursue my post-secondary education. I am currently in my final
                year of studies whilst pursuing a Bachelor&apos;s in Computing Science
                from Simon Fraser University, Burnaby. My expected graduation date is
                June, 2021.
            </Typography>
            <br />
            <Typography gutterBottom indent={'small'}>
                Recently completed an 8 month co-op @BlackBerry Inc in Burnaby, BC. My
                daily activities included development of firmware and tools used in
                Digital Signal Processing and Pre processing for automobile equipment and
                acoustics using C/C++ and writing test scripts for the same in Python.
            </Typography>
        </>
    );
    const title = (
        <Typography weight={'bold'} variant={'h4'} gutterBottom>
            <Link underline={'none'}>About Me</Link>
        </Typography>
    );
    return <SectionCard overline={overline} title={title} content={content} />;
};

export default About;
