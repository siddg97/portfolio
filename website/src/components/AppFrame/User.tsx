import { ChevronRight } from 'tabler-icons-react';
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
  Menu,
} from '@mantine/core';
import myImage from 'src/assets/me.jpg';
import { forwardRef } from 'react';

const UserButton = forwardRef<HTMLButtonElement>((props, ref) => (
  <UnstyledButton
    ref={ref}
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
    {...props}
  >
    <Group>
      <Avatar src={myImage} radius='xl' />
      <Box sx={{ flex: 1 }}>
        <Text size='sm' weight={500}>
          Siddharth Gupta
        </Text>
        <Text color='dimmed' size='xs'>
          g.sidd97@gmail.com
        </Text>
      </Box>
      <ChevronRight size={18} />
    </Group>
  </UnstyledButton>
));

export default function User() {
  const theme = useMantineTheme();
  return (
    <Box
      sx={{
        paddingBottom: theme.spacing.sm,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <Menu
        withArrow
        placement='center'
        position='right'
        control={<UserButton />}
        sx={{ width: '100%' }}
      >
        <Menu.Item>Send Email</Menu.Item>
        <Menu.Item>Send SMS</Menu.Item>
      </Menu>
    </Box>
  );
}
