import {
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { tNavLinkProps } from './types';

function NavLink({ icon, color, label }: tNavLinkProps) {
  const { colorScheme } = useMantineColorScheme();

  return (
    <UnstyledButton
      sx={theme => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[0]
            : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
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
