import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { routes } from '../../routes';
import { ThemeSwitcher } from './ThemeSwitcher.tsx';
import { NavigationLink } from './NavigationLink.tsx';

function Navigation() {
  return (
    <Navbar
      classNames={{
        item: 'data-[active=true]:text-primary dark:data-[active=true]:text-primary-500 font-semibold',
        menuItem: 'data-[active=true]:text-primary dark:data-[active=true]:text-primary-500 font-semibold',
        wrapper: 'px-4 sm:px-6',
      }}
      height='60px'
      maxWidth='xl'
      isBlurred
    >
      <NavbarBrand>
        <NavbarMenuToggle className='mr-2 h-6 sm:hidden' />
        <p className='font-bold text-inherit text-xl sm:text-2xl'>
          Siddharth Gupta
        </p>
      </NavbarBrand>

      <NavbarContent
        className='ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content2 px-4 sm:flex'
        justify='start'
      >
        {routes.map(r => (
          <NavigationLink
            key={`nav-${r.path}`}
            path={r.path}
            text={r.navText}
          />
        ))}
      </NavbarContent>

      <NavbarContent
        className='ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:bg-content2 lg:px-1 lg:dark:bg-content1'
        justify='end'
      >
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu
        portalContainer={document.body.getElementsByTagName('main')[0]}
      >
        {routes.map(r => (
          <NavigationLink
            key={`nav-mobile-${r.path}`}
            path={r.path}
            text={r.navText}
            mobile
          />
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export { Navigation };
