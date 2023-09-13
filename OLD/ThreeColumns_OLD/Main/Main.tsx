import React, { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import s from './../ThreeColumns.module.scss';

export interface IMainProps extends HTMLAttributes<HTMLDivElement> {
  component?: React.ElementType;
  transparent?: boolean;
}

export const Main: FC<IMainProps> = ({ className, children, component, transparent, ...props }) => {
  if (!component) {
    return (
      <main {...props} className={clsx(s['main'], { [s[`transparent`]]: transparent }, 'main', className)}>
        {children}
      </main>
    );
  }

  const Component = component;

  return (
    <Component {...props} className={className}>
      {children}
    </Component>
  );
};
