import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, className = '', ...rest }) => (
  <div className={`mx-auto max-w-7xl px-4 ${className}`} {...rest}>
    {children}
  </div>
);

export default Container;
