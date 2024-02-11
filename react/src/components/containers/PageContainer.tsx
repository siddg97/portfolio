import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function PageContainer({ children }: Props) {
  return (
    <div className='mt-6 flex w-full justify-center justify-items-center items-center container mx-auto max-w-7xl px-6 flex-grow'>
      {children}
    </div>
  );
}

export { PageContainer };
