import { Icon } from '@iconify/react';
import { Button } from '@nextui-org/react';
import { useDarkMode } from 'usehooks-ts';

function ThemeSwitcher() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <Button isIconOnly radius='full' variant='light' onClick={toggle}>
      {isDarkMode ? (
        <Icon className='text-default-500' icon='solar:sun-linear' width={24} />
      ) : (
        <Icon className='text-default-500' icon='solar:moon-stars-linear' width={24} />
      )}
    </Button>
  );
}

export { ThemeSwitcher };
