
import { Landing } from "./Pages/LandingPage/Landing";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Calling } from "./Pages/CallingPage/Calling";
import {  BrowserRouter, Routes, Route} from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      light: '#57FEFF',
      main: '#11B8B9',
      dark: '#007273',
      contrastText: '#2A2728',
    },
    secondary: {
      light: '#FFA7A7',
      main: '#FF5757',
      dark: '#CD2525',
      contrastText: '#2A2728',
    },
    action:{
      hover:'#ffbaoo'
    }
  },
});

function App() {
  return (
   <>
   <ThemeProvider theme={theme}>
   <BrowserRouter> 
   <Routes>
   <Route exact path="/" element={<Landing />} />  
   <Route exact path="/calling/:mettingId" element={<Calling />} />
   </Routes> 
   </BrowserRouter>
   </ThemeProvider>
   </>
  );
}

export default App;
