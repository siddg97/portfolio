import { NavbarItem, NavbarMenuItem } from '@nextui-org/react';
import type { ReactNode } from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

interface Props {
  path: string;
  text: ReactNode;
  mobile?: boolean;
};

function NavigationLink({ path, text, mobile = false }: Props) {
  const resolvedPath = useResolvedPath(path);
  const matchedPath = useMatch({
    path: resolvedPath.pathname,
    end: true,
  });

  if (mobile) {
    return (
      <NavbarMenuItem isActive={matchedPath !== null}>
        <NavLink to={path} className='w-full'>
          {text}
        </NavLink>
      </NavbarMenuItem>
    );
  }

  return (
    <NavbarItem isActive={matchedPath !== null}>
      <NavLink className='flex gap-2 text-inherit' to={path}>
        {text}
      </NavLink>
    </NavbarItem>
  );
}

export { NavigationLink };
