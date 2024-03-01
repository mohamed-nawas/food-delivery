import * as React from 'react';
import UnstyledLink from './UnstyledLink';

interface CustomLinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

export default function CustomLink({className, children, ...rest}: CustomLinkProps): JSX.Element {
  return (
    <UnstyledLink
      className={`${className}  inline-flex items-center font-bold hover:text-primary-400`}
      {...rest}
    >
      {children}
    </UnstyledLink>
  );
}
