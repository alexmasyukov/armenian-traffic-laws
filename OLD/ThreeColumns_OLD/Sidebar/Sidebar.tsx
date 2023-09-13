import React, { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import s from './../ThreeColumns.module.scss';

export interface ISidebarProps extends HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
  hidden?: boolean;
}

export const Sidebar: FC<ISidebarProps> = ({
  className,
  children,
  collapsed,
  hidden,
  ...props
}) => (
  <aside
    {...props}
    className={clsx(
      s['sidebar'],
      {
        [s[`sidebar__collapsed`]]: collapsed,
        sidebar__collapsed: collapsed,
        [s[`sidebar__hidden`]]: hidden,
        sidebar__hidden: hidden,
      },
      className,
    )}
  >
    {children}
  </aside>
);
