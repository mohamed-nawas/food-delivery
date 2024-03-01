import * as React from 'react';
import { Link } from 'react-router-dom';

interface UnstyledLinkProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function UnstyledLink({href, className, children, ...rest}: UnstyledLinkProps): JSX.Element {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return <Link to={href} {...rest} className={`${className}`} />;
  }

  return (
    <a
      className={`${className}`}
      target='_blank'
      rel='noopener noreferrer'
      {...rest}
    >
      {children}
      </a>
  );
}
