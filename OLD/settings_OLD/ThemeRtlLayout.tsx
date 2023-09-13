import { useEffect, ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';

type Props = {
  children: ReactNode;
};

export default function ThemeRtlLayout({ children }: Props) {
  const theme = useTheme();

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  return <div>{children}</div>;
}
