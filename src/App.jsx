import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Welcome from './components/Welcome';
import getLPTheme from './style/global';
import Footer from './components/Footer';


export default function LandingPage() {
  // eslint-disable-next-line no-unused-vars
  const [mode, _] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));


  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Header />
      <Welcome />
      <Footer />
    </ThemeProvider>
  );
}