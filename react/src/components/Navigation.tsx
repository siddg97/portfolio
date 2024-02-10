import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher.tsx';

export default function Navigation() {
  return (
    <Navbar
      classNames={{
        base: 'lg:bg-transparent lg:backdrop-filter-none',
        item: 'data-[active=true]:text-primary',
        wrapper: 'px-4 sm:px-6',
      }}
      height='60px'
    >
      <NavbarBrand>
        <NavbarMenuToggle className='mr-2 h-6 sm:hidden' />
        <p className='font-bold text-inherit hidden sm:block text-sm sm:text-xl'>
          Siddharth Gupta
        </p>
        <p className='font-bold text-inherit sm:hidden'>S.G.</p>
      </NavbarBrand>
      <NavbarContent
        className='ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content2 px-4 dark:bg-content1 sm:flex'
        justify='start'
      >
        <NavbarItem>
          <Link className='flex gap-2 text-inherit' href='#'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            aria-current='page'
            className='flex gap-2 text-inherit'
            href='#'
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='flex gap-2 text-inherit' href='#'>
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='flex gap-2 text-inherit' href='#'>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className='ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:bg-content2 lg:px-1 lg:dark:bg-content1'
        justify='end'
      >
        <NavbarItem className='hidden sm:flex'>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className='w-full' color='foreground' href='#'>
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isActive>
          <Link aria-current='page' className='w-full' color='primary' href='#'>
            Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' color='foreground' href='#'>
            Resume
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' color='foreground' href='#'>
            Contact
          </Link>
        </NavbarMenuItem>
        <NavbarItem className='hidden sm:flex'>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
