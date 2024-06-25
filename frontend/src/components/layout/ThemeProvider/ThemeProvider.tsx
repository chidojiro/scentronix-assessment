'use client';

import { red, grey } from '@mui/material/colors';
import { ThemeProvider as BaseThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: red,
    secondary: grey,
  },
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
}
