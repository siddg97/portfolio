import {
  Group,
  Header,
  MediaQuery,
  Title,
  ActionIcon,
  useMantineColorScheme,
  Button,
} from '@mantine/core';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { routes } from 'src/AppRouter';
import { MoonStars, Sun } from 'tabler-icons-react';

function TopBar() {
  const navigate = useNavigate();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const location = useLocation();

  return (
    <Header
      height='auto'
      px='md'
      sx={{
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        paddingTop: '32px',
        paddingBottom: '32px',
        border: 'none',
        backdropFilter: 'saturate(180%) blur(20px)',
        position: 'sticky',
      }}
    >
      <Group sx={{ maxHeight: '120px' }} spacing='xs' position='left'>
        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Title
            order={1}
            onClick={() => navigate('/')}
            sx={{
              display: 'inline',
              cursor: 'pointer',
              fontSize: '45px',
              flexGrow: 1,
            }}
          >
            Siddharth Gupta
          </Title>
        </MediaQuery>
        {routes.map(r => (
          <Button
            variant={
              location.pathname.endsWith(r.path) ? 'filled' : 'subtle'
            }
            color='blue'
            size='sm'
            component={Link}
            to={r.path}
            key={r.path}
          >
            {r.name}
          </Button>
        ))}
        <Button
          variant='light'
          color='cyan'
          size='sm'
          component='a'
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume
        </Button>
        <ActionIcon
          variant='default'
          onClick={() => toggleColorScheme()}
          size='lg'
        >
          {colorScheme === 'dark' ? (
            <Sun size={20} />
          ) : (
            <MoonStars size={20} />
          )}
        </ActionIcon>
      </Group>
    </Header>
  );
}

export default TopBar;
