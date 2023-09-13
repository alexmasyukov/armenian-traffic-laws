import React, { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { Sidebar } from './Sidebar/Sidebar';
import { Main } from './Main/Main';
import s from './ThreeColumns.module.scss';

export interface IThreeColumnsProps extends HTMLAttributes<HTMLDivElement> {}

export interface ThreeColumnsCompose {
  LeftSidebar: typeof Sidebar;
  Main: typeof Main;
  RightSidebar: typeof Sidebar;
}

export const ThreeColumns: FC<IThreeColumnsProps> & ThreeColumnsCompose = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx(s['three-columns'], className)} {...props}>
      {React.Children.toArray(children).splice(0, 3)}
    </div>
  );
};

ThreeColumns.LeftSidebar = ({ children, className, ...props }) => (
  <Sidebar {...props} className={clsx(s['sidebar-left'], 'sidebar-left', className)}>
    {children}
  </Sidebar>
);

ThreeColumns.RightSidebar = ({ children, className, ...props }) => (
  <Sidebar
    {...props}
    className={clsx(s['sidebar-right'], 'sidebar-right', className)}
  >
    {children}
  </Sidebar>
);

ThreeColumns.Main = Main;
