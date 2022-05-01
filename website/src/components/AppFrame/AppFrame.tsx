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
} from '@mantine/core';
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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);

  const header = (
    <Header height={70} px='md'>
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <Burger
          opened={opened}
          onClick={() => setOpened(o => !o)}
          size='sm'
          color={theme.colors.gray[6]}
          mr='xl'
        />
      </MediaQuery>
      <Group sx={{ height: '100%' }} position='apart'>
        <Title order={1}>Siddharth Gupta</Title>
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
