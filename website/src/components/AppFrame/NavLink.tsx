import {
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export type NavLinkProps = {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
};

function NavLink({ icon, color, label, path }: NavLinkProps) {
  const { colorScheme } = useMantineColorScheme();

  const resolved = useResolvedPath(path);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <UnstyledButton
      component={Link}
      to={path}
      sx={theme => {
        const hoverBackground =
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0];

        const activeBackground =
          theme.colorScheme === 'dark'
            ? theme.colors.dark[5]
            : theme.colors.gray[2];

        return {
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.black,
          backgroundColor: match ? activeBackground : 'transparent',

          '&:hover': {
            backgroundColor: match ? activeBackground : hoverBackground,
          },
        };
      }}
    >
      <Group>
        <ThemeIcon
          size='xl'
          color={color}
          variant={colorScheme === 'dark' ? 'light' : 'filled'}
        >
          {icon}
        </ThemeIcon>

        <Text size='md'>{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

export default NavLink;
