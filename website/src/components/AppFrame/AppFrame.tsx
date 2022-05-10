import { useState } from 'react';
import {
  UserCircle,
  Award,
  Messages,
  Sun,
  MoonStars,
  Stars,
  Code,
} from 'tabler-icons-react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  useMantineColorScheme,
  Group,
  ActionIcon,
  Title,
  Container,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import NavLink from './NavLink';
import User from './User';

const navLinks = [
  {
    icon: <UserCircle size={24} />,
    color: 'red',
    label: 'About Me',
    path: '/about',
  },
  {
    icon: <Award size={24} />,
    color: 'blue',
    label: 'Experience',
    path: '/experience',
  },
  {
    icon: <Code size={24} />,
    color: 'green',
    label: 'Projects',
    path: '/projects',
  },
  {
    icon: <Stars size={24} />,
    color: 'yellow',
    label: 'Skills',
    path: '/skills',
  },
  {
    icon: <Messages size={24} />,
    color: 'grape',
    label: 'Contact Me',
    path: '/contact',
  },
];

type AppFrameProps = {
  children: React.ReactNode;
};

export default function AppFrame({ children }: AppFrameProps) {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);

  const header = (
    <Header height={70} px='md'>
      <Group sx={{ height: 70 }} position='left'>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(o => !o)}
            size='sm'
            color={theme.colors.gray[6]}
          />
        </MediaQuery>

        <MediaQuery smallerThan='xs' styles={{ display: 'none' }}>
          <Title
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
            order={1}
          >
            Siddharth Gupta
          </Title>
        </MediaQuery>

        <Container sx={{ flexGrow: 1 }} />

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

  const navBar = (
    <Navbar
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      p='xs'
    >
      <Navbar.Section>
        <User />
      </Navbar.Section>
      <Navbar.Section grow mt='xs'>
        {navLinks.map(l => (
          <NavLink {...l} key={l.label} />
        ))}
      </Navbar.Section>
    </Navbar>
  );

  return (
    <AppShell
      padding='md'
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          // borderColor:
          //   theme.colorScheme === 'dark'
          //     ? theme.colors.gray[8]
          //     : theme.colors.dark[8],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      fixed
      navbar={navBar}
      footer={
        <Footer height={60} p='md'>
          Application footer
        </Footer>
      }
      header={header}
    >
      {children}
    </AppShell>
  );
}
