import {
  Button,
  Center,
  Container,
  Group,
  Text,
  Title,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import {
  BrandLinkedin,
  BrandGithub,
  Certificate,
} from 'tabler-icons-react';

function Home() {
  return (
    <Container
      size='lg'
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <Center>
        <div>
          <Title
            order={1}
            sx={{
              fontSize: '45px',
            }}
          >
            I am
            {' '}
            <Title
              order={1}
              sx={theme => ({
                color: theme.colors.yellow,
                display: 'inline',
                fontSize: '45px',
              })}
            >
              Siddharth Gupta
            </Title>
          </Title>
          <Text size='xl' weight={450} color='gray'>
            T-shaped Software Engineer passionate about building the
            next big thing
          </Text>
          <br />
          <Text size='lg'>
            I enjoy building software in both individual and team
            environments. My passion is fueled by my understanding of
            technologies in the field of computing science and
            fascination of how two bits 0 and 1 have transformed
            technology and software today. I love programming in my
            free time and have a knack for keeping up with the latest
            technologies.
          </Text>
          <br />
          <Group>
            <Button
              component='a'
              target='_blank'
              rel='noopener noreferrer'
              color='blue'
              href='https://www.linkedin.com/in/siddg97/'
              leftIcon={<BrandLinkedin size={18} />}
              variant='filled'
            >
              LinkedIn
            </Button>
            <Button
              component='a'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/siddg97'
              color='gray'
              leftIcon={<BrandGithub size={18} />}
              variant='filled'
            >
              Github
            </Button>
            <Button
              variant='light'
              color='yellow'
              leftIcon={<Certificate size={18} />}
            >
              Resume
            </Button>
            <Button
              color='violet'
              variant='light'
              component={Link}
              to='/contact'
            >
              Get in touch
            </Button>
          </Group>
        </div>
      </Center>
    </Container>
  );
}

export default Home;
